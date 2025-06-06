"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserBodySchema = exports.CreateUserBodySchema = exports.GetUserParamsSchema = exports.GetUsersQuerySchema = exports.GetUsersResSchema = void 0;
const zod_1 = require("zod");
const shared_user_model_1 = require("../../shared/models/shared-user.model");
const shared_role_model_1 = require("../../shared/models/shared-role.model");
exports.GetUsersResSchema = zod_1.z.object({
    data: zod_1.z.array(shared_user_model_1.UserSchema.omit({ password: true, totpSecret: true }).extend({
        role: shared_role_model_1.RoleSchema.pick({
            id: true,
            name: true,
        }),
    })),
    totalItems: zod_1.z.number(),
    page: zod_1.z.number(),
    limit: zod_1.z.number(),
    totalPages: zod_1.z.number(),
});
exports.GetUsersQuerySchema = zod_1.z
    .object({
    page: zod_1.z.coerce.number().int().positive().default(1),
    limit: zod_1.z.coerce.number().int().positive().default(10),
})
    .strict();
exports.GetUserParamsSchema = zod_1.z
    .object({
    userId: zod_1.z.coerce.number().int().positive(),
})
    .strict();
exports.CreateUserBodySchema = shared_user_model_1.UserSchema.pick({
    email: true,
    name: true,
    phoneNumber: true,
    avatar: true,
    status: true,
    password: true,
    roleId: true,
}).strict();
exports.UpdateUserBodySchema = exports.CreateUserBodySchema.omit({
    email: true,
    password: true,
});
//# sourceMappingURL=user.model.js.map