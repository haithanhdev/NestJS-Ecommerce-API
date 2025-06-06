"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileResDTO = exports.GetUserProfileResDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const shared_user_model_1 = require("../models/shared-user.model");
class GetUserProfileResDTO extends (0, nestjs_zod_1.createZodDto)(shared_user_model_1.GetUserProfileResSchema) {
}
exports.GetUserProfileResDTO = GetUserProfileResDTO;
class UpdateProfileResDTO extends (0, nestjs_zod_1.createZodDto)(shared_user_model_1.UpdateProfileResSchema) {
}
exports.UpdateProfileResDTO = UpdateProfileResDTO;
//# sourceMappingURL=shared-user.dto.js.map