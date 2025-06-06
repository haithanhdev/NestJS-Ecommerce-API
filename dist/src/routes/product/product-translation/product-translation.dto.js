"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductTranslationBodyDTO = exports.CreateProductTranslationBodyDTO = exports.GetProductTranslationParamsDTO = exports.GetProductTranslationDetailResDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const product_translation_model_1 = require("./product-translation.model");
class GetProductTranslationDetailResDTO extends (0, nestjs_zod_1.createZodDto)(product_translation_model_1.GetProductTranslationDetailResSchema) {
}
exports.GetProductTranslationDetailResDTO = GetProductTranslationDetailResDTO;
class GetProductTranslationParamsDTO extends (0, nestjs_zod_1.createZodDto)(product_translation_model_1.GetProductTranslationParamsSchema) {
}
exports.GetProductTranslationParamsDTO = GetProductTranslationParamsDTO;
class CreateProductTranslationBodyDTO extends (0, nestjs_zod_1.createZodDto)(product_translation_model_1.CreateProductTranslationBodySchema) {
}
exports.CreateProductTranslationBodyDTO = CreateProductTranslationBodyDTO;
class UpdateProductTranslationBodyDTO extends (0, nestjs_zod_1.createZodDto)(product_translation_model_1.UpdateProductTranslationBodySchema) {
}
exports.UpdateProductTranslationBodyDTO = UpdateProductTranslationBodyDTO;
//# sourceMappingURL=product-translation.dto.js.map