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
exports.ProductRepo = void 0;
const common_1 = require("@nestjs/common");
const other_constants_1 = require("../../shared/constants/other.constants");
const prisma_service_1 = require("../../shared/services/prisma.service");
let ProductRepo = class ProductRepo {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async list({ limit, page, name, brandIds, categories, minPrice, maxPrice, createdById, isPublic, languageId, orderBy, sortBy, }) {
        const skip = (page - 1) * limit;
        const take = limit;
        let where = {
            deletedAt: null,
            createdById: createdById ? createdById : undefined,
        };
        if (isPublic === true) {
            where.publishedAt = {
                lte: new Date(),
                not: null,
            };
        }
        else if (isPublic === false) {
            where = {
                ...where,
                OR: [{ publishedAt: null }, { publishedAt: { gt: new Date() } }],
            };
        }
        if (name) {
            where.OR = [
                {
                    name: {
                        contains: name,
                        mode: 'insensitive',
                    },
                },
                {
                    productTranslations: {
                        some: {
                            name: {
                                contains: name,
                                mode: 'insensitive',
                            },
                            languageId: languageId === other_constants_1.ALL_LANGUAGE_CODE ? undefined : languageId,
                            deletedAt: null,
                        },
                    },
                },
            ];
        }
        if (brandIds && brandIds.length > 0) {
            where.brandId = {
                in: brandIds,
            };
        }
        if (categories && categories.length > 0) {
            where.categories = {
                some: {
                    id: {
                        in: categories,
                    },
                },
            };
        }
        if (minPrice !== undefined || maxPrice !== undefined) {
            where.basePrice = {
                gte: minPrice,
                lte: maxPrice,
            };
        }
        let calculatedOrderBy = {
            createdAt: orderBy,
        };
        if (sortBy === other_constants_1.SortBy.Price) {
            calculatedOrderBy = {
                basePrice: orderBy,
            };
        }
        else if (sortBy === other_constants_1.SortBy.Sale) {
            calculatedOrderBy = {
                orders: {
                    _count: orderBy,
                },
            };
        }
        const [totalItems, data] = await Promise.all([
            this.prismaService.product.count({
                where,
            }),
            this.prismaService.product.findMany({
                where,
                include: {
                    productTranslations: {
                        where: languageId === other_constants_1.ALL_LANGUAGE_CODE ? { deletedAt: null } : { languageId, deletedAt: null },
                    },
                    orders: {
                        where: {
                            deletedAt: null,
                            status: 'DELIVERED',
                        },
                        include: {
                            items: true,
                        },
                    },
                    productSKUSnapshots: true,
                    brand: {
                        include: {
                            brandTranslations: {
                                where: {
                                    languageId: languageId === other_constants_1.ALL_LANGUAGE_CODE ? undefined : languageId,
                                    deletedAt: null,
                                },
                            },
                        },
                    },
                    skus: {
                        where: {
                            deletedAt: null,
                        },
                    },
                    categories: {
                        include: {
                            categoryTranslations: {
                                where: {
                                    languageId: languageId === other_constants_1.ALL_LANGUAGE_CODE ? undefined : languageId,
                                    deletedAt: null,
                                },
                            },
                        },
                    },
                },
                orderBy: calculatedOrderBy,
                skip,
                take,
            }),
        ]);
        return {
            data,
            totalItems,
            page: page,
            limit: limit,
            totalPages: Math.ceil(totalItems / limit),
        };
    }
    findById(productId) {
        return this.prismaService.product.findUnique({
            where: {
                id: productId,
                deletedAt: null,
            },
        });
    }
    getDetail({ productId, languageId, isPublic, }) {
        let where = {
            id: productId,
            deletedAt: null,
        };
        if (isPublic === true) {
            where.publishedAt = {
                lte: new Date(),
                not: null,
            };
        }
        else if (isPublic === false) {
            where = {
                ...where,
                OR: [{ publishedAt: null }, { publishedAt: { gt: new Date() } }],
            };
        }
        return this.prismaService.product.findUnique({
            where,
            include: {
                productTranslations: {
                    where: languageId === other_constants_1.ALL_LANGUAGE_CODE ? { deletedAt: null } : { languageId, deletedAt: null },
                },
                skus: {
                    where: {
                        deletedAt: null,
                    },
                },
                brand: {
                    include: {
                        brandTranslations: {
                            where: languageId === other_constants_1.ALL_LANGUAGE_CODE ? { deletedAt: null } : { languageId, deletedAt: null },
                        },
                    },
                },
                categories: {
                    where: {
                        deletedAt: null,
                    },
                    include: {
                        categoryTranslations: {
                            where: languageId === other_constants_1.ALL_LANGUAGE_CODE ? { deletedAt: null } : { languageId, deletedAt: null },
                        },
                    },
                },
                productSKUSnapshots: true,
            },
        });
    }
    create({ createdById, data, }) {
        const { skus, categories, ...productData } = data;
        return this.prismaService.product.create({
            data: {
                createdById,
                ...productData,
                categories: {
                    connect: categories.map((category) => ({ id: category })),
                },
                skus: {
                    createMany: {
                        data: skus.map((sku) => ({
                            ...sku,
                            createdById,
                        })),
                    },
                },
            },
            include: {
                productTranslations: {
                    where: { deletedAt: null },
                },
                skus: {
                    where: { deletedAt: null },
                },
                brand: {
                    include: {
                        brandTranslations: {
                            where: { deletedAt: null },
                        },
                    },
                },
                categories: {
                    where: {
                        deletedAt: null,
                    },
                    include: {
                        categoryTranslations: {
                            where: { deletedAt: null },
                        },
                    },
                },
            },
        });
    }
    async update({ id, updatedById, data, }) {
        const { skus: dataSkus, categories, ...productData } = data;
        const existingSKUs = await this.prismaService.sKU.findMany({
            where: {
                productId: id,
                deletedAt: null,
            },
        });
        console.log(existingSKUs);
        const skusToDelete = existingSKUs.filter((sku) => dataSkus.every((dataSku) => dataSku.value !== sku.value));
        const skuIdsToDelete = skusToDelete.map((sku) => sku.id);
        console.log(skuIdsToDelete);
        const skusWithId = dataSkus.map((dataSku) => {
            const existingSku = existingSKUs.find((existingSKU) => existingSKU.value === dataSku.value);
            return {
                ...dataSku,
                id: existingSku ? existingSku.id : null,
            };
        });
        const skusToUpdate = skusWithId.filter((sku) => sku.id !== null);
        const skusToCreate = skusWithId
            .filter((sku) => sku.id === null)
            .map((sku) => {
            const { id: skuId, ...data } = sku;
            return {
                ...data,
                productId: id,
                createdById: updatedById,
            };
        });
        const [product] = await this.prismaService.$transaction([
            this.prismaService.product.update({
                where: {
                    id,
                    deletedAt: null,
                },
                data: {
                    ...productData,
                    updatedById,
                    categories: {
                        connect: categories.map((category) => ({ id: category })),
                    },
                },
            }),
            this.prismaService.sKU.updateMany({
                where: {
                    id: {
                        in: skuIdsToDelete,
                    },
                },
                data: {
                    deletedAt: new Date(),
                    deletedById: updatedById,
                },
            }),
            ...skusToUpdate.map((sku) => this.prismaService.sKU.update({
                where: {
                    id: sku.id,
                },
                data: {
                    value: sku.value,
                    price: sku.price,
                    stock: sku.stock,
                    image: sku.image,
                    updatedById,
                },
            })),
            this.prismaService.sKU.createMany({
                data: skusToCreate,
            }),
        ]);
        return product;
    }
    async delete({ id, deletedById, }, isHard) {
        if (isHard) {
            return this.prismaService.product.delete({
                where: {
                    id,
                },
            });
        }
        const now = new Date();
        const [product] = await Promise.all([
            this.prismaService.product.update({
                where: {
                    id,
                    deletedAt: null,
                },
                data: {
                    deletedAt: now,
                    deletedById,
                },
            }),
            this.prismaService.productTranslation.updateMany({
                where: {
                    productId: id,
                    deletedAt: null,
                },
                data: {
                    deletedAt: now,
                    deletedById,
                },
            }),
            this.prismaService.sKU.updateMany({
                where: {
                    productId: id,
                    deletedAt: null,
                },
                data: {
                    deletedAt: now,
                    deletedById,
                },
            }),
        ]);
        return product;
    }
};
exports.ProductRepo = ProductRepo;
exports.ProductRepo = ProductRepo = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductRepo);
//# sourceMappingURL=product.repo.js.map