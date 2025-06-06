"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeOrderStatusBodyDTO = exports.GetOrderParamsDTO = exports.CancelOrderResDTO = exports.CancelOrderBodyDTO = exports.CreateOrderResDTO = exports.CreateOrderBodyDTO = exports.GetOrderDetailResDTO = exports.GetOrderListQueryDTO = exports.GetOrderListResDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const order_model_1 = require("./order.model");
class GetOrderListResDTO extends (0, nestjs_zod_1.createZodDto)(order_model_1.GetOrderListResSchema) {
}
exports.GetOrderListResDTO = GetOrderListResDTO;
class GetOrderListQueryDTO extends (0, nestjs_zod_1.createZodDto)(order_model_1.GetOrderListQuerySchema) {
}
exports.GetOrderListQueryDTO = GetOrderListQueryDTO;
class GetOrderDetailResDTO extends (0, nestjs_zod_1.createZodDto)(order_model_1.GetOrderDetailResSchema) {
}
exports.GetOrderDetailResDTO = GetOrderDetailResDTO;
class CreateOrderBodyDTO extends (0, nestjs_zod_1.createZodDto)(order_model_1.CreateOrderBodySchema) {
}
exports.CreateOrderBodyDTO = CreateOrderBodyDTO;
class CreateOrderResDTO extends (0, nestjs_zod_1.createZodDto)(order_model_1.CreateOrderResSchema) {
}
exports.CreateOrderResDTO = CreateOrderResDTO;
class CancelOrderBodyDTO extends (0, nestjs_zod_1.createZodDto)(order_model_1.CancelOrderBodySchema) {
}
exports.CancelOrderBodyDTO = CancelOrderBodyDTO;
class CancelOrderResDTO extends (0, nestjs_zod_1.createZodDto)(order_model_1.CancelOrderResSchema) {
}
exports.CancelOrderResDTO = CancelOrderResDTO;
class GetOrderParamsDTO extends (0, nestjs_zod_1.createZodDto)(order_model_1.GetOrderParamsSchema) {
}
exports.GetOrderParamsDTO = GetOrderParamsDTO;
class ChangeOrderStatusBodyDTO extends (0, nestjs_zod_1.createZodDto)(order_model_1.ChangeOrderStatusBodySchema) {
}
exports.ChangeOrderStatusBodyDTO = ChangeOrderStatusBodyDTO;
//# sourceMappingURL=order.dto.js.map