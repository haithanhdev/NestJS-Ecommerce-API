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
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const brand_repo_1 = require("./brand.repo");
const error_1 = require("../../shared/error");
const helpers_1 = require("../../shared/helpers");
const nestjs_i18n_1 = require("nestjs-i18n");
let BrandService = class BrandService {
    constructor(brandRepo, i18n) {
        this.brandRepo = brandRepo;
        this.i18n = i18n;
    }
    async list(pagination) {
        const data = await this.brandRepo.list(pagination, nestjs_i18n_1.I18nContext.current()?.lang);
        return data;
    }
    async findById(id) {
        const brand = await this.brandRepo.findById(id, nestjs_i18n_1.I18nContext.current()?.lang);
        if (!brand) {
            throw error_1.NotFoundRecordException;
        }
        return brand;
    }
    create({ data, createdById }) {
        return this.brandRepo.create({
            createdById,
            data,
        });
    }
    async update({ id, data, updatedById }) {
        try {
            const brand = await this.brandRepo.update({
                id,
                updatedById,
                data,
            });
            return brand;
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
            await this.brandRepo.delete({
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
exports.BrandService = BrandService;
exports.BrandService = BrandService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [brand_repo_1.BrandRepo,
        nestjs_i18n_1.I18nService])
], BrandService);
//# sourceMappingURL=brand.service.js.map