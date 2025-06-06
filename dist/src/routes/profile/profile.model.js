"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordBodySchema = exports.UpdateMeBodySchema = void 0;
const zod_1 = require("zod");
const shared_user_model_1 = require("../../shared/models/shared-user.model");
exports.UpdateMeBodySchema = shared_user_model_1.UserSchema.pick({
    name: true,
    phoneNumber: true,
    avatar: true,
}).strict();
exports.ChangePasswordBodySchema = shared_user_model_1.UserSchema.pick({
    password: true,
})
    .extend({
    newPassword: zod_1.z.string().min(6).max(100),
    confirmNewPassword: zod_1.z.string().min(6).max(100),
})
    .strict()
    .superRefine(({ newPassword, confirmNewPassword }, ctx) => {
    if (newPassword !== confirmNewPassword) {
        ctx.addIssue({
            code: 'custom',
            message: 'Error.ConfirmPasswordNotMatch',
            path: ['confirmNewPassword'],
        });
    }
});
//# sourceMappingURL=profile.model.js.map