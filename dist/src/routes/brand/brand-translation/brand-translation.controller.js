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
exports.BrandTranslationController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const brand_translation_dto_1 = require("./brand-translation.dto");
const brand_translation_service_1 = require("./brand-translation.service");
const active_user_decorator_1 = require("../../../shared/decorators/active-user.decorator");
const response_dto_1 = require("../../../shared/dtos/response.dto");
let BrandTranslationController = class BrandTranslationController {
    constructor(brandTranslationService) {
        this.brandTranslationService = brandTranslationService;
    }
    findById(params) {
        return this.brandTranslationService.findById(params.brandTranslationId);
    }
    create(body, userId) {
        return this.brandTranslationService.create({
            data: body,
            createdById: userId,
        });
    }
    update(body, params, userId) {
        return this.brandTranslationService.update({
            data: body,
            id: params.brandTranslationId,
            updatedById: userId,
        });
    }
    delete(params, userId) {
        return this.brandTranslationService.delete({
            id: params.brandTranslationId,
            deletedById: userId,
        });
    }
};
exports.BrandTranslationController = BrandTranslationController;
__decorate([
    (0, common_1.Get)(':brandTranslationId'),
    (0, nestjs_zod_1.ZodSerializerDto)(brand_translation_dto_1.GetBrandTranslationDetailResDTO),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_translation_dto_1.GetBrandTranslationParamsDTO]),
    __metadata("design:returntype", void 0)
], BrandTranslationController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, nestjs_zod_1.ZodSerializerDto)(brand_translation_dto_1.GetBrandTranslationDetailResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_translation_dto_1.CreateBrandTranslationBodyDTO, Number]),
    __metadata("design:returntype", void 0)
], BrandTranslationController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':brandTranslationId'),
    (0, nestjs_zod_1.ZodSerializerDto)(brand_translation_dto_1.GetBrandTranslationDetailResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_translation_dto_1.UpdateBrandTranslationBodyDTO,
        brand_translation_dto_1.GetBrandTranslationParamsDTO, Number]),
    __metadata("design:returntype", void 0)
], BrandTranslationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':brandTranslationId'),
    (0, nestjs_zod_1.ZodSerializerDto)(response_dto_1.MessageResDTO),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_translation_dto_1.GetBrandTranslationParamsDTO, Number]),
    __metadata("design:returntype", void 0)
], BrandTranslationController.prototype, "delete", null);
exports.BrandTranslationController = BrandTranslationController = __decorate([
    (0, common_1.Controller)('brand-translations'),
    __metadata("design:paramtypes", [brand_translation_service_1.BrandTranslationService])
], BrandTranslationController);
//# sourceMappingURL=brand-translation.controller.js.map