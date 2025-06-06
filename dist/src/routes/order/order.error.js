"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CannotChangeOrderStatusException = exports.CannotCancelOrderException = exports.SKUNotBelongToShopException = exports.NotFoundCartItemException = exports.OutOfStockSKUException = exports.ProductNotFoundException = exports.OrderNotFoundException = void 0;
const common_1 = require("@nestjs/common");
exports.OrderNotFoundException = new common_1.NotFoundException('Error.OrderNotFound');
exports.ProductNotFoundException = new common_1.NotFoundException('Error.ProductNotFound');
exports.OutOfStockSKUException = new common_1.BadRequestException('Error.OutOfStockSKU');
exports.NotFoundCartItemException = new common_1.NotFoundException('Error.NotFoundCartItem');
exports.SKUNotBelongToShopException = new common_1.BadRequestException('Error.SKUNotBelongToShop');
exports.CannotCancelOrderException = new common_1.BadRequestException('Error.CannotCancelOrder');
exports.CannotChangeOrderStatusException = new common_1.BadRequestException('Error.CannotChangeOrderStatus');
//# sourceMappingURL=order.error.js.map