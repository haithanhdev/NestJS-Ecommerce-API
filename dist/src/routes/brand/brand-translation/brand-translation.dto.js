"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBrandTranslationBodyDTO = exports.CreateBrandTranslationBodyDTO = exports.GetBrandTranslationParamsDTO = exports.GetBrandTranslationDetailResDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const brand_translation_model_1 = require("./brand-translation.model");
class GetBrandTranslationDetailResDTO extends (0, nestjs_zod_1.createZodDto)(brand_translation_model_1.GetBrandTranslationDetailResSchema) {
}
exports.GetBrandTranslationDetailResDTO = GetBrandTranslationDetailResDTO;
class GetBrandTranslationParamsDTO extends (0, nestjs_zod_1.createZodDto)(brand_translation_model_1.GetBrandTranslationParamsSchema) {
}
exports.GetBrandTranslationParamsDTO = GetBrandTranslationParamsDTO;
class CreateBrandTranslationBodyDTO extends (0, nestjs_zod_1.createZodDto)(brand_translation_model_1.CreateBrandTranslationBodySchema) {
}
exports.CreateBrandTranslationBodyDTO = CreateBrandTranslationBodyDTO;
class UpdateBrandTranslationBodyDTO extends (0, nestjs_zod_1.createZodDto)(brand_translation_model_1.UpdateBrandTranslationBodySchema) {
}
exports.UpdateBrandTranslationBodyDTO = UpdateBrandTranslationBodyDTO;
//# sourceMappingURL=brand-translation.dto.js.map