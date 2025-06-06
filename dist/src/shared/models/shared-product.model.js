"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = exports.VariantsSchema = exports.VariantSchema = void 0;
const zod_1 = require("zod");
exports.VariantSchema = zod_1.z.object({
    value: zod_1.z.string().trim(),
    options: zod_1.z.array(zod_1.z.string().trim()),
});
exports.VariantsSchema = zod_1.z.array(exports.VariantSchema).superRefine((variants, ctx) => {
    for (let i = 0; i < variants.length; i++) {
        const variant = variants[i];
        const isExistingVariant = variants.findIndex((v) => v.value.toLowerCase() === variant.value.toLowerCase()) !== i;
        if (isExistingVariant) {
            return ctx.addIssue({
                code: 'custom',
                message: `Giá trị ${variant.value} đã tồn tại trong danh sách variants. Vui lòng kiểm tra lại.`,
                path: ['variants'],
            });
        }
        const isDifferentOption = variant.options.some((option, index) => {
            const isExistingOption = variant.options.findIndex((o) => o.toLowerCase() === option.toLowerCase()) !== index;
            return isExistingOption;
        });
        if (isDifferentOption) {
            return ctx.addIssue({
                code: 'custom',
                message: `Variant ${variant.value} chứa các option trùng tên với nhau. Vui lòng kiểm tra lại.`,
                path: ['variants'],
            });
        }
    }
});
exports.ProductSchema = zod_1.z.object({
    id: zod_1.z.number(),
    publishedAt: zod_1.z.coerce.date().nullable(),
    name: zod_1.z.string().trim().max(500),
    basePrice: zod_1.z.number().min(0),
    virtualPrice: zod_1.z.number().min(0),
    brandId: zod_1.z.number().positive(),
    images: zod_1.z.array(zod_1.z.string()),
    variants: exports.VariantsSchema,
    createdById: zod_1.z.number().nullable(),
    updatedById: zod_1.z.number().nullable(),
    deletedById: zod_1.z.number().nullable(),
    deletedAt: zod_1.z.date().nullable(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
//# sourceMappingURL=shared-product.model.js.map