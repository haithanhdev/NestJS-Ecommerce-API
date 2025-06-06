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
exports.BrandTranslationService = void 0;
const common_1 = require("@nestjs/common");
const error_1 = require("../../../shared/error");
const helpers_1 = require("../../../shared/helpers");
const brand_translation_repo_1 = require("./brand-translation.repo");
const brand_translation_error_1 = require("./brand-translation.error");
let BrandTranslationService = class BrandTranslationService {
    constructor(brandTranslationRepo) {
        this.brandTranslationRepo = brandTranslationRepo;
    }
    async findById(id) {
        const brand = await this.brandTranslationRepo.findById(id);
        if (!brand) {
            throw error_1.NotFoundRecordException;
        }
        return brand;
    }
    async create({ data, createdById }) {
        try {
            return await this.brandTranslationRepo.create({
                createdById,
                data,
            });
        }
        catch (error) {
            if ((0, helpers_1.isUniqueConstraintPrismaError)(error)) {
                throw brand_translation_error_1.BrandTranslationAlreadyExistsException;
            }
            throw error;
        }
    }
    async update({ id, data, updatedById }) {
        try {
            const brand = await this.brandTranslationRepo.update({
                id,
                updatedById,
                data,
            });
            return brand;
        }
        catch (error) {
            if ((0, helpers_1.isUniqueConstraintPrismaError)(error)) {
                throw brand_translation_error_1.BrandTranslationAlreadyExistsException;
            }
            if ((0, helpers_1.isNotFoundPrismaError)(error)) {
                throw error_1.NotFoundRecordException;
            }
            throw error;
        }
    }
    async delete({ id, deletedById }) {
        try {
            await this.brandTranslationRepo.delete({
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
exports.BrandTranslationService = BrandTranslationService;
exports.BrandTranslationService = BrandTranslationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [brand_translation_repo_1.BrandTranslationRepo])
], BrandTranslationService);
//# sourceMappingURL=brand-translation.service.js.map