"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidQuantityException = exports.NotFoundCartItemException = exports.ProductNotFoundException = exports.OutOfStockSKUException = exports.NotFoundSKUException = void 0;
const common_1 = require("@nestjs/common");
exports.NotFoundSKUException = new common_1.NotFoundException('Error.SKU.NotFound');
exports.OutOfStockSKUException = new common_1.BadRequestException('Error.SKU.OutOfStock');
exports.ProductNotFoundException = new common_1.NotFoundException('Error.Product.NotFound');
exports.NotFoundCartItemException = new common_1.NotFoundException('Error.CartItem.NotFound');
exports.InvalidQuantityException = new common_1.BadRequestException('Error.InvalidQuantity');
//# sourceMappingURL=cart.error.js.map