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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const category_dto_1 = require("./category.dto");
const category_service_1 = require("./category.service");
const active_user_decorator_1 = require("../../shared/decorators/active-user.decorator");
const auth_decorator_1 = require("../../shared/decorators/auth.decorator");
const response_dto_1 = require("../../shared/dtos/response.dto");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    findAll(query) {
        return this.categoryService.findAll(query.parentCategoryId);
    }
    findById(params) {
        return this.categoryService.findById(params.categoryId);
    }
    create(body, userId) {
        return this.categoryService.create({
            data: body,
            createdById: userId,
        });
    }
    update(body, params, userId) {
        return this.categoryService.update({
            data: body,
            id: params.categoryId,
            updatedById: userId,
        });
    }
    delete(params, userId) {
        return this.categoryService.delete({
            id: params.categoryId,
            deletedById: userId,
        });
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Get)(),
    (0, auth_decorator_1.IsPublic)(),
    (0, nestjs_zod_1.ZodSerializerDto)(category_dto_1.GetAllCategoriesResDTO),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.GetAllCategoriesQueryDTO]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':categoryId'),
    (0, auth_decorator_1.IsPublic)(),
    (0, nestjs_zod_1.ZodSerializerDto)(category_dto_1.GetCategoryDetailResDTO),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.GetCategoryParamsDTO]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, nestjs_zod_1.ZodSerializerDto)(category_dto_1.GetCategoryDetailResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.CreateCategoryBodyDTO, Number]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':categoryId'),
    (0, nestjs_zod_1.ZodSerializerDto)(category_dto_1.GetCategoryDetailResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.UpdateCategoryBodyDTO,
        category_dto_1.GetCategoryParamsDTO, Number]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':categoryId'),
    (0, nestjs_zod_1.ZodSerializerDto)(response_dto_1.MessageResDTO),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.GetCategoryParamsDTO, Number]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "delete", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
//# sourceMappingURL=category.controller.js.map