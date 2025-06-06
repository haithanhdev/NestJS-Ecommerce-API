"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandTranslationSchema = void 0;
const zod_1 = require("zod");
exports.BrandTranslationSchema = zod_1.z.object({
    id: zod_1.z.number(),
    brandId: zod_1.z.number(),
    languageId: zod_1.z.string(),
    name: zod_1.z.string().max(500),
    description: zod_1.z.string(),
    createdById: zod_1.z.number().nullable(),
    updatedById: zod_1.z.number().nullable(),
    deletedById: zod_1.z.number().nullable(),
    deletedAt: zod_1.z.date().nullable(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
//# sourceMappingURL=shared-brand-translation.model.js.map