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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const cart_repo_1 = require("./cart.repo");
const nestjs_i18n_1 = require("nestjs-i18n");
let CartService = class CartService {
    constructor(cartRepo) {
        this.cartRepo = cartRepo;
    }
    getCart(userId, query) {
        return this.cartRepo.list2({
            userId,
            languageId: nestjs_i18n_1.I18nContext.current()?.lang,
            page: query.page,
            limit: query.limit,
        });
    }
    addToCart(userId, body) {
        return this.cartRepo.create(userId, body);
    }
    updateCartItem({ userId, cartItemId, body }) {
        return this.cartRepo.update({ userId, cartItemId, body });
    }
    async deleteCart(userId, body) {
        const { count } = await this.cartRepo.delete(userId, body);
        return {
            message: `${count} item(s) deleted from cart`,
        };
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cart_repo_1.CartRepo])
], CartService);
//# sourceMappingURL=cart.service.js.map