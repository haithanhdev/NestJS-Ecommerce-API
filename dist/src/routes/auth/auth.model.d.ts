import { z } from 'zod';
export declare const RegisterBodySchema: z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<Pick<{
    id: z.ZodNumber;
    email: z.ZodString;
    name: z.ZodString;
    password: z.ZodString;
    phoneNumber: z.ZodDefault<z.ZodString>;
    avatar: z.ZodNullable<z.ZodString>;
    totpSecret: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
    roleId: z.ZodNumber;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "name" | "email" | "password" | "phoneNumber">, {
    confirmPassword: z.ZodString;
    code: z.ZodString;
}>, "strict", z.ZodTypeAny, {
    code: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    confirmPassword: string;
}, {
    code: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber?: string | undefined;
}>, {
    code: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    confirmPassword: string;
}, {
    code: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber?: string | undefined;
}>;
export declare const RegisterResSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<Omit<{
        id: z.ZodNumber;
        email: z.ZodString;
        name: z.ZodString;
        password: z.ZodString;
        phoneNumber: z.ZodDefault<z.ZodString>;
        avatar: z.ZodNullable<z.ZodString>;
        totpSecret: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
        roleId: z.ZodNumber;
        createdById: z.ZodNullable<z.ZodNumber>;
        updatedById: z.ZodNullable<z.ZodNumber>;
        deletedById: z.ZodNullable<z.ZodNumber>;
        deletedAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, "password" | "totpSecret">, "strip", z.ZodTypeAny, {
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
        phoneNumber: string;
        avatar: string | null;
    }, {
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
        avatar: string | null;
        phoneNumber?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
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
        phoneNumber: string;
        avatar: string | null;
    };
}, {
    message: string;
    data: {
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
        avatar: string | null;
        phoneNumber?: string | undefined;
    };
}>;
export declare const VerificationCodeSchema: z.ZodObject<{
    id: z.ZodNumber;
    email: z.ZodString;
    code: z.ZodString;
    type: z.ZodEnum<["REGISTER", "FORGOT_PASSWORD", "LOGIN", "DISABLE_2FA"]>;
    expiresAt: z.ZodDate;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    code: string;
    type: "REGISTER" | "FORGOT_PASSWORD" | "LOGIN" | "DISABLE_2FA";
    id: number;
    createdAt: Date;
    email: string;
    expiresAt: Date;
}, {
    code: string;
    type: "REGISTER" | "FORGOT_PASSWORD" | "LOGIN" | "DISABLE_2FA";
    id: number;
    createdAt: Date;
    email: string;
    expiresAt: Date;
}>;
export declare const SendOTPBodySchema: z.ZodObject<Pick<{
    id: z.ZodNumber;
    email: z.ZodString;
    code: z.ZodString;
    type: z.ZodEnum<["REGISTER", "FORGOT_PASSWORD", "LOGIN", "DISABLE_2FA"]>;
    expiresAt: z.ZodDate;
    createdAt: z.ZodDate;
}, "type" | "email">, "strict", z.ZodTypeAny, {
    type: "REGISTER" | "FORGOT_PASSWORD" | "LOGIN" | "DISABLE_2FA";
    email: string;
}, {
    type: "REGISTER" | "FORGOT_PASSWORD" | "LOGIN" | "DISABLE_2FA";
    email: string;
}>;
export declare const LoginBodySchema: z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<Pick<{
    id: z.ZodNumber;
    email: z.ZodString;
    name: z.ZodString;
    password: z.ZodString;
    phoneNumber: z.ZodDefault<z.ZodString>;
    avatar: z.ZodNullable<z.ZodString>;
    totpSecret: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
    roleId: z.ZodNumber;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "email" | "password">, {
    totpCode: z.ZodOptional<z.ZodString>;
    code: z.ZodOptional<z.ZodString>;
}>, "strict", z.ZodTypeAny, {
    email: string;
    password: string;
    code?: string | undefined;
    totpCode?: string | undefined;
}, {
    email: string;
    password: string;
    code?: string | undefined;
    totpCode?: string | undefined;
}>, {
    email: string;
    password: string;
    code?: string | undefined;
    totpCode?: string | undefined;
}, {
    email: string;
    password: string;
    code?: string | undefined;
    totpCode?: string | undefined;
}>;
export declare const LoginResSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        accessToken: z.ZodString;
        refreshToken: z.ZodString;
        user: z.ZodObject<Omit<{
            id: z.ZodNumber;
            email: z.ZodString;
            name: z.ZodString;
            password: z.ZodString;
            phoneNumber: z.ZodDefault<z.ZodString>;
            avatar: z.ZodNullable<z.ZodString>;
            totpSecret: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
            roleId: z.ZodNumber;
            createdById: z.ZodNullable<z.ZodNumber>;
            updatedById: z.ZodNullable<z.ZodNumber>;
            deletedById: z.ZodNullable<z.ZodNumber>;
            deletedAt: z.ZodNullable<z.ZodDate>;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
        }, "password" | "totpSecret">, "strip", z.ZodTypeAny, {
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
            phoneNumber: string;
            avatar: string | null;
        }, {
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
            avatar: string | null;
            phoneNumber?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
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
            phoneNumber: string;
            avatar: string | null;
        };
        refreshToken: string;
        accessToken: string;
    }, {
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
            avatar: string | null;
            phoneNumber?: string | undefined;
        };
        refreshToken: string;
        accessToken: string;
    }>;
}, "strip", z.ZodTypeAny, {
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
            phoneNumber: string;
            avatar: string | null;
        };
        refreshToken: string;
        accessToken: string;
    };
}, {
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
            avatar: string | null;
            phoneNumber?: string | undefined;
        };
        refreshToken: string;
        accessToken: string;
    };
}>;
export declare const RefreshTokenBodySchema: z.ZodObject<{
    refreshToken: z.ZodString;
}, "strict", z.ZodTypeAny, {
    refreshToken: string;
}, {
    refreshToken: string;
}>;
export declare const RefreshTokenResSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        accessToken: z.ZodString;
        refreshToken: z.ZodString;
        user: z.ZodObject<Omit<{
            id: z.ZodNumber;
            email: z.ZodString;
            name: z.ZodString;
            password: z.ZodString;
            phoneNumber: z.ZodDefault<z.ZodString>;
            avatar: z.ZodNullable<z.ZodString>;
            totpSecret: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
            roleId: z.ZodNumber;
            createdById: z.ZodNullable<z.ZodNumber>;
            updatedById: z.ZodNullable<z.ZodNumber>;
            deletedById: z.ZodNullable<z.ZodNumber>;
            deletedAt: z.ZodNullable<z.ZodDate>;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
        }, "password" | "totpSecret">, "strip", z.ZodTypeAny, {
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
            phoneNumber: string;
            avatar: string | null;
        }, {
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
            avatar: string | null;
            phoneNumber?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
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
            phoneNumber: string;
            avatar: string | null;
        };
        refreshToken: string;
        accessToken: string;
    }, {
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
            avatar: string | null;
            phoneNumber?: string | undefined;
        };
        refreshToken: string;
        accessToken: string;
    }>;
}, "strip", z.ZodTypeAny, {
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
            phoneNumber: string;
            avatar: string | null;
        };
        refreshToken: string;
        accessToken: string;
    };
}, {
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
            avatar: string | null;
            phoneNumber?: string | undefined;
        };
        refreshToken: string;
        accessToken: string;
    };
}>;
export declare const RefreshTokenSchema: z.ZodObject<{
    token: z.ZodString;
    userId: z.ZodNumber;
    deviceId: z.ZodNumber;
    expiresAt: z.ZodDate;
    createdAt: z.ZodDate;
}, "strict", z.ZodTypeAny, {
    userId: number;
    deviceId: number;
    createdAt: Date;
    token: string;
    expiresAt: Date;
}, {
    userId: number;
    deviceId: number;
    createdAt: Date;
    token: string;
    expiresAt: Date;
}>;
export declare const DeviceSchema: z.ZodObject<{
    id: z.ZodNumber;
    userId: z.ZodNumber;
    userAgent: z.ZodString;
    ip: z.ZodString;
    lastActive: z.ZodDate;
    createdAt: z.ZodDate;
    isActive: z.ZodBoolean;
}, "strict", z.ZodTypeAny, {
    userId: number;
    id: number;
    isActive: boolean;
    createdAt: Date;
    userAgent: string;
    ip: string;
    lastActive: Date;
}, {
    userId: number;
    id: number;
    isActive: boolean;
    createdAt: Date;
    userAgent: string;
    ip: string;
    lastActive: Date;
}>;
export declare const LogoutBodySchema: z.ZodObject<{
    refreshToken: z.ZodString;
}, "strict", z.ZodTypeAny, {
    refreshToken: string;
}, {
    refreshToken: string;
}>;
export declare const GoogleAuthStateSchema: z.ZodObject<Pick<{
    id: z.ZodNumber;
    userId: z.ZodNumber;
    userAgent: z.ZodString;
    ip: z.ZodString;
    lastActive: z.ZodDate;
    createdAt: z.ZodDate;
    isActive: z.ZodBoolean;
}, "userAgent" | "ip">, "strict", z.ZodTypeAny, {
    userAgent: string;
    ip: string;
}, {
    userAgent: string;
    ip: string;
}>;
export declare const GetAuthorizationUrlResSchema: z.ZodObject<{
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
}, {
    url: string;
}>;
export declare const ForgotPasswordBodySchema: z.ZodEffects<z.ZodObject<{
    email: z.ZodString;
    code: z.ZodString;
    newPassword: z.ZodString;
    confirmNewPassword: z.ZodString;
}, "strict", z.ZodTypeAny, {
    code: string;
    email: string;
    newPassword: string;
    confirmNewPassword: string;
}, {
    code: string;
    email: string;
    newPassword: string;
    confirmNewPassword: string;
}>, {
    code: string;
    email: string;
    newPassword: string;
    confirmNewPassword: string;
}, {
    code: string;
    email: string;
    newPassword: string;
    confirmNewPassword: string;
}>;
export declare const DisableTwoFactorBodySchema: z.ZodEffects<z.ZodObject<{
    totpCode: z.ZodOptional<z.ZodString>;
    code: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    code?: string | undefined;
    totpCode?: string | undefined;
}, {
    code?: string | undefined;
    totpCode?: string | undefined;
}>, {
    code?: string | undefined;
    totpCode?: string | undefined;
}, {
    code?: string | undefined;
    totpCode?: string | undefined;
}>;
export declare const TwoFactorSetupResSchema: z.ZodObject<{
    secret: z.ZodString;
    uri: z.ZodString;
}, "strip", z.ZodTypeAny, {
    secret: string;
    uri: string;
}, {
    secret: string;
    uri: string;
}>;
export type RegisterBodyType = z.infer<typeof RegisterBodySchema>;
export type RegisterResType = z.infer<typeof RegisterResSchema>;
export type VerificationCodeType = z.infer<typeof VerificationCodeSchema>;
export type SendOTPBodyType = z.infer<typeof SendOTPBodySchema>;
export type LoginBodyType = z.infer<typeof LoginBodySchema>;
export type LoginResType = z.infer<typeof LoginResSchema>;
export type RefreshTokenBodyType = z.infer<typeof RefreshTokenBodySchema>;
export type RefreshTokenResType = LoginResType;
export type RefreshTokenType = z.infer<typeof RefreshTokenSchema>;
export type DeviceType = z.infer<typeof DeviceSchema>;
export type LogoutBodyType = RefreshTokenBodyType;
export type GoogleAuthStateType = z.infer<typeof GoogleAuthStateSchema>;
export type GetAuthorizationUrlResType = z.infer<typeof GetAuthorizationUrlResSchema>;
export type ForgotPasswordBodyType = z.infer<typeof ForgotPasswordBodySchema>;
export type DisableTwoFactorBodyType = z.infer<typeof DisableTwoFactorBodySchema>;
export type TwoFactorSetupResType = z.infer<typeof TwoFactorSetupResSchema>;
