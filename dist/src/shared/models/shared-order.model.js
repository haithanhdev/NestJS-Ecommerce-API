"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderIncludeProductSKUSnapshotSchema = exports.ProductSKUSnapshotSchema = exports.OrderSchema = exports.OrderStatusSchema = void 0;
const order_constants_1 = require("../constants/order.constants");
const zod_1 = require("zod");
exports.OrderStatusSchema = zod_1.z.enum([
    order_constants_1.OrderStatus.PENDING_PAYMENT,
    order_constants_1.OrderStatus.PENDING_PICKUP,
    order_constants_1.OrderStatus.PENDING_DELIVERY,
    order_constants_1.OrderStatus.DELIVERED,
    order_constants_1.OrderStatus.RETURNED,
    order_constants_1.OrderStatus.CANCELLED,
]);
exports.OrderSchema = zod_1.z.object({
    id: zod_1.z.number(),
    userId: zod_1.z.number(),
    status: exports.OrderStatusSchema,
    receiver: zod_1.z.object({
        name: zod_1.z.string(),
        phone: zod_1.z.string(),
        address: zod_1.z.string(),
    }),
    shopId: zod_1.z.number().nullable(),
    paymentId: zod_1.z.number(),
    createdById: zod_1.z.number().nullable(),
    updatedById: zod_1.z.number().nullable(),
    deletedById: zod_1.z.number().nullable(),
    deletedAt: zod_1.z.date().nullable(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.ProductSKUSnapshotSchema = zod_1.z.object({
    id: zod_1.z.number(),
    productId: zod_1.z.number().nullable(),
    productName: zod_1.z.string(),
    productTranslations: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
        description: zod_1.z.string(),
        languageId: zod_1.z.string(),
    })),
    skuPrice: zod_1.z.number(),
    image: zod_1.z.string(),
    skuValue: zod_1.z.string(),
    skuId: zod_1.z.number().nullable(),
    orderId: zod_1.z.number().nullable(),
    quantity: zod_1.z.number(),
    createdAt: zod_1.z.date(),
});
exports.OrderIncludeProductSKUSnapshotSchema = exports.OrderSchema.extend({
    items: zod_1.z.array(exports.ProductSKUSnapshotSchema),
});
//# sourceMappingURL=shared-order.model.js.map