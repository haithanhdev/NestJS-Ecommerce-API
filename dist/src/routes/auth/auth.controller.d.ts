import { Response } from 'express';
import { DisableTwoFactorBodyDTO, ForgotPasswordBodyDTO, LoginBodyDTO, LogoutBodyDTO, RefreshTokenBodyDTO, RegisterBodyDTO, SendOTPBodyDTO } from 'src/routes/auth/auth.dto';
import { AuthService } from 'src/routes/auth/auth.service';
import { GoogleService } from 'src/routes/auth/google.service';
import { EmptyBodyDTO } from 'src/shared/dtos/request.dto';
export declare class AuthController {
    private readonly authService;
    private readonly googleService;
    constructor(authService: AuthService, googleService: GoogleService);
    register(body: RegisterBodyDTO): Promise<{
        message: string;
        data: Omit<{
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
        }, "password" | "totpSecret">;
    }>;
    sendOTP(body: SendOTPBodyDTO): Promise<{
        message: string;
    }>;
    login(body: LoginBodyDTO, userAgent: string, ip: string): Promise<{
        message: string;
        data: {
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
        };
    }>;
    refreshToken(body: RefreshTokenBodyDTO, userAgent: string, ip: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(body: LogoutBodyDTO): Promise<{
        message: string;
    }>;
    getGoogleLink(req: any, userAgent: string, ip: string): {
        url: string;
    };
    googleCallback(code: string, state: string, res: Response): Promise<void>;
    forgotPassword(body: ForgotPasswordBodyDTO): Promise<{
        message: string;
    }>;
    setupTwoFactorAuth(_: EmptyBodyDTO, userId: number): Promise<{
        secret: string;
        uri: string;
    }>;
    disableTwoFactorAuth(body: DisableTwoFactorBodyDTO, userId: number): Promise<{
        message: string;
    }>;
}
