"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordBodyDTO = exports.UpdateMeBodyDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const profile_model_1 = require("./profile.model");
class UpdateMeBodyDTO extends (0, nestjs_zod_1.createZodDto)(profile_model_1.UpdateMeBodySchema) {
}
exports.UpdateMeBodyDTO = UpdateMeBodyDTO;
class ChangePasswordBodyDTO extends (0, nestjs_zod_1.createZodDto)(profile_model_1.ChangePasswordBodySchema) {
}
exports.ChangePasswordBodyDTO = ChangePasswordBodyDTO;
//# sourceMappingURL=profile.dto.js.map