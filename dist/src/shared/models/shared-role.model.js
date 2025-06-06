"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolePermissionsSchema = exports.RoleSchema = void 0;
const shared_permission_model_1 = require("./shared-permission.model");
const zod_1 = require("zod");
exports.RoleSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string().max(500),
    description: zod_1.z.string(),
    isActive: zod_1.z.boolean().default(true),
    createdById: zod_1.z.number().nullable(),
    updatedById: zod_1.z.number().nullable(),
    deletedById: zod_1.z.number().nullable(),
    deletedAt: zod_1.z.date().nullable(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.RolePermissionsSchema = exports.RoleSchema.extend({
    permissions: zod_1.z.array(shared_permission_model_1.PermissionSchema),
});
//# sourceMappingURL=shared-role.model.js.map