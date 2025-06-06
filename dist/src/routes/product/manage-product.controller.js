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
exports.ManageProductController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const manage_product_service_1 = require("./manage-product.service");
const product_dto_1 = require("./product.dto");
const active_user_decorator_1 = require("../../shared/decorators/active-user.decorator");
const response_dto_1 = require("../../shared/dtos/response.dto");
let ManageProductController = class ManageProductController {
    constructor(manageProductService) {
        this.manageProductService = manageProductService;
    }
    list(query, user) {
        return this.manageProductService.list({
            query,
            roleNameRequest: user.roleName,
            userIdRequest: user.userId,
        });
    }
    findById(params, user) {
        return this.manageProductService.getDetail({
            productId: params.productId,
            roleNameRequest: user.roleName,
            userIdRequest: user.userId,
        });
    }
    create(body, userId) {
        return this.manageProductService.create({
            data: body,
            createdById: userId,
        });
    }
    update(body, params, user) {
        return this.manageProductService.update({
            data: body,
            productId: params.productId,
            updatedById: user.userId,
            roleNameRequest: user.roleName,
        });
    }
    delete(params, user) {
        return this.manageProductService.delete({
            productId: params.productId,
            deletedById: user.userId,
            roleNameRequest: user.roleName,
        });
    }
};
exports.ManageProductController = ManageProductController;
__decorate([
    (0, common_1.Get)(),
    (0, nestjs_zod_1.ZodSerializerDto)(product_dto_1.GetProductsResDTO),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.GetManageProductsQueryDTO, Object]),
    __metadata("design:returntype", void 0)
], ManageProductController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':productId'),
    (0, nestjs_zod_1.ZodSerializerDto)(product_dto_1.GetProductDetailResDTO),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.GetProductParamsDTO, Object]),
    __metadata("design:returntype", void 0)
], ManageProductController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, nestjs_zod_1.ZodSerializerDto)(product_dto_1.GetProductDetailResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.CreateProductBodyDTO, Number]),
    __metadata("design:returntype", void 0)
], ManageProductController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':productId'),
    (0, nestjs_zod_1.ZodSerializerDto)(product_dto_1.ProductDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, active_user_decorator_1.ActiveUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.UpdateProductBodyDTO,
        product_dto_1.GetProductParamsDTO, Object]),
    __metadata("design:returntype", void 0)
], ManageProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':productId'),
    (0, nestjs_zod_1.ZodSerializerDto)(response_dto_1.MessageResDTO),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.GetProductParamsDTO, Object]),
    __metadata("design:returntype", void 0)
], ManageProductController.prototype, "delete", null);
exports.ManageProductController = ManageProductController = __decorate([
    (0, common_1.Controller)('manage-product/products'),
    __metadata("design:paramtypes", [manage_product_service_1.ManageProductService])
], ManageProductController);
//# sourceMappingURL=manage-product.controller.js.map