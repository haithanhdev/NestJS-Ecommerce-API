"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandIncludeTranslationSchema = exports.BrandSchema = void 0;
const shared_brand_translation_model_1 = require("./shared-brand-translation.model");
const zod_1 = require("zod");
exports.BrandSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string().max(500),
    logo: zod_1.z.string().url().max(1000),
    createdById: zod_1.z.number().nullable(),
    updatedById: zod_1.z.number().nullable(),
    deletedById: zod_1.z.number().nullable(),
    deletedAt: zod_1.z.date().nullable(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.BrandIncludeTranslationSchema = exports.BrandSchema.extend({
    brandTranslations: zod_1.z.array(shared_brand_translation_model_1.BrandTranslationSchema),
});
//# sourceMappingURL=shared-brand.model.js.map