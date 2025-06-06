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
exports.GoogleService = void 0;
const common_1 = require("@nestjs/common");
const googleapis_1 = require("googleapis");
const auth_repo_1 = require("./auth.repo");
const auth_service_1 = require("./auth.service");
const auth_error_1 = require("./auth.error");
const config_1 = __importDefault(require("../../shared/config"));
const hashing_service_1 = require("../../shared/services/hashing.service");
const uuid_1 = require("uuid");
const shared_role_repo_1 = require("../../shared/repositories/shared-role.repo");
let GoogleService = class GoogleService {
    constructor(authRepository, hashingService, sharedRoleRepository, authService) {
        this.authRepository = authRepository;
        this.hashingService = hashingService;
        this.sharedRoleRepository = sharedRoleRepository;
        this.authService = authService;
        this.oauth2Client = new googleapis_1.google.auth.OAuth2(config_1.default.GOOGLE_CLIENT_ID, config_1.default.GOOGLE_CLIENT_SECRET, config_1.default.GOOGLE_REDIRECT_URI);
    }
    getAuthorizationUrl({ userAgent, ip }) {
        const scope = ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'];
        const stateString = Buffer.from(JSON.stringify({
            userAgent,
            ip,
        })).toString('base64');
        const url = this.oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope,
            include_granted_scopes: true,
            state: stateString,
        });
        return { url };
    }
    async googleCallback({ code, state }) {
        try {
            let userAgent = 'Unknown';
            let ip = 'Unknown';
            try {
                if (state) {
                    const clientInfo = JSON.parse(Buffer.from(state, 'base64').toString());
                    userAgent = clientInfo.userAgent;
                    ip = clientInfo.ip;
                }
            }
            catch (error) {
                console.error('Error parsing state:', error);
            }
            const { tokens } = await this.oauth2Client.getToken(code);
            this.oauth2Client.setCredentials(tokens);
            const oauth2 = googleapis_1.google.oauth2({ version: 'v2', auth: this.oauth2Client });
            const { data } = await oauth2.userinfo.get();
            if (!data.email) {
                throw auth_error_1.GoogleUserInfoError;
            }
            let user = await this.authRepository.findUniqueUserIncludeRole({ email: data.email });
            if (!user) {
                const clientRoleId = await this.sharedRoleRepository.getClientRoleId();
                const randomPassword = (0, uuid_1.v4)();
                const hashedPassword = await this.hashingService.hash(randomPassword);
                user = await this.authRepository.createUserIncludeRole({
                    email: data.email,
                    name: data.name ?? `user${(0, uuid_1.v4)()}`,
                    phoneNumber: '',
                    password: hashedPassword,
                    roleId: clientRoleId,
                    avatar: data.picture ?? '',
                });
            }
            const device = await this.authRepository.createDevice({
                userId: user.id,
                userAgent,
                ip,
            });
            const authTokens = await this.authService.generateTokens({
                userId: user.id,
                deviceId: device.id,
                roleId: user.roleId,
                roleName: user.role.name,
            });
            return {
                message: 'Login with google successfully',
                data: {
                    accessToken: authTokens.accessToken,
                    refreshToken: authTokens.refreshToken,
                    user,
                },
            };
        }
        catch (error) {
            console.error(`Google callback error: ${error}`);
            throw error;
        }
    }
};
exports.GoogleService = GoogleService;
exports.GoogleService = GoogleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_repo_1.AuthRepository,
        hashing_service_1.HashingService,
        shared_role_repo_1.SharedRoleRepository,
        auth_service_1.AuthService])
], GoogleService);
//# sourceMappingURL=google.service.js.map