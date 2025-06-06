"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePermissionBodySchema = exports.CreatePermissionBodySchema = exports.GetPermissionDetailResSchema = exports.GetPermissionParamsSchema = exports.GetPermissionsQuerySchema = exports.GetPermissionsResSchema = void 0;
const shared_permission_model_1 = require("../../shared/models/shared-permission.model");
const zod_1 = require("zod");
exports.GetPermissionsResSchema = zod_1.z.object({
    data: zod_1.z.array(shared_permission_model_1.PermissionSchema),
    totalItems: zod_1.z.number(),
    page: zod_1.z.number(),
    limit: zod_1.z.number(),
    totalPages: zod_1.z.number(),
});
exports.GetPermissionsQuerySchema = zod_1.z
    .object({
    page: zod_1.z.coerce.number().int().positive().default(1),
    limit: zod_1.z.coerce.number().int().positive().default(10),
})
    .strict();
exports.GetPermissionParamsSchema = zod_1.z
    .object({
    permissionId: zod_1.z.coerce.number(),
})
    .strict();
exports.GetPermissionDetailResSchema = shared_permission_model_1.PermissionSchema;
exports.CreatePermissionBodySchema = shared_permission_model_1.PermissionSchema.pick({
    name: true,
    path: true,
    method: true,
    module: true,
}).strict();
exports.UpdatePermissionBodySchema = exports.CreatePermissionBodySchema;
//# sourceMappingURL=permission.model.js.map