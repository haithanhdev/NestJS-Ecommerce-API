"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBrandTranslationBodySchema = exports.CreateBrandTranslationBodySchema = exports.GetBrandTranslationDetailResSchema = exports.GetBrandTranslationParamsSchema = void 0;
const shared_brand_translation_model_1 = require("../../../shared/models/shared-brand-translation.model");
const zod_1 = require("zod");
exports.GetBrandTranslationParamsSchema = zod_1.z
    .object({
    brandTranslationId: zod_1.z.coerce.number().int().positive(),
})
    .strict();
exports.GetBrandTranslationDetailResSchema = shared_brand_translation_model_1.BrandTranslationSchema;
exports.CreateBrandTranslationBodySchema = shared_brand_translation_model_1.BrandTranslationSchema.pick({
    brandId: true,
    languageId: true,
    name: true,
    description: true,
}).strict();
exports.UpdateBrandTranslationBodySchema = exports.CreateBrandTranslationBodySchema;
//# sourceMappingURL=brand-translation.model.js.map