"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRolesQueryDTO = exports.UpdateRoleBodyDTO = exports.CreateRoleResDTO = exports.CreateRoleBodyDTO = exports.GetRoleDetailResDTO = exports.GetRoleParamsDTO = exports.GetRolesResDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const role_model_1 = require("./role.model");
class GetRolesResDTO extends (0, nestjs_zod_1.createZodDto)(role_model_1.GetRolesResSchema) {
}
exports.GetRolesResDTO = GetRolesResDTO;
class GetRoleParamsDTO extends (0, nestjs_zod_1.createZodDto)(role_model_1.GetRoleParamsSchema) {
}
exports.GetRoleParamsDTO = GetRoleParamsDTO;
class GetRoleDetailResDTO extends (0, nestjs_zod_1.createZodDto)(role_model_1.GetRoleDetailResSchema) {
}
exports.GetRoleDetailResDTO = GetRoleDetailResDTO;
class CreateRoleBodyDTO extends (0, nestjs_zod_1.createZodDto)(role_model_1.CreateRoleBodySchema) {
}
exports.CreateRoleBodyDTO = CreateRoleBodyDTO;
class CreateRoleResDTO extends (0, nestjs_zod_1.createZodDto)(role_model_1.CreateRoleResSchema) {
}
exports.CreateRoleResDTO = CreateRoleResDTO;
class UpdateRoleBodyDTO extends (0, nestjs_zod_1.createZodDto)(role_model_1.UpdateRoleBodySchema) {
}
exports.UpdateRoleBodyDTO = UpdateRoleBodyDTO;
class GetRolesQueryDTO extends (0, nestjs_zod_1.createZodDto)(role_model_1.GetRolesQuerySchema) {
}
exports.GetRolesQueryDTO = GetRolesQueryDTO;
//# sourceMappingURL=role.dto.js.map