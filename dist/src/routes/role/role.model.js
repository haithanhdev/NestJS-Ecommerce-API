"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoleBodySchema = exports.CreateRoleResSchema = exports.CreateRoleBodySchema = exports.GetRoleDetailResSchema = exports.GetRoleParamsSchema = exports.GetRolesQuerySchema = exports.GetRolesResSchema = exports.RoleWithPermissionsSchema = void 0;
const zod_1 = require("zod");
const shared_role_model_1 = require("../../shared/models/shared-role.model");
const shared_permission_model_1 = require("../../shared/models/shared-permission.model");
exports.RoleWithPermissionsSchema = shared_role_model_1.RoleSchema.extend({
    permissions: zod_1.z.array(shared_permission_model_1.PermissionSchema),
});
exports.GetRolesResSchema = zod_1.z.object({
    data: zod_1.z.array(shared_role_model_1.RoleSchema),
    totalItems: zod_1.z.number(),
    page: zod_1.z.number(),
    limit: zod_1.z.number(),
    totalPages: zod_1.z.number(),
});
exports.GetRolesQuerySchema = zod_1.z
    .object({
    page: zod_1.z.coerce.number().int().positive().default(1),
    limit: zod_1.z.coerce.number().int().positive().default(10),
})
    .strict();
exports.GetRoleParamsSchema = zod_1.z
    .object({
    roleId: zod_1.z.coerce.number(),
})
    .strict();
exports.GetRoleDetailResSchema = exports.RoleWithPermissionsSchema;
exports.CreateRoleBodySchema = shared_role_model_1.RoleSchema.pick({
    name: true,
    description: true,
    isActive: true,
}).strict();
exports.CreateRoleResSchema = shared_role_model_1.RoleSchema;
exports.UpdateRoleBodySchema = shared_role_model_1.RoleSchema.pick({
    name: true,
    description: true,
    isActive: true,
})
    .extend({
    permissionIds: zod_1.z.array(zod_1.z.number()),
})
    .strict();
//# sourceMappingURL=role.model.js.map