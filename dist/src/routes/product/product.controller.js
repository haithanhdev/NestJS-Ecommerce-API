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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const product_dto_1 = require("./product.dto");
const product_service_1 = require("./product.service");
const auth_decorator_1 = require("../../shared/decorators/auth.decorator");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async list(query) {
        const result = await this.productService.list({
            query,
        });
        return result;
    }
    findById(params) {
        return this.productService.getDetail({
            productId: params.productId,
        });
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)(),
    (0, nestjs_zod_1.ZodSerializerDto)(product_dto_1.GetProductsResDTO),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.GetProductsQueryDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':productId'),
    (0, nestjs_zod_1.ZodSerializerDto)(product_dto_1.GetProductDetailResDTO),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.GetProductParamsDTO]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findById", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('products'),
    (0, auth_decorator_1.IsPublic)(),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map