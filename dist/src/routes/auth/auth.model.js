"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoFactorSetupResSchema = exports.DisableTwoFactorBodySchema = exports.ForgotPasswordBodySchema = exports.GetAuthorizationUrlResSchema = exports.GoogleAuthStateSchema = exports.LogoutBodySchema = exports.DeviceSchema = exports.RefreshTokenSchema = exports.RefreshTokenResSchema = exports.RefreshTokenBodySchema = exports.LoginResSchema = exports.LoginBodySchema = exports.SendOTPBodySchema = exports.VerificationCodeSchema = exports.RegisterResSchema = exports.RegisterBodySchema = void 0;
const auth_constants_1 = require("../../shared/constants/auth.constants");
const shared_user_model_1 = require("../../shared/models/shared-user.model");
const zod_1 = require("zod");
exports.RegisterBodySchema = shared_user_model_1.UserSchema.pick({
    email: true,
    password: true,
    name: true,
    phoneNumber: true,
})
    .extend({
    confirmPassword: zod_1.z.string().min(6).max(100),
    code: zod_1.z.string().length(6),
})
    .strict()
    .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: 'custom',
            message: 'Password and confirm password must match',
            path: ['confirmPassword'],
        });
    }
});
exports.RegisterResSchema = zod_1.z.object({
    message: zod_1.z.string(),
    data: shared_user_model_1.UserSchema.omit({
        password: true,
        totpSecret: true,
    }),
});
exports.VerificationCodeSchema = zod_1.z.object({
    id: zod_1.z.number(),
    email: zod_1.z.string().email(),
    code: zod_1.z.string().length(6),
    type: zod_1.z.enum([
        auth_constants_1.TypeOfVerificationCode.REGISTER,
        auth_constants_1.TypeOfVerificationCode.FORGOT_PASSWORD,
        auth_constants_1.TypeOfVerificationCode.LOGIN,
        auth_constants_1.TypeOfVerificationCode.DISABLE_2FA,
    ]),
    expiresAt: zod_1.z.date(),
    createdAt: zod_1.z.date(),
});
exports.SendOTPBodySchema = exports.VerificationCodeSchema.pick({
    email: true,
    type: true,
}).strict();
exports.LoginBodySchema = shared_user_model_1.UserSchema.pick({
    email: true,
    password: true,
})
    .extend({
    totpCode: zod_1.z.string().length(6).optional(),
    code: zod_1.z.string().length(6).optional(),
})
    .strict()
    .superRefine(({ totpCode, code }, ctx) => {
    const message = 'You must provide either TOTP Code or Email OTP Code';
    if (totpCode !== undefined && code !== undefined) {
        ctx.addIssue({
            path: ['totpCode'],
            message,
            code: 'custom',
        });
        ctx.addIssue({
            path: ['code'],
            message,
            code: 'custom',
        });
    }
});
exports.LoginResSchema = zod_1.z.object({
    message: zod_1.z.string(),
    data: zod_1.z.object({
        accessToken: zod_1.z.string(),
        refreshToken: zod_1.z.string(),
        user: shared_user_model_1.UserSchema.omit({
            password: true,
            totpSecret: true,
        }),
    }),
});
exports.RefreshTokenBodySchema = zod_1.z
    .object({
    refreshToken: zod_1.z.string(),
})
    .strict();
exports.RefreshTokenResSchema = exports.LoginResSchema;
exports.RefreshTokenSchema = zod_1.z
    .object({
    token: zod_1.z.string(),
    userId: zod_1.z.number(),
    deviceId: zod_1.z.number(),
    expiresAt: zod_1.z.date(),
    createdAt: zod_1.z.date(),
})
    .strict();
exports.DeviceSchema = zod_1.z
    .object({
    id: zod_1.z.number(),
    userId: zod_1.z.number(),
    userAgent: zod_1.z.string(),
    ip: zod_1.z.string(),
    lastActive: zod_1.z.date(),
    createdAt: zod_1.z.date(),
    isActive: zod_1.z.boolean(),
})
    .strict();
exports.LogoutBodySchema = exports.RefreshTokenBodySchema;
exports.GoogleAuthStateSchema = exports.DeviceSchema.pick({
    userAgent: true,
    ip: true,
}).strict();
exports.GetAuthorizationUrlResSchema = zod_1.z.object({
    url: zod_1.z.string().url(),
});
exports.ForgotPasswordBodySchema = zod_1.z
    .object({
    email: zod_1.z.string().email(),
    code: zod_1.z.string().length(6),
    newPassword: zod_1.z.string().min(6).max(100),
    confirmNewPassword: zod_1.z.string().min(6).max(100),
})
    .strict()
    .superRefine(({ confirmNewPassword, newPassword }, ctx) => {
    if (confirmNewPassword !== newPassword) {
        ctx.addIssue({
            code: 'custom',
            message: 'Password and confirm password must match',
            path: ['confirmNewPassword'],
        });
    }
});
exports.DisableTwoFactorBodySchema = zod_1.z
    .object({
    totpCode: zod_1.z.string().length(6).optional(),
    code: zod_1.z.string().length(6).optional(),
})
    .strict()
    .superRefine(({ totpCode, code }, ctx) => {
    const message = 'Bạn phải cung cấp mã xác thực 2FA hoặc mã OTP. Không được cung cấp cả 2';
    if ((totpCode !== undefined) === (code !== undefined)) {
        ctx.addIssue({
            path: ['totpCode'],
            message,
            code: 'custom',
        });
        ctx.addIssue({
            path: ['code'],
            message,
            code: 'custom',
        });
    }
});
exports.TwoFactorSetupResSchema = zod_1.z.object({
    secret: zod_1.z.string(),
    uri: zod_1.z.string(),
});
//# sourceMappingURL=auth.model.js.map