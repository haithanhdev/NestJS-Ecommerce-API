"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryBodySchema = exports.CreateCategoryBodySchema = exports.GetCategoryDetailResSchema = exports.GetCategoryParamsSchema = exports.GetAllCategoriesQuerySchema = exports.GetAllCategoriesResSchema = void 0;
const shared_category_model_1 = require("../../shared/models/shared-category.model");
const zod_1 = require("zod");
exports.GetAllCategoriesResSchema = zod_1.z.object({
    data: zod_1.z.array(shared_category_model_1.CategoryIncludeTranslationSchema),
    totalItems: zod_1.z.number(),
});
exports.GetAllCategoriesQuerySchema = zod_1.z.object({
    parentCategoryId: zod_1.z.coerce.number().int().positive().optional(),
});
exports.GetCategoryParamsSchema = zod_1.z
    .object({
    categoryId: zod_1.z.coerce.number().int().positive(),
})
    .strict();
exports.GetCategoryDetailResSchema = shared_category_model_1.CategoryIncludeTranslationSchema;
exports.CreateCategoryBodySchema = shared_category_model_1.CategorySchema.pick({
    name: true,
    logo: true,
    parentCategoryId: true,
}).strict();
exports.UpdateCategoryBodySchema = exports.CreateCategoryBodySchema;
//# sourceMappingURL=category.model.js.map