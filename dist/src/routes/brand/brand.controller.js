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
exports.BrandController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const brand_dto_1 = require("./brand.dto");
const brand_service_1 = require("./brand.service");
const active_user_decorator_1 = require("../../shared/decorators/active-user.decorator");
const auth_decorator_1 = require("../../shared/decorators/auth.decorator");
const request_dto_1 = require("../../shared/dtos/request.dto");
const response_dto_1 = require("../../shared/dtos/response.dto");
let BrandController = class BrandController {
    constructor(brandService) {
        this.brandService = brandService;
    }
    list(query) {
        return this.brandService.list(query);
    }
    findById(params) {
        return this.brandService.findById(params.brandId);
    }
    create(body, userId) {
        return this.brandService.create({
            data: body,
            createdById: userId,
        });
    }
    update(body, params, userId) {
        return this.brandService.update({
            data: body,
            id: params.brandId,
            updatedById: userId,
        });
    }
    delete(params, userId) {
        return this.brandService.delete({
            id: params.brandId,
            deletedById: userId,
        });
    }
};
exports.BrandController = BrandController;
__decorate([
    (0, common_1.Get)(),
    (0, auth_decorator_1.IsPublic)(),
    (0, nestjs_zod_1.ZodSerializerDto)(brand_dto_1.GetBrandsResDTO),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.PaginationQueryDTO]),
    __metadata("design:returntype", void 0)
], BrandController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':brandId'),
    (0, auth_decorator_1.IsPublic)(),
    (0, nestjs_zod_1.ZodSerializerDto)(brand_dto_1.GetBrandDetailResDTO),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_dto_1.GetBrandParamsDTO]),
    __metadata("design:returntype", void 0)
], BrandController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, nestjs_zod_1.ZodSerializerDto)(brand_dto_1.GetBrandDetailResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_dto_1.CreateBrandBodyDTO, Number]),
    __metadata("design:returntype", void 0)
], BrandController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':brandId'),
    (0, nestjs_zod_1.ZodSerializerDto)(brand_dto_1.GetBrandDetailResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_dto_1.UpdateBrandBodyDTO, brand_dto_1.GetBrandParamsDTO, Number]),
    __metadata("design:returntype", void 0)
], BrandController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':brandId'),
    (0, nestjs_zod_1.ZodSerializerDto)(response_dto_1.MessageResDTO),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_dto_1.GetBrandParamsDTO, Number]),
    __metadata("design:returntype", void 0)
], BrandController.prototype, "delete", null);
exports.BrandController = BrandController = __decorate([
    (0, common_1.Controller)('brands'),
    __metadata("design:paramtypes", [brand_service_1.BrandService])
], BrandController);
//# sourceMappingURL=brand.controller.js.map