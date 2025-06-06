"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryIncludeTranslationSchema = exports.CategorySchema = void 0;
const shared_category_translation_model_1 = require("./shared-category-translation.model");
const zod_1 = require("zod");
exports.CategorySchema = zod_1.z.object({
    id: zod_1.z.number(),
    parentCategoryId: zod_1.z.number().nullable(),
    name: zod_1.z.string(),
    logo: zod_1.z.string().nullable(),
    createdById: zod_1.z.number().nullable(),
    updatedById: zod_1.z.number().nullable(),
    deletedById: zod_1.z.number().nullable(),
    deletedAt: zod_1.z.date().nullable(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.CategoryIncludeTranslationSchema = exports.CategorySchema.extend({
    categoryTranslations: zod_1.z.array(shared_category_translation_model_1.CategoryTranslationSchema),
});
//# sourceMappingURL=shared-category.model.js.map