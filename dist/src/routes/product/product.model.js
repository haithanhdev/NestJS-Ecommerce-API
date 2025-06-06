"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductBodySchema = exports.CreateProductBodySchema = exports.GetProductDetailResSchema = exports.GetProductParamsSchema = exports.GetProductsResSchema = exports.GetManageProductsQuerySchema = exports.GetProductsQuerySchema = void 0;
const sku_model_1 = require("./sku.model");
const other_constants_1 = require("../../shared/constants/other.constants");
const shared_brand_model_1 = require("../../shared/models/shared-brand.model");
const shared_category_model_1 = require("../../shared/models/shared-category.model");
const shared_order_model_1 = require("../../shared/models/shared-order.model");
const shared_product_translation_model_1 = require("../../shared/models/shared-product-translation-model");
const shared_product_model_1 = require("../../shared/models/shared-product.model");
const shared_sku_model_1 = require("../../shared/models/shared-sku.model");
const zod_1 = require("zod");
function generateSKUs(variants) {
    function getCombinations(arrays) {
        return arrays.reduce((acc, curr) => acc.flatMap((x) => curr.map((y) => `${x}${x ? '-' : ''}${y}`)), ['']);
    }
    const options = variants.map((variant) => variant.options);
    const combinations = getCombinations(options);
    return combinations.map((value) => ({
        value,
        price: 0,
        stock: 100,
        image: '',
    }));
}
exports.GetProductsQuerySchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().positive().default(1),
    limit: zod_1.z.coerce.number().int().positive().default(10),
    name: zod_1.z.string().optional(),
    brandIds: zod_1.z.preprocess((value) => {
        if (typeof value === 'string') {
            return [Number(value)];
        }
        return value;
    }, zod_1.z.array(zod_1.z.coerce.number().int().positive()).optional()),
    categories: zod_1.z.preprocess((value) => {
        if (typeof value === 'string') {
            return [Number(value)];
        }
        return value;
    }, zod_1.z.array(zod_1.z.coerce.number().int().positive()).optional()),
    minPrice: zod_1.z.coerce.number().optional(),
    maxPrice: zod_1.z.coerce.number().optional(),
    createdById: zod_1.z.coerce.number().int().positive().optional(),
    orderBy: zod_1.z.enum([other_constants_1.OrderBy.Asc, other_constants_1.OrderBy.Desc]).default(other_constants_1.OrderBy.Desc),
    sortBy: zod_1.z.enum([other_constants_1.SortBy.Sale, other_constants_1.SortBy.Price, other_constants_1.SortBy.CreatedAt]).default(other_constants_1.SortBy.CreatedAt),
});
exports.GetManageProductsQuerySchema = exports.GetProductsQuerySchema.extend({
    isPublic: zod_1.z.preprocess((value) => value === 'true', zod_1.z.boolean()).optional(),
    createdById: zod_1.z.coerce.number().int().positive(),
});
exports.GetProductsResSchema = zod_1.z.object({
    data: zod_1.z.array(shared_product_model_1.ProductSchema.extend({
        productTranslations: zod_1.z.array(shared_product_translation_model_1.ProductTranslationSchema),
        orders: zod_1.z.array(shared_order_model_1.OrderSchema),
        productSKUSnapshots: zod_1.z.array(shared_order_model_1.ProductSKUSnapshotSchema.pick({ id: true, productId: true, quantity: true })),
        brand: shared_brand_model_1.BrandIncludeTranslationSchema,
        skus: zod_1.z.array(shared_sku_model_1.SKUSchema),
        categories: zod_1.z.array(shared_category_model_1.CategoryIncludeTranslationSchema),
    })),
    totalItems: zod_1.z.number(),
    page: zod_1.z.number(),
    limit: zod_1.z.number(),
    totalPages: zod_1.z.number(),
});
exports.GetProductParamsSchema = zod_1.z
    .object({
    productId: zod_1.z.coerce.number().int().positive(),
})
    .strict();
exports.GetProductDetailResSchema = shared_product_model_1.ProductSchema.extend({
    productTranslations: zod_1.z.array(shared_product_translation_model_1.ProductTranslationSchema),
    skus: zod_1.z.array(shared_sku_model_1.SKUSchema),
    categories: zod_1.z.array(shared_category_model_1.CategoryIncludeTranslationSchema),
    brand: shared_brand_model_1.BrandIncludeTranslationSchema,
    productSKUSnapshots: zod_1.z.array(shared_order_model_1.ProductSKUSnapshotSchema.pick({ id: true, productId: true, quantity: true })).optional(),
});
exports.CreateProductBodySchema = shared_product_model_1.ProductSchema.pick({
    publishedAt: true,
    name: true,
    basePrice: true,
    virtualPrice: true,
    brandId: true,
    images: true,
    variants: true,
})
    .extend({
    categories: zod_1.z.array(zod_1.z.coerce.number().int().positive()),
    skus: zod_1.z.array(sku_model_1.UpsertSKUBodySchema),
})
    .strict()
    .superRefine(({ variants, skus }, ctx) => {
    const skuValueArray = generateSKUs(variants);
    if (skus.length !== skuValueArray.length) {
        return ctx.addIssue({
            code: 'custom',
            path: ['skus'],
            message: `Số lượng SKU nên là ${skuValueArray.length}. Vui lòng kiểm tra lại.`,
        });
    }
    let wrongSKUIndex = -1;
    const isValidSKUs = skus.every((sku, index) => {
        const isValid = sku.value === skuValueArray[index].value;
        if (!isValid) {
            wrongSKUIndex = index;
        }
        return isValid;
    });
    if (!isValidSKUs) {
        ctx.addIssue({
            code: 'custom',
            path: ['skus'],
            message: `Giá trị SKU index ${wrongSKUIndex} không hợp lệ. Vui lòng kiểm tra lại.`,
        });
    }
});
exports.UpdateProductBodySchema = shared_product_model_1.ProductSchema.pick({
    publishedAt: true,
    name: true,
    basePrice: true,
    virtualPrice: true,
    brandId: true,
    images: true,
    variants: true,
})
    .extend({
    categories: zod_1.z.array(zod_1.z.coerce.number().int().positive()),
    skus: zod_1.z.array(sku_model_1.UpsertSKUBodySchema),
})
    .strict()
    .superRefine(({ variants, skus }, ctx) => {
    const skuValueArray = generateSKUs(variants);
    if (skus.length !== skuValueArray.length) {
        return ctx.addIssue({
            code: 'custom',
            path: ['skus'],
            message: `Số lượng SKU nên là ${skuValueArray.length}. Vui lòng kiểm tra lại.`,
        });
    }
    const skuValueSet = new Set(skuValueArray.map((item) => item.value));
    const allSkusValid = skus.every((sku) => skuValueSet.has(sku.value));
    if (!allSkusValid) {
        ctx.addIssue({
            code: 'custom',
            path: ['skus'],
            message: `Giá trị SKU không hợp lệ. Vui lòng kiểm tra lại.`,
        });
    }
});
//# sourceMappingURL=product.model.js.map