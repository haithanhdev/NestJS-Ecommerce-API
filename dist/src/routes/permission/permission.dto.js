"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPermissionsQueryDTO = exports.UpdatePermissionBodyDTO = exports.CreatePermissionBodyDTO = exports.GetPermissionDetailResDTO = exports.GetPermissionParamsDTO = exports.GetPermissionsResDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const permission_model_1 = require("./permission.model");
class GetPermissionsResDTO extends (0, nestjs_zod_1.createZodDto)(permission_model_1.GetPermissionsResSchema) {
}
exports.GetPermissionsResDTO = GetPermissionsResDTO;
class GetPermissionParamsDTO extends (0, nestjs_zod_1.createZodDto)(permission_model_1.GetPermissionParamsSchema) {
}
exports.GetPermissionParamsDTO = GetPermissionParamsDTO;
class GetPermissionDetailResDTO extends (0, nestjs_zod_1.createZodDto)(permission_model_1.GetPermissionDetailResSchema) {
}
exports.GetPermissionDetailResDTO = GetPermissionDetailResDTO;
class CreatePermissionBodyDTO extends (0, nestjs_zod_1.createZodDto)(permission_model_1.CreatePermissionBodySchema) {
}
exports.CreatePermissionBodyDTO = CreatePermissionBodyDTO;
class UpdatePermissionBodyDTO extends (0, nestjs_zod_1.createZodDto)(permission_model_1.UpdatePermissionBodySchema) {
}
exports.UpdatePermissionBodyDTO = UpdatePermissionBodyDTO;
class GetPermissionsQueryDTO extends (0, nestjs_zod_1.createZodDto)(permission_model_1.GetPermissionsQuerySchema) {
}
exports.GetPermissionsQueryDTO = GetPermissionsQueryDTO;
//# sourceMappingURL=permission.dto.js.map