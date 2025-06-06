"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileResSchema = exports.GetUserProfileResSchema = exports.UserSchema = void 0;
const auth_constants_1 = require("../constants/auth.constants");
const shared_permission_model_1 = require("./shared-permission.model");
const shared_role_model_1 = require("./shared-role.model");
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    id: zod_1.z.number(),
    email: zod_1.z.string().email(),
    name: zod_1.z.string().min(1).max(100),
    password: zod_1.z.string().min(6).max(100),
    phoneNumber: zod_1.z.string().min(9).max(15).default('000000000'),
    avatar: zod_1.z.string().nullable(),
    totpSecret: zod_1.z.string().nullable(),
    status: zod_1.z.enum([auth_constants_1.UserStatus.ACTIVE, auth_constants_1.UserStatus.INACTIVE, auth_constants_1.UserStatus.BLOCKED]),
    roleId: zod_1.z.number().positive(),
    createdById: zod_1.z.number().nullable(),
    updatedById: zod_1.z.number().nullable(),
    deletedById: zod_1.z.number().nullable(),
    deletedAt: zod_1.z.date().nullable(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.GetUserProfileResSchema = zod_1.z
    .object({
    id: zod_1.z.number(),
    email: zod_1.z.string().email(),
    name: zod_1.z.string().min(1).max(100),
    phoneNumber: zod_1.z.string().optional(),
    avatar: zod_1.z.string().nullable(),
    status: zod_1.z.enum([auth_constants_1.UserStatus.ACTIVE, auth_constants_1.UserStatus.INACTIVE, auth_constants_1.UserStatus.BLOCKED]),
    roleId: zod_1.z.number().positive(),
    createdById: zod_1.z.number().nullable(),
    updatedById: zod_1.z.number().nullable(),
    deletedById: zod_1.z.number().nullable(),
    deletedAt: zod_1.z.date().nullable(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    totpSecret: zod_1.z.string().nullable(),
})
    .extend({
    role: shared_role_model_1.RoleSchema.pick({
        id: true,
        name: true,
    }).extend({
        permissions: zod_1.z.array(shared_permission_model_1.PermissionSchema.pick({
            id: true,
            name: true,
            module: true,
            path: true,
            method: true,
        })),
    }),
});
exports.UpdateProfileResSchema = exports.UserSchema.omit({
    password: true,
    totpSecret: true,
});
//# sourceMappingURL=shared-user.model.js.map