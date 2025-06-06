"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeOrderStatusBodySchema = exports.GetOrderParamsSchema = exports.CancelOrderResSchema = exports.CancelOrderBodySchema = exports.CreateOrderResSchema = exports.CreateOrderBodySchema = exports.GetOrderDetailResSchema = exports.GetOrderListQuerySchema = exports.GetOrderListResSchema = void 0;
const request_model_1 = require("../../shared/models/request.model");
const shared_order_model_1 = require("../../shared/models/shared-order.model");
const zod_1 = require("zod");
exports.GetOrderListResSchema = zod_1.z.object({
    data: zod_1.z.array(shared_order_model_1.OrderSchema.extend({
        items: zod_1.z.array(shared_order_model_1.ProductSKUSnapshotSchema),
    }).omit({
        deletedAt: true,
        deletedById: true,
        createdById: true,
        updatedById: true,
    })),
    totalItems: zod_1.z.number(),
    page: zod_1.z.number(),
    limit: zod_1.z.number(),
    totalPages: zod_1.z.number(),
});
exports.GetOrderListQuerySchema = request_model_1.PaginationQuerySchema.extend({
    status: shared_order_model_1.OrderStatusSchema.optional(),
});
exports.GetOrderDetailResSchema = shared_order_model_1.OrderSchema.extend({
    items: zod_1.z.array(shared_order_model_1.ProductSKUSnapshotSchema),
});
exports.CreateOrderBodySchema = zod_1.z
    .array(zod_1.z.object({
    shopId: zod_1.z.number(),
    receiver: zod_1.z.object({
        name: zod_1.z.string(),
        phone: zod_1.z.string().min(9).max(20),
        address: zod_1.z.string(),
    }),
    cartItemIds: zod_1.z.array(zod_1.z.number()).min(1),
}))
    .min(1);
exports.CreateOrderResSchema = zod_1.z.object({ orders: zod_1.z.array(shared_order_model_1.OrderSchema), paymentId: zod_1.z.number() });
exports.CancelOrderBodySchema = zod_1.z.object({});
exports.CancelOrderResSchema = shared_order_model_1.OrderSchema;
exports.GetOrderParamsSchema = zod_1.z
    .object({
    orderId: zod_1.z.coerce.number().int().positive(),
})
    .strict();
exports.ChangeOrderStatusBodySchema = zod_1.z.object({
    status: shared_order_model_1.OrderStatusSchema,
});
//# sourceMappingURL=order.model.js.map