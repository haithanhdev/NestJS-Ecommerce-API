"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryTranslationBodySchema = exports.CreateCategoryTranslationBodySchema = exports.GetCategoryTranslationDetailResSchema = exports.GetCategoryTranslationParamsSchema = void 0;
const shared_category_translation_model_1 = require("../../../shared/models/shared-category-translation.model");
const zod_1 = require("zod");
exports.GetCategoryTranslationParamsSchema = zod_1.z
    .object({
    categoryTranslationId: zod_1.z.coerce.number().int().positive(),
})
    .strict();
exports.GetCategoryTranslationDetailResSchema = shared_category_translation_model_1.CategoryTranslationSchema;
exports.CreateCategoryTranslationBodySchema = shared_category_translation_model_1.CategoryTranslationSchema.pick({
    categoryId: true,
    languageId: true,
    name: true,
    description: true,
}).strict();
exports.UpdateCategoryTranslationBodySchema = exports.CreateCategoryTranslationBodySchema;
//# sourceMappingURL=category-translation.model.js.map