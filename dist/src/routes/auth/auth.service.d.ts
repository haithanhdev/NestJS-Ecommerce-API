import { DisableTwoFactorBodyType, ForgotPasswordBodyType, LoginBodyType, RefreshTokenBodyType, RegisterBodyType, SendOTPBodyType } from 'src/routes/auth/auth.model';
import { AuthRepository } from 'src/routes/auth/auth.repo';
import { SharedUserRepository } from 'src/shared/repositories/shared-user.repo';
import { HashingService } from 'src/shared/services/hashing.service';
import { TokenService } from 'src/shared/services/token.service';
import { EmailService } from 'src/shared/services/email.service';
import { AccessTokenPayloadCreate } from 'src/shared/types/jwt.type';
import { TwoFactorService } from 'src/shared/services/2fa.service';
import { TypeOfVerificationCodeType } from 'src/shared/constants/auth.constants';
import { SharedRoleRepository } from 'src/shared/repositories/shared-role.repo';
export declare class AuthService {
    private readonly hashingService;
    private readonly authRepository;
    private readonly sharedUserRepository;
    private readonly sharedRoleRepository;
    private readonly emailService;
    private readonly tokenService;
    private readonly twoFactorService;
    constructor(hashingService: HashingService, authRepository: AuthRepository, sharedUserRepository: SharedUserRepository, sharedRoleRepository: SharedRoleRepository, emailService: EmailService, tokenService: TokenService, twoFactorService: TwoFactorService);
    validateVerificationCode({ email, code, type, }: {
        email: string;
        code: string;
        type: TypeOfVerificationCodeType;
    }): Promise<{
        code: string;
        type: "REGISTER" | "FORGOT_PASSWORD" | "LOGIN" | "DISABLE_2FA";
        id: number;
        createdAt: Date;
        email: string;
        expiresAt: Date;
    }>;
    register(body: RegisterBodyType): Promise<Omit<{
        status: "ACTIVE" | "INACTIVE" | "BLOCKED";
        roleId: number;
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        phoneNumber: string;
        avatar: string | null;
        totpSecret: string | null;
    }, "password" | "totpSecret">>;
    sendOTP(body: SendOTPBodyType): Promise<{
        message: string;
    }>;
    login(body: LoginBodyType & {
        userAgent: string;
        ip: string;
    }): Promise<{
        user: {
            status: "ACTIVE" | "INACTIVE" | "BLOCKED";
            roleId: number;
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            phoneNumber: string;
            avatar: string | null;
            totpSecret: string | null;
        } & {
            role: import("../../shared/models/shared-role.model").RoleType;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    generateTokens({ userId, deviceId, roleId, roleName }: AccessTokenPayloadCreate): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshToken({ refreshToken, userAgent, ip }: RefreshTokenBodyType & {
        userAgent: string;
        ip: string;
    }): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(refreshToken: string): Promise<{
        message: string;
    }>;
    forgotPassword(body: ForgotPasswordBodyType): Promise<{
        message: string;
    }>;
    setupTwoFactorAuth(userId: number): Promise<{
        secret: string;
        uri: string;
    }>;
    disableTwoFactorAuth(data: DisableTwoFactorBodyType & {
        userId: number;
    }): Promise<{
        message: string;
    }>;
}
