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
exports.CategoryTranslationController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const category_translation_dto_1 = require("./category-translation.dto");
const category_translation_service_1 = require("./category-translation.service");
const active_user_decorator_1 = require("../../../shared/decorators/active-user.decorator");
const response_dto_1 = require("../../../shared/dtos/response.dto");
let CategoryTranslationController = class CategoryTranslationController {
    constructor(categoryTranslationService) {
        this.categoryTranslationService = categoryTranslationService;
    }
    findById(params) {
        return this.categoryTranslationService.findById(params.categoryTranslationId);
    }
    create(body, userId) {
        return this.categoryTranslationService.create({
            data: body,
            createdById: userId,
        });
    }
    update(body, params, userId) {
        return this.categoryTranslationService.update({
            data: body,
            id: params.categoryTranslationId,
            updatedById: userId,
        });
    }
    delete(params, userId) {
        return this.categoryTranslationService.delete({
            id: params.categoryTranslationId,
            deletedById: userId,
        });
    }
};
exports.CategoryTranslationController = CategoryTranslationController;
__decorate([
    (0, common_1.Get)(':categoryTranslationId'),
    (0, nestjs_zod_1.ZodSerializerDto)(category_translation_dto_1.GetCategoryTranslationDetailResDTO),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_translation_dto_1.GetCategoryTranslationParamsDTO]),
    __metadata("design:returntype", void 0)
], CategoryTranslationController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, nestjs_zod_1.ZodSerializerDto)(category_translation_dto_1.GetCategoryTranslationDetailResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_translation_dto_1.CreateCategoryTranslationBodyDTO, Number]),
    __metadata("design:returntype", void 0)
], CategoryTranslationController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':categoryTranslationId'),
    (0, nestjs_zod_1.ZodSerializerDto)(category_translation_dto_1.GetCategoryTranslationDetailResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_translation_dto_1.UpdateCategoryTranslationBodyDTO,
        category_translation_dto_1.GetCategoryTranslationParamsDTO, Number]),
    __metadata("design:returntype", void 0)
], CategoryTranslationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':categoryTranslationId'),
    (0, nestjs_zod_1.ZodSerializerDto)(response_dto_1.MessageResDTO),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_translation_dto_1.GetCategoryTranslationParamsDTO, Number]),
    __metadata("design:returntype", void 0)
], CategoryTranslationController.prototype, "delete", null);
exports.CategoryTranslationController = CategoryTranslationController = __decorate([
    (0, common_1.Controller)('category-translations'),
    __metadata("design:paramtypes", [category_translation_service_1.CategoryTranslationService])
], CategoryTranslationController);
//# sourceMappingURL=category-translation.controller.js.map