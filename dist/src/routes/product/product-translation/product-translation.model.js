"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductTranslationParamsSchema = exports.UpdateProductTranslationBodySchema = exports.CreateProductTranslationBodySchema = exports.GetProductTranslationDetailResSchema = exports.GetProductTranslationParamsSchema = void 0;
const shared_product_translation_model_1 = require("../../../shared/models/shared-product-translation-model");
const zod_1 = require("zod");
exports.GetProductTranslationParamsSchema = zod_1.z
    .object({
    productTranslationId: zod_1.z.coerce.number().int().positive(),
})
    .strict();
exports.GetProductTranslationDetailResSchema = shared_product_translation_model_1.ProductTranslationSchema;
exports.CreateProductTranslationBodySchema = shared_product_translation_model_1.ProductTranslationSchema.pick({
    productId: true,
    name: true,
    description: true,
    languageId: true,
}).strict();
exports.UpdateProductTranslationBodySchema = exports.CreateProductTranslationBodySchema;
exports.DeleteProductTranslationParamsSchema = exports.GetProductTranslationParamsSchema;
//# sourceMappingURL=product-translation.model.js.map