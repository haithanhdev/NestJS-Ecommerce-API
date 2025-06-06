"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCartBodySchema = exports.UpdateCartItemBodySchema = exports.AddToCartBodySchema = exports.GetCartResSchema = exports.CartItemDetailSchema = exports.GetCartItemParamsSchema = exports.CartItemSchema = void 0;
const shared_product_translation_model_1 = require("../../shared/models/shared-product-translation-model");
const shared_product_model_1 = require("../../shared/models/shared-product.model");
const shared_sku_model_1 = require("../../shared/models/shared-sku.model");
const shared_user_model_1 = require("../../shared/models/shared-user.model");
const zod_1 = require("zod");
exports.CartItemSchema = zod_1.z.object({
    id: zod_1.z.number(),
    quantity: zod_1.z.number().int().positive(),
    skuId: zod_1.z.number(),
    userId: zod_1.z.number(),
    createdAt: zod_1.z.coerce.date(),
    updatedAt: zod_1.z.coerce.date(),
});
exports.GetCartItemParamsSchema = zod_1.z.object({
    cartItemId: zod_1.z.coerce.number().int().positive(),
});
exports.CartItemDetailSchema = zod_1.z.object({
    shop: shared_user_model_1.UserSchema.pick({
        id: true,
        name: true,
        avatar: true,
    }),
    cartItems: zod_1.z.array(exports.CartItemSchema.extend({
        sku: shared_sku_model_1.SKUSchema.extend({
            product: shared_product_model_1.ProductSchema.extend({
                productTranslations: zod_1.z.array(shared_product_translation_model_1.ProductTranslationSchema.omit({
                    createdById: true,
                    updatedById: true,
                    deletedById: true,
                    deletedAt: true,
                    createdAt: true,
                    updatedAt: true,
                })),
            }).omit({
                createdById: true,
                updatedById: true,
                deletedById: true,
                deletedAt: true,
                createdAt: true,
                updatedAt: true,
            }),
        }).omit({
            createdById: true,
            updatedById: true,
            deletedById: true,
            deletedAt: true,
            createdAt: true,
            updatedAt: true,
        }),
    })),
});
exports.GetCartResSchema = zod_1.z.object({
    data: zod_1.z.array(exports.CartItemDetailSchema),
    totalItems: zod_1.z.number(),
    page: zod_1.z.number(),
    limit: zod_1.z.number(),
    totalPages: zod_1.z.number(),
});
exports.AddToCartBodySchema = exports.CartItemSchema.pick({
    skuId: true,
    quantity: true,
}).strict();
exports.UpdateCartItemBodySchema = exports.AddToCartBodySchema;
exports.DeleteCartBodySchema = zod_1.z
    .object({
    cartItemIds: zod_1.z.array(zod_1.z.number().int().positive()),
})
    .strict();
//# sourceMappingURL=cart.model.js.map