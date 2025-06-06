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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_repo_1 = require("./product.repo");
const error_1 = require("../../shared/error");
const nestjs_i18n_1 = require("nestjs-i18n");
let ProductService = class ProductService {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    async list(props) {
        const data = await this.productRepo.list({
            page: props.query.page,
            limit: props.query.limit,
            languageId: nestjs_i18n_1.I18nContext.current()?.lang,
            isPublic: true,
            brandIds: props.query.brandIds,
            categories: props.query.categories,
            minPrice: props.query.minPrice,
            maxPrice: props.query.maxPrice,
            name: props.query.name,
            createdById: props.query.createdById,
            orderBy: props.query.orderBy,
            sortBy: props.query.sortBy,
        });
        return data;
    }
    async getDetail(props) {
        const product = await this.productRepo.getDetail({
            productId: props.productId,
            languageId: nestjs_i18n_1.I18nContext.current()?.lang,
            isPublic: true,
        });
        if (!product) {
            throw error_1.NotFoundRecordException;
        }
        return product;
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repo_1.ProductRepo])
], ProductService);
//# sourceMappingURL=product.service.js.map