"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCartBodyDTO = exports.UpdateCartItemBodyDTO = exports.AddToCartBodyDTO = exports.GetCartItemParamsDTO = exports.GetCartResDTO = exports.CartItemDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const cart_model_1 = require("./cart.model");
class CartItemDTO extends (0, nestjs_zod_1.createZodDto)(cart_model_1.CartItemSchema) {
}
exports.CartItemDTO = CartItemDTO;
class GetCartResDTO extends (0, nestjs_zod_1.createZodDto)(cart_model_1.GetCartResSchema) {
}
exports.GetCartResDTO = GetCartResDTO;
class GetCartItemParamsDTO extends (0, nestjs_zod_1.createZodDto)(cart_model_1.GetCartItemParamsSchema) {
}
exports.GetCartItemParamsDTO = GetCartItemParamsDTO;
class AddToCartBodyDTO extends (0, nestjs_zod_1.createZodDto)(cart_model_1.AddToCartBodySchema) {
}
exports.AddToCartBodyDTO = AddToCartBodyDTO;
class UpdateCartItemBodyDTO extends (0, nestjs_zod_1.createZodDto)(cart_model_1.UpdateCartItemBodySchema) {
}
exports.UpdateCartItemBodyDTO = UpdateCartItemBodyDTO;
class DeleteCartBodyDTO extends (0, nestjs_zod_1.createZodDto)(cart_model_1.DeleteCartBodySchema) {
}
exports.DeleteCartBodyDTO = DeleteCartBodyDTO;
//# sourceMappingURL=cart.dto.js.map