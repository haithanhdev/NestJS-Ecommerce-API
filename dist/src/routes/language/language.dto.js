"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLanguageBodyDTO = exports.CreateLanguageBodyDTO = exports.GetLanguageDetailResDTO = exports.GetLanguageParamsDTO = exports.GetLanguagesResDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const language_model_1 = require("./language.model");
class GetLanguagesResDTO extends (0, nestjs_zod_1.createZodDto)(language_model_1.GetLanguagesResSchema) {
}
exports.GetLanguagesResDTO = GetLanguagesResDTO;
class GetLanguageParamsDTO extends (0, nestjs_zod_1.createZodDto)(language_model_1.GetLanguageParamsSchema) {
}
exports.GetLanguageParamsDTO = GetLanguageParamsDTO;
class GetLanguageDetailResDTO extends (0, nestjs_zod_1.createZodDto)(language_model_1.GetLanguageDetailResSchema) {
}
exports.GetLanguageDetailResDTO = GetLanguageDetailResDTO;
class CreateLanguageBodyDTO extends (0, nestjs_zod_1.createZodDto)(language_model_1.CreateLanguageBodySchema) {
}
exports.CreateLanguageBodyDTO = CreateLanguageBodyDTO;
class UpdateLanguageBodyDTO extends (0, nestjs_zod_1.createZodDto)(language_model_1.UpdateLanguageBodySchema) {
}
exports.UpdateLanguageBodyDTO = UpdateLanguageBodyDTO;
//# sourceMappingURL=language.dto.js.map