"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBrandBodySchema = exports.CreateBrandBodySchema = exports.GetBrandDetailResSchema = exports.GetBrandParamsSchema = exports.GetBrandsResSchema = void 0;
const shared_brand_model_1 = require("../../shared/models/shared-brand.model");
const zod_1 = require("zod");
exports.GetBrandsResSchema = zod_1.z.object({
    data: zod_1.z.array(shared_brand_model_1.BrandIncludeTranslationSchema),
    totalItems: zod_1.z.number(),
    page: zod_1.z.number(),
    limit: zod_1.z.number(),
    totalPages: zod_1.z.number(),
});
exports.GetBrandParamsSchema = zod_1.z
    .object({
    brandId: zod_1.z.coerce.number().int().positive(),
})
    .strict();
exports.GetBrandDetailResSchema = shared_brand_model_1.BrandIncludeTranslationSchema;
exports.CreateBrandBodySchema = shared_brand_model_1.BrandSchema.pick({
    name: true,
    logo: true,
}).strict();
exports.UpdateBrandBodySchema = exports.CreateBrandBodySchema;
//# sourceMappingURL=brand.model.js.map