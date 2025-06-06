"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserResDTO = exports.UpdateUserBodyDTO = exports.CreateUserBodyDTO = exports.GetUserParamsDTO = exports.GetUsersQueryDTO = exports.GetUsersResDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const user_model_1 = require("./user.model");
const shared_user_dto_1 = require("../../shared/dtos/shared-user.dto");
class GetUsersResDTO extends (0, nestjs_zod_1.createZodDto)(user_model_1.GetUsersResSchema) {
}
exports.GetUsersResDTO = GetUsersResDTO;
class GetUsersQueryDTO extends (0, nestjs_zod_1.createZodDto)(user_model_1.GetUsersQuerySchema) {
}
exports.GetUsersQueryDTO = GetUsersQueryDTO;
class GetUserParamsDTO extends (0, nestjs_zod_1.createZodDto)(user_model_1.GetUserParamsSchema) {
}
exports.GetUserParamsDTO = GetUserParamsDTO;
class CreateUserBodyDTO extends (0, nestjs_zod_1.createZodDto)(user_model_1.CreateUserBodySchema) {
}
exports.CreateUserBodyDTO = CreateUserBodyDTO;
class UpdateUserBodyDTO extends (0, nestjs_zod_1.createZodDto)(user_model_1.UpdateUserBodySchema) {
}
exports.UpdateUserBodyDTO = UpdateUserBodyDTO;
class CreateUserResDTO extends shared_user_dto_1.UpdateProfileResDTO {
}
exports.CreateUserResDTO = CreateUserResDTO;
//# sourceMappingURL=user.dto.js.map