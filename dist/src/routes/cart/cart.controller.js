"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const active_user_decorator_1 = require("../../shared/decorators/active-user.decorator");
const response_dto_1 = require("../../shared/dtos/response.dto");
const cart_dto_1 = require("./cart.dto");
const nestjs_zod_1 = require("nestjs-zod");
const request_dto_1 = require("../../shared/dtos/request.dto");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    getCart(userId, query) {
        return this.cartService.getCart(userId, query);
    }
    addToCart(body, userId) {
        return this.cartService.addToCart(userId, body);
    }
    updateCartItem(param, userId, body) {
        return this.cartService.updateCartItem({
            userId,
            cartItemId: param.cartItemId,
            body,
        });
    }
    deleteCart(body, userId) {
        return this.cartService.deleteCart(userId, body);
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.Get)(),
    (0, nestjs_zod_1.ZodSerializerDto)(cart_dto_1.GetCartResDTO),
    __param(0, (0, active_user_decorator_1.ActiveUser)('userId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, request_dto_1.PaginationQueryDTO]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "getCart", null);
__decorate([
    (0, common_1.Post)(),
    (0, nestjs_zod_1.ZodSerializerDto)(cart_dto_1.CartItemDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cart_dto_1.AddToCartBodyDTO, Number]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "addToCart", null);
__decorate([
    (0, common_1.Put)(':cartItemId'),
    (0, nestjs_zod_1.ZodSerializerDto)(cart_dto_1.CartItemDTO),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cart_dto_1.GetCartItemParamsDTO, Number, cart_dto_1.UpdateCartItemBodyDTO]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "updateCartItem", null);
__decorate([
    (0, common_1.Post)('delete'),
    (0, nestjs_zod_1.ZodSerializerDto)(response_dto_1.MessageResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cart_dto_1.DeleteCartBodyDTO, Number]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "deleteCart", null);
exports.CartController = CartController = __decorate([
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map