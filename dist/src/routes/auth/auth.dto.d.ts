declare const RegisterBodyDTO_base: import("nestjs-zod").ZodDto<{
    code: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    confirmPassword: string;
}, import("zod").ZodEffectsDef<import("zod").ZodObject<import("zod").objectUtil.extendShape<Pick<{
    id: import("zod").ZodNumber;
    email: import("zod").ZodString;
    name: import("zod").ZodString;
    password: import("zod").ZodString;
    phoneNumber: import("zod").ZodDefault<import("zod").ZodString>;
    avatar: import("zod").ZodNullable<import("zod").ZodString>;
    totpSecret: import("zod").ZodNullable<import("zod").ZodString>;
    status: import("zod").ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
    roleId: import("zod").ZodNumber;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "name" | "email" | "password" | "phoneNumber">, {
    confirmPassword: import("zod").ZodString;
    code: import("zod").ZodString;
}>, "strict", import("zod").ZodTypeAny, {
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
}>>, {
    code: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber?: string | undefined;
}>;
export declare class RegisterBodyDTO extends RegisterBodyDTO_base {
}
declare const RegisterResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<{
    message: import("zod").ZodString;
    data: import("zod").ZodObject<Omit<{
        id: import("zod").ZodNumber;
        email: import("zod").ZodString;
        name: import("zod").ZodString;
        password: import("zod").ZodString;
        phoneNumber: import("zod").ZodDefault<import("zod").ZodString>;
        avatar: import("zod").ZodNullable<import("zod").ZodString>;
        totpSecret: import("zod").ZodNullable<import("zod").ZodString>;
        status: import("zod").ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
        roleId: import("zod").ZodNumber;
        createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
        updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, "password" | "totpSecret">, "strip", import("zod").ZodTypeAny, {
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
}, "strip", import("zod").ZodTypeAny>, {
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
export declare class RegisterResDTO extends RegisterResDTO_base {
}
declare const SendOTPBodyDTO_base: import("nestjs-zod").ZodDto<{
    type: "REGISTER" | "FORGOT_PASSWORD" | "LOGIN" | "DISABLE_2FA";
    email: string;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodNumber;
    email: import("zod").ZodString;
    code: import("zod").ZodString;
    type: import("zod").ZodEnum<["REGISTER", "FORGOT_PASSWORD", "LOGIN", "DISABLE_2FA"]>;
    expiresAt: import("zod").ZodDate;
    createdAt: import("zod").ZodDate;
}, "type" | "email">, "strict", import("zod").ZodTypeAny>, {
    type: "REGISTER" | "FORGOT_PASSWORD" | "LOGIN" | "DISABLE_2FA";
    email: string;
}>;
export declare class SendOTPBodyDTO extends SendOTPBodyDTO_base {
}
declare const LoginBodyDTO_base: import("nestjs-zod").ZodDto<{
    email: string;
    password: string;
    code?: string | undefined;
    totpCode?: string | undefined;
}, import("zod").ZodEffectsDef<import("zod").ZodObject<import("zod").objectUtil.extendShape<Pick<{
    id: import("zod").ZodNumber;
    email: import("zod").ZodString;
    name: import("zod").ZodString;
    password: import("zod").ZodString;
    phoneNumber: import("zod").ZodDefault<import("zod").ZodString>;
    avatar: import("zod").ZodNullable<import("zod").ZodString>;
    totpSecret: import("zod").ZodNullable<import("zod").ZodString>;
    status: import("zod").ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
    roleId: import("zod").ZodNumber;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "email" | "password">, {
    totpCode: import("zod").ZodOptional<import("zod").ZodString>;
    code: import("zod").ZodOptional<import("zod").ZodString>;
}>, "strict", import("zod").ZodTypeAny, {
    email: string;
    password: string;
    code?: string | undefined;
    totpCode?: string | undefined;
}, {
    email: string;
    password: string;
    code?: string | undefined;
    totpCode?: string | undefined;
}>>, {
    email: string;
    password: string;
    code?: string | undefined;
    totpCode?: string | undefined;
}>;
export declare class LoginBodyDTO extends LoginBodyDTO_base {
}
declare const LoginResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<{
    message: import("zod").ZodString;
    data: import("zod").ZodObject<{
        accessToken: import("zod").ZodString;
        refreshToken: import("zod").ZodString;
        user: import("zod").ZodObject<Omit<{
            id: import("zod").ZodNumber;
            email: import("zod").ZodString;
            name: import("zod").ZodString;
            password: import("zod").ZodString;
            phoneNumber: import("zod").ZodDefault<import("zod").ZodString>;
            avatar: import("zod").ZodNullable<import("zod").ZodString>;
            totpSecret: import("zod").ZodNullable<import("zod").ZodString>;
            status: import("zod").ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
            roleId: import("zod").ZodNumber;
            createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
            updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
            createdAt: import("zod").ZodDate;
            updatedAt: import("zod").ZodDate;
        }, "password" | "totpSecret">, "strip", import("zod").ZodTypeAny, {
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
    }, "strip", import("zod").ZodTypeAny, {
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
}, "strip", import("zod").ZodTypeAny>, {
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
export declare class LoginResDTO extends LoginResDTO_base {
}
declare const RefreshTokenBodyDTO_base: import("nestjs-zod").ZodDto<{
    refreshToken: string;
}, import("zod").ZodObjectDef<{
    refreshToken: import("zod").ZodString;
}, "strict", import("zod").ZodTypeAny>, {
    refreshToken: string;
}>;
export declare class RefreshTokenBodyDTO extends RefreshTokenBodyDTO_base {
}
declare const RefreshTokenResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<{
    message: import("zod").ZodString;
    data: import("zod").ZodObject<{
        accessToken: import("zod").ZodString;
        refreshToken: import("zod").ZodString;
        user: import("zod").ZodObject<Omit<{
            id: import("zod").ZodNumber;
            email: import("zod").ZodString;
            name: import("zod").ZodString;
            password: import("zod").ZodString;
            phoneNumber: import("zod").ZodDefault<import("zod").ZodString>;
            avatar: import("zod").ZodNullable<import("zod").ZodString>;
            totpSecret: import("zod").ZodNullable<import("zod").ZodString>;
            status: import("zod").ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
            roleId: import("zod").ZodNumber;
            createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
            updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
            createdAt: import("zod").ZodDate;
            updatedAt: import("zod").ZodDate;
        }, "password" | "totpSecret">, "strip", import("zod").ZodTypeAny, {
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
    }, "strip", import("zod").ZodTypeAny, {
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
}, "strip", import("zod").ZodTypeAny>, {
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
export declare class RefreshTokenResDTO extends RefreshTokenResDTO_base {
}
declare const LogoutBodyDTO_base: import("nestjs-zod").ZodDto<{
    refreshToken: string;
}, import("zod").ZodObjectDef<{
    refreshToken: import("zod").ZodString;
}, "strict", import("zod").ZodTypeAny>, {
    refreshToken: string;
}>;
export declare class LogoutBodyDTO extends LogoutBodyDTO_base {
}
declare const GetAuthorizationUrlResDTO_base: import("nestjs-zod").ZodDto<{
    url: string;
}, import("zod").ZodObjectDef<{
    url: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny>, {
    url: string;
}>;
export declare class GetAuthorizationUrlResDTO extends GetAuthorizationUrlResDTO_base {
}
declare const ForgotPasswordBodyDTO_base: import("nestjs-zod").ZodDto<{
    code: string;
    email: string;
    newPassword: string;
    confirmNewPassword: string;
}, import("zod").ZodEffectsDef<import("zod").ZodObject<{
    email: import("zod").ZodString;
    code: import("zod").ZodString;
    newPassword: import("zod").ZodString;
    confirmNewPassword: import("zod").ZodString;
}, "strict", import("zod").ZodTypeAny, {
    code: string;
    email: string;
    newPassword: string;
    confirmNewPassword: string;
}, {
    code: string;
    email: string;
    newPassword: string;
    confirmNewPassword: string;
}>>, {
    code: string;
    email: string;
    newPassword: string;
    confirmNewPassword: string;
}>;
export declare class ForgotPasswordBodyDTO extends ForgotPasswordBodyDTO_base {
}
declare const TwoFactorSetupResDTO_base: import("nestjs-zod").ZodDto<{
    secret: string;
    uri: string;
}, import("zod").ZodObjectDef<{
    secret: import("zod").ZodString;
    uri: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny>, {
    secret: string;
    uri: string;
}>;
export declare class TwoFactorSetupResDTO extends TwoFactorSetupResDTO_base {
}
declare const DisableTwoFactorBodyDTO_base: import("nestjs-zod").ZodDto<{
    code?: string | undefined;
    totpCode?: string | undefined;
}, import("zod").ZodEffectsDef<import("zod").ZodObject<{
    totpCode: import("zod").ZodOptional<import("zod").ZodString>;
    code: import("zod").ZodOptional<import("zod").ZodString>;
}, "strict", import("zod").ZodTypeAny, {
    code?: string | undefined;
    totpCode?: string | undefined;
}, {
    code?: string | undefined;
    totpCode?: string | undefined;
}>>, {
    code?: string | undefined;
    totpCode?: string | undefined;
}>;
export declare class DisableTwoFactorBodyDTO extends DisableTwoFactorBodyDTO_base {
}
export {};
