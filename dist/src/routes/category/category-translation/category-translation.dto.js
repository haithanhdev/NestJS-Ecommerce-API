"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryTranslationBodyDTO = exports.CreateCategoryTranslationBodyDTO = exports.GetCategoryTranslationParamsDTO = exports.GetCategoryTranslationDetailResDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const category_translation_model_1 = require("./category-translation.model");
class GetCategoryTranslationDetailResDTO extends (0, nestjs_zod_1.createZodDto)(category_translation_model_1.GetCategoryTranslationDetailResSchema) {
}
exports.GetCategoryTranslationDetailResDTO = GetCategoryTranslationDetailResDTO;
class GetCategoryTranslationParamsDTO extends (0, nestjs_zod_1.createZodDto)(category_translation_model_1.GetCategoryTranslationParamsSchema) {
}
exports.GetCategoryTranslationParamsDTO = GetCategoryTranslationParamsDTO;
class CreateCategoryTranslationBodyDTO extends (0, nestjs_zod_1.createZodDto)(category_translation_model_1.CreateCategoryTranslationBodySchema) {
}
exports.CreateCategoryTranslationBodyDTO = CreateCategoryTranslationBodyDTO;
class UpdateCategoryTranslationBodyDTO extends (0, nestjs_zod_1.createZodDto)(category_translation_model_1.UpdateCategoryTranslationBodySchema) {
}
exports.UpdateCategoryTranslationBodyDTO = UpdateCategoryTranslationBodyDTO;
//# sourceMappingURL=category-translation.dto.js.map