"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const date_fns_1 = require("date-fns");
const auth_repo_1 = require("./auth.repo");
const helpers_1 = require("../../shared/helpers");
const shared_user_repo_1 = require("../../shared/repositories/shared-user.repo");
const hashing_service_1 = require("../../shared/services/hashing.service");
const token_service_1 = require("../../shared/services/token.service");
const ms_1 = __importDefault(require("ms"));
const config_1 = __importDefault(require("../../shared/config"));
const email_service_1 = require("../../shared/services/email.service");
const auth_error_1 = require("./auth.error");
const _2fa_service_1 = require("../../shared/services/2fa.service");
const error_1 = require("../../shared/error");
const auth_constants_1 = require("../../shared/constants/auth.constants");
const shared_role_repo_1 = require("../../shared/repositories/shared-role.repo");
let AuthService = class AuthService {
    constructor(hashingService, authRepository, sharedUserRepository, sharedRoleRepository, emailService, tokenService, twoFactorService) {
        this.hashingService = hashingService;
        this.authRepository = authRepository;
        this.sharedUserRepository = sharedUserRepository;
        this.sharedRoleRepository = sharedRoleRepository;
        this.emailService = emailService;
        this.tokenService = tokenService;
        this.twoFactorService = twoFactorService;
    }
    async validateVerificationCode({ email, code, type, }) {
        const vevificationCode = await this.authRepository.findUniqueVerificationCode({
            email_type: {
                email,
                type,
            },
        });
        if (!vevificationCode) {
            throw auth_error_1.InvalidOTPException;
        }
        if (vevificationCode.expiresAt < new Date()) {
            throw auth_error_1.OTPExpiredException;
        }
        return vevificationCode;
    }
    async register(body) {
        try {
            await this.validateVerificationCode({
                email: body.email,
                code: body.code,
                type: auth_constants_1.TypeOfVerificationCode.REGISTER,
            });
            const clientRoleId = await this.sharedRoleRepository.getClientRoleId();
            const hashedPassword = await this.hashingService.hash(body.password);
            const [user] = await Promise.all([
                this.authRepository.createUser({
                    email: body.email,
                    name: body.name,
                    phoneNumber: body.phoneNumber,
                    password: hashedPassword,
                    roleId: clientRoleId,
                }),
                this.authRepository.deleteVerificationCode({
                    email_type: {
                        email: body.email,
                        type: auth_constants_1.TypeOfVerificationCode.REGISTER,
                    },
                }),
            ]);
            return user;
        }
        catch (error) {
            if ((0, helpers_1.isUniqueConstraintPrismaError)(error)) {
                throw auth_error_1.EmailAlreadyExistsException;
            }
            throw error;
        }
    }
    async sendOTP(body) {
        const user = await this.sharedUserRepository.findUnique({
            email: body.email,
        });
        if (body.type === auth_constants_1.TypeOfVerificationCode.REGISTER && user) {
            throw auth_error_1.EmailAlreadyExistsException;
        }
        if (body.type === auth_constants_1.TypeOfVerificationCode.FORGOT_PASSWORD && !user) {
            throw auth_error_1.EmailNotFoundException;
        }
        const code = (0, helpers_1.generateOTP)();
        await this.authRepository.createVerificationCode({
            email: body.email,
            code,
            type: body.type,
            expiresAt: (0, date_fns_1.addMilliseconds)(new Date(), (0, ms_1.default)(config_1.default.OTP_EXPIRES_IN)),
        });
        const { error } = await this.emailService.sendOTP({
            email: body.email,
            code,
        });
        if (error) {
            throw auth_error_1.FailedToSendOTPException;
        }
        return { message: 'Gửi mã OTP thành công' };
    }
    async login(body) {
        const user = await this.authRepository.findUniqueUserIncludeRole({
            email: body.email,
        });
        if (!user) {
            throw auth_error_1.EmailNotFoundException;
        }
        const isPasswordMatch = await this.hashingService.compare(body.password, user.password);
        if (!isPasswordMatch) {
            throw error_1.InvalidPasswordException;
        }
        if (user.totpSecret) {
            if (!body.totpCode && !body.code) {
                throw auth_error_1.InvalidTOTPAndCodeException;
            }
            if (body.totpCode) {
                const isValid = this.twoFactorService.verifyTOTP({
                    email: user.email,
                    secret: user.totpSecret,
                    token: body.totpCode,
                });
                if (!isValid) {
                    throw auth_error_1.InvalidTOTPException;
                }
            }
            else if (body.code) {
                await this.validateVerificationCode({
                    email: user.email,
                    code: body.code,
                    type: auth_constants_1.TypeOfVerificationCode.LOGIN,
                });
            }
        }
        const device = await this.authRepository.createDevice({
            userId: user.id,
            userAgent: body.userAgent,
            ip: body.ip,
        });
        const tokens = await this.generateTokens({
            userId: user.id,
            deviceId: device.id,
            roleId: user.roleId,
            roleName: user.role.name,
        });
        return {
            ...tokens,
            user,
        };
    }
    async generateTokens({ userId, deviceId, roleId, roleName }) {
        const [accessToken, refreshToken] = await Promise.all([
            this.tokenService.signAccessToken({
                userId,
                deviceId,
                roleId,
                roleName,
            }),
            this.tokenService.signRefreshToken({
                userId,
            }),
        ]);
        const decodedRefreshToken = await this.tokenService.verifyRefreshToken(refreshToken);
        await this.authRepository.createRefreshToken({
            token: refreshToken,
            userId,
            expiresAt: new Date(decodedRefreshToken.exp * 1000),
            deviceId,
        });
        return { accessToken, refreshToken };
    }
    async refreshToken({ refreshToken, userAgent, ip }) {
        try {
            const { userId } = await this.tokenService.verifyRefreshToken(refreshToken);
            const refreshTokenInDb = await this.authRepository.findUniqueRefreshTokenIncludeUserRole({
                token: refreshToken,
            });
            if (!refreshTokenInDb) {
                throw auth_error_1.RefreshTokenAlreadyUsedException;
            }
            const { deviceId, user: { roleId, role: { name: roleName }, }, } = refreshTokenInDb;
            const $updateDevice = this.authRepository.updateDevice(deviceId, {
                ip,
                userAgent,
            });
            const $deleteRefreshToken = this.authRepository.deleteRefreshToken({
                token: refreshToken,
            });
            const $tokens = this.generateTokens({ userId, roleId, roleName, deviceId });
            const [, , tokens] = await Promise.all([$updateDevice, $deleteRefreshToken, $tokens]);
            return tokens;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw auth_error_1.UnauthorizedAccessException;
        }
    }
    async logout(refreshToken) {
        try {
            await this.tokenService.verifyRefreshToken(refreshToken);
            const deletedRefreshToken = await this.authRepository.deleteRefreshToken({
                token: refreshToken,
            });
            await this.authRepository.updateDevice(deletedRefreshToken.deviceId, {
                isActive: false,
            });
            return { message: 'Đăng xuất thành công' };
        }
        catch (error) {
            if ((0, helpers_1.isNotFoundPrismaError)(error)) {
                throw auth_error_1.RefreshTokenAlreadyUsedException;
            }
            throw auth_error_1.UnauthorizedAccessException;
        }
    }
    async forgotPassword(body) {
        const { email, code, newPassword } = body;
        const user = await this.sharedUserRepository.findUnique({
            email,
        });
        if (!user) {
            throw auth_error_1.EmailNotFoundException;
        }
        await this.validateVerificationCode({
            email,
            code,
            type: auth_constants_1.TypeOfVerificationCode.FORGOT_PASSWORD,
        });
        const hashedPassword = await this.hashingService.hash(newPassword);
        await Promise.all([
            this.sharedUserRepository.update({ id: user.id }, {
                password: hashedPassword,
                updatedById: user.id,
            }),
            this.authRepository.deleteVerificationCode({
                email_type: {
                    email: body.email,
                    type: auth_constants_1.TypeOfVerificationCode.FORGOT_PASSWORD,
                },
            }),
        ]);
        return {
            message: 'Đổi mật khẩu thành công',
        };
    }
    async setupTwoFactorAuth(userId) {
        const user = await this.sharedUserRepository.findUnique({
            id: userId,
        });
        if (!user) {
            throw auth_error_1.EmailNotFoundException;
        }
        if (user.totpSecret) {
            throw auth_error_1.TOTPAlreadyEnabledException;
        }
        const { secret, uri } = this.twoFactorService.generateTOTPSecret(user.email);
        await this.sharedUserRepository.update({ id: userId }, { totpSecret: secret, updatedById: userId });
        return {
            secret,
            uri,
        };
    }
    async disableTwoFactorAuth(data) {
        const { userId, totpCode, code } = data;
        const user = await this.sharedUserRepository.findUnique({ id: userId });
        if (!user) {
            throw auth_error_1.EmailNotFoundException;
        }
        if (!user.totpSecret) {
            throw auth_error_1.TOTPNotEnabledException;
        }
        if (totpCode) {
            const isValid = this.twoFactorService.verifyTOTP({
                email: user.email,
                secret: user.totpSecret,
                token: totpCode,
            });
            if (!isValid) {
                throw auth_error_1.InvalidTOTPException;
            }
        }
        else if (code) {
            await this.validateVerificationCode({
                email: user.email,
                code,
                type: auth_constants_1.TypeOfVerificationCode.DISABLE_2FA,
            });
        }
        await this.sharedUserRepository.update({ id: userId }, { totpSecret: null, updatedById: userId });
        return {
            message: 'Tắt 2FA thành công',
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [hashing_service_1.HashingService,
        auth_repo_1.AuthRepository,
        shared_user_repo_1.SharedUserRepository,
        shared_role_repo_1.SharedRoleRepository,
        email_service_1.EmailService,
        token_service_1.TokenService,
        _2fa_service_1.TwoFactorService])
], AuthService);
//# sourceMappingURL=auth.service.js.map