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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const category_repo_1 = require("./category.repo");
const error_1 = require("../../shared/error");
const helpers_1 = require("../../shared/helpers");
const nestjs_i18n_1 = require("nestjs-i18n");
let CategoryService = class CategoryService {
    constructor(categoryRepo) {
        this.categoryRepo = categoryRepo;
    }
    findAll(parentCategoryId) {
        return this.categoryRepo.findAll({
            parentCategoryId,
            languageId: nestjs_i18n_1.I18nContext.current()?.lang,
        });
    }
    async findById(id) {
        const category = await this.categoryRepo.findById({
            id,
            languageId: nestjs_i18n_1.I18nContext.current()?.lang,
        });
        if (!category) {
            throw error_1.NotFoundRecordException;
        }
        return category;
    }
    create({ data, createdById }) {
        return this.categoryRepo.create({
            createdById,
            data,
        });
    }
    async update({ id, data, updatedById }) {
        try {
            const category = await this.categoryRepo.update({
                id,
                updatedById,
                data,
            });
            return category;
        }
        catch (error) {
            if ((0, helpers_1.isNotFoundPrismaError)(error)) {
                throw error_1.NotFoundRecordException;
            }
            throw error;
        }
    }
    async delete({ id, deletedById }) {
        try {
            await this.categoryRepo.delete({
                id,
                deletedById,
            });
            return {
                message: 'Delete successfully',
            };
        }
        catch (error) {
            if ((0, helpers_1.isNotFoundPrismaError)(error)) {
                throw error_1.NotFoundRecordException;
            }
            throw error;
        }
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_repo_1.CategoryRepo])
], CategoryService);
//# sourceMappingURL=category.service.js.map