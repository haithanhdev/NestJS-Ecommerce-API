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
exports.ProductTranslationService = void 0;
const common_1 = require("@nestjs/common");
const error_1 = require("../../../shared/error");
const helpers_1 = require("../../../shared/helpers");
const product_translation_repo_1 = require("./product-translation.repo");
const product_translation_error_1 = require("./product-translation.error");
let ProductTranslationService = class ProductTranslationService {
    constructor(productTranslationRepo) {
        this.productTranslationRepo = productTranslationRepo;
    }
    async findById(id) {
        const product = await this.productTranslationRepo.findById(id);
        if (!product) {
            throw error_1.NotFoundRecordException;
        }
        return product;
    }
    async create({ data, createdById }) {
        try {
            return await this.productTranslationRepo.create({
                createdById,
                data,
            });
        }
        catch (error) {
            if ((0, helpers_1.isUniqueConstraintPrismaError)(error)) {
                throw product_translation_error_1.ProductTranslationAlreadyExistsException;
            }
            throw error;
        }
    }
    async update({ id, data, updatedById }) {
        try {
            const product = await this.productTranslationRepo.update({
                id,
                updatedById,
                data,
            });
            return product;
        }
        catch (error) {
            if ((0, helpers_1.isUniqueConstraintPrismaError)(error)) {
                throw product_translation_error_1.ProductTranslationAlreadyExistsException;
            }
            if ((0, helpers_1.isNotFoundPrismaError)(error)) {
                throw error_1.NotFoundRecordException;
            }
            throw error;
        }
    }
    async delete({ id, deletedById }) {
        try {
            await this.productTranslationRepo.delete({
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
exports.ProductTranslationService = ProductTranslationService;
exports.ProductTranslationService = ProductTranslationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_translation_repo_1.ProductTranslationRepo])
], ProductTranslationService);
//# sourceMappingURL=product-translation.service.js.map