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
exports.CategoryTranslationService = void 0;
const common_1 = require("@nestjs/common");
const error_1 = require("../../../shared/error");
const helpers_1 = require("../../../shared/helpers");
const category_translation_repo_1 = require("./category-translation.repo");
const category_translation_error_1 = require("./category-translation.error");
let CategoryTranslationService = class CategoryTranslationService {
    constructor(categoryTranslationRepo) {
        this.categoryTranslationRepo = categoryTranslationRepo;
    }
    async findById(id) {
        const category = await this.categoryTranslationRepo.findById(id);
        if (!category) {
            throw error_1.NotFoundRecordException;
        }
        return category;
    }
    async create({ data, createdById }) {
        try {
            return await this.categoryTranslationRepo.create({
                createdById,
                data,
            });
        }
        catch (error) {
            if ((0, helpers_1.isUniqueConstraintPrismaError)(error)) {
                throw category_translation_error_1.CategoryTranslationAlreadyExistsException;
            }
            throw error;
        }
    }
    async update({ id, data, updatedById, }) {
        try {
            const category = await this.categoryTranslationRepo.update({
                id,
                updatedById,
                data,
            });
            return category;
        }
        catch (error) {
            if ((0, helpers_1.isUniqueConstraintPrismaError)(error)) {
                throw category_translation_error_1.CategoryTranslationAlreadyExistsException;
            }
            if ((0, helpers_1.isNotFoundPrismaError)(error)) {
                throw error_1.NotFoundRecordException;
            }
            throw error;
        }
    }
    async delete({ id, deletedById }) {
        try {
            await this.categoryTranslationRepo.delete({
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
exports.CategoryTranslationService = CategoryTranslationService;
exports.CategoryTranslationService = CategoryTranslationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_translation_repo_1.CategoryTranslationRepo])
], CategoryTranslationService);
//# sourceMappingURL=category-translation.service.js.map