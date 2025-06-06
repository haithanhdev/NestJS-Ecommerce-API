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
exports.ManageProductService = void 0;
const common_1 = require("@nestjs/common");
const product_repo_1 = require("./product.repo");
const error_1 = require("../../shared/error");
const helpers_1 = require("../../shared/helpers");
const nestjs_i18n_1 = require("nestjs-i18n");
const role_constants_1 = require("../../shared/constants/role.constants");
let ManageProductService = class ManageProductService {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    validatePrivilege({ userIdRequest, roleNameRequest, createdById, }) {
        if (userIdRequest !== createdById && roleNameRequest !== role_constants_1.RoleName.Admin) {
            throw new common_1.ForbiddenException();
        }
        return true;
    }
    async list(props) {
        this.validatePrivilege({
            userIdRequest: props.userIdRequest,
            roleNameRequest: props.roleNameRequest,
            createdById: props.query.createdById,
        });
        const data = await this.productRepo.list({
            page: props.query.page,
            limit: props.query.limit,
            languageId: nestjs_i18n_1.I18nContext.current()?.lang,
            createdById: props.query.createdById,
            isPublic: props.query.isPublic,
            name: props.query.name,
            brandIds: props.query.brandIds,
            categories: props.query.categories,
            minPrice: props.query.minPrice,
            maxPrice: props.query.maxPrice,
            orderBy: props.query.orderBy,
            sortBy: props.query.sortBy,
        });
        return data;
    }
    async getDetail(props) {
        const product = await this.productRepo.getDetail({
            productId: props.productId,
            languageId: nestjs_i18n_1.I18nContext.current()?.lang,
        });
        if (!product) {
            throw error_1.NotFoundRecordException;
        }
        this.validatePrivilege({
            userIdRequest: props.userIdRequest,
            roleNameRequest: props.roleNameRequest,
            createdById: product.createdById,
        });
        return product;
    }
    create({ data, createdById }) {
        return this.productRepo.create({
            createdById,
            data,
        });
    }
    async update({ productId, data, updatedById, roleNameRequest, }) {
        const product = await this.productRepo.findById(productId);
        if (!product) {
            throw error_1.NotFoundRecordException;
        }
        this.validatePrivilege({
            userIdRequest: updatedById,
            roleNameRequest: roleNameRequest,
            createdById: product.createdById,
        });
        try {
            const updatedProduct = await this.productRepo.update({
                id: productId,
                updatedById,
                data,
            });
            return product;
        }
        catch (error) {
            if ((0, helpers_1.isNotFoundPrismaError)(error)) {
                throw error_1.NotFoundRecordException;
            }
            throw error;
        }
    }
    async delete({ productId, deletedById, roleNameRequest, }) {
        const product = await this.productRepo.findById(productId);
        if (!product) {
            throw error_1.NotFoundRecordException;
        }
        this.validatePrivilege({
            userIdRequest: deletedById,
            roleNameRequest: roleNameRequest,
            createdById: product.createdById,
        });
        try {
            await this.productRepo.delete({
                id: productId,
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
exports.ManageProductService = ManageProductService;
exports.ManageProductService = ManageProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repo_1.ProductRepo])
], ManageProductService);
//# sourceMappingURL=manage-product.service.js.map