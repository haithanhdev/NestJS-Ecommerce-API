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
exports.CartRepo = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const cart_error_1 = require("./cart.error");
const other_constants_1 = require("../../shared/constants/other.constants");
const helpers_1 = require("../../shared/helpers");
const prisma_service_1 = require("../../shared/services/prisma.service");
let CartRepo = class CartRepo {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async validateSKU({ skuId, quantity, userId, isCreate, }) {
        const [cartItem, sku] = await Promise.all([
            this.prismaService.cartItem.findUnique({
                where: {
                    userId_skuId: {
                        userId,
                        skuId,
                    },
                },
            }),
            this.prismaService.sKU.findUnique({
                where: { id: skuId, deletedAt: null },
                include: {
                    product: true,
                },
            }),
        ]);
        if (!sku) {
            throw cart_error_1.NotFoundSKUException;
        }
        if (isCreate && cartItem && quantity + cartItem.quantity > sku.stock) {
            throw cart_error_1.InvalidQuantityException;
        }
        if (sku.stock < 1 || sku.stock < quantity) {
            throw cart_error_1.OutOfStockSKUException;
        }
        const { product } = sku;
        if (product.deletedAt !== null ||
            product.publishedAt === null ||
            (product.publishedAt !== null && product.publishedAt > new Date())) {
            throw cart_error_1.ProductNotFoundException;
        }
        return sku;
    }
    async list({ userId, languageId, page, limit, }) {
        const cartItems = await this.prismaService.cartItem.findMany({
            where: {
                userId,
                sku: {
                    product: {
                        deletedAt: null,
                        publishedAt: {
                            lte: new Date(),
                            not: null,
                        },
                    },
                },
            },
            include: {
                sku: {
                    include: {
                        product: {
                            include: {
                                productTranslations: {
                                    where: languageId === other_constants_1.ALL_LANGUAGE_CODE ? { deletedAt: null } : { languageId, deletedAt: null },
                                },
                                createdBy: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                updatedAt: 'desc',
            },
        });
        console.log(cartItems);
        const groupMap = new Map();
        for (const cartItem of cartItems) {
            const shopId = cartItem.sku.product.createdById;
            if (shopId) {
                if (!groupMap.has(shopId)) {
                    groupMap.set(shopId, {
                        shop: cartItem.sku.product.createdBy,
                        cartItems: [],
                    });
                }
                groupMap.get(shopId)?.cartItems.push(cartItem);
            }
        }
        console.log(groupMap);
        const sortedGroups = Array.from(groupMap.values());
        const skip = (page - 1) * limit;
        const take = limit;
        const totalGroups = sortedGroups.length;
        const pagedGroups = sortedGroups.slice(skip, skip + take);
        return {
            data: pagedGroups,
            totalItems: totalGroups,
            limit,
            page,
            totalPages: Math.ceil(totalGroups / limit),
        };
    }
    async list2({ userId, languageId, page, limit, }) {
        const skip = (page - 1) * limit;
        const take = limit;
        const totalItems$ = this.prismaService.$queryRaw `
      SELECT
        "Product"."createdById"
      FROM "CartItem"
      JOIN "SKU" ON "CartItem"."skuId" = "SKU"."id"
      JOIN "Product" ON "SKU"."productId" = "Product"."id"
      WHERE "CartItem"."userId" = ${userId}
        AND "Product"."deletedAt" IS NULL
        AND "Product"."publishedAt" IS NOT NULL
        AND "Product"."publishedAt" <= NOW()
      GROUP BY "Product"."createdById"
    `;
        const data$ = this.prismaService.$queryRaw `
     SELECT
       "Product"."createdById",
       json_agg(
         jsonb_build_object(
           'id', "CartItem"."id",
           'quantity', "CartItem"."quantity",
           'skuId', "CartItem"."skuId",
           'userId', "CartItem"."userId",
           'createdAt', "CartItem"."createdAt",
           'updatedAt', "CartItem"."updatedAt",
           'sku', jsonb_build_object(
              'id', "SKU"."id",
              'value', "SKU"."value",
              'price', "SKU"."price",
              'stock', "SKU"."stock",
              'image', "SKU"."image",
              'productId', "SKU"."productId",
              'product', jsonb_build_object(
                'id', "Product"."id",
                'publishedAt', "Product"."publishedAt",
                'name', "Product"."name",
                'basePrice', "Product"."basePrice",
                'virtualPrice', "Product"."virtualPrice",
                'brandId', "Product"."brandId",
                'images', "Product"."images",
                'variants', "Product"."variants",
                'productTranslations', COALESCE((
                  SELECT json_agg(
                    jsonb_build_object(
                      'id', pt."id",
                      'productId', pt."productId",
                      'languageId', pt."languageId",
                      'name', pt."name",
                      'description', pt."description"
                    )
                  ) FILTER (WHERE pt."id" IS NOT NULL)
                  FROM "ProductTranslation" pt
                  WHERE pt."productId" = "Product"."id"
                    AND pt."deletedAt" IS NULL
                    ${languageId === other_constants_1.ALL_LANGUAGE_CODE ? client_1.Prisma.sql `` : client_1.Prisma.sql `AND pt."languageId" = ${languageId}`}
                ), '[]'::json)
              )
           )
         ) ORDER BY "CartItem"."updatedAt" DESC
       ) AS "cartItems",
       jsonb_build_object(
         'id', "User"."id",
         'name', "User"."name",
         'avatar', "User"."avatar"
       ) AS "shop"
     FROM "CartItem"
     JOIN "SKU" ON "CartItem"."skuId" = "SKU"."id"
     JOIN "Product" ON "SKU"."productId" = "Product"."id"
     LEFT JOIN "ProductTranslation" ON "Product"."id" = "ProductTranslation"."productId"
       AND "ProductTranslation"."deletedAt" IS NULL
       ${languageId === other_constants_1.ALL_LANGUAGE_CODE ? client_1.Prisma.sql `` : client_1.Prisma.sql `AND "ProductTranslation"."languageId" = ${languageId}`}
     LEFT JOIN "User" ON "Product"."createdById" = "User"."id"
     WHERE "CartItem"."userId" = ${userId}
        AND "Product"."deletedAt" IS NULL
        AND "Product"."publishedAt" IS NOT NULL
        AND "Product"."publishedAt" <= NOW()
     GROUP BY "Product"."createdById", "User"."id"
     ORDER BY MAX("CartItem"."updatedAt") DESC
      LIMIT ${take} 
      OFFSET ${skip}
   `;
        const [data, totalItems] = await Promise.all([data$, totalItems$]);
        return {
            data,
            page,
            limit,
            totalItems: totalItems.length,
            totalPages: Math.ceil(totalItems.length / limit),
        };
    }
    async create(userId, body) {
        await this.validateSKU({
            skuId: body.skuId,
            quantity: body.quantity,
            userId,
            isCreate: true,
        });
        return this.prismaService.cartItem.upsert({
            where: {
                userId_skuId: {
                    userId,
                    skuId: body.skuId,
                },
            },
            update: {
                quantity: {
                    increment: body.quantity,
                },
            },
            create: {
                userId,
                skuId: body.skuId,
                quantity: body.quantity,
            },
        });
    }
    async update({ userId, cartItemId, body, }) {
        await this.validateSKU({
            skuId: body.skuId,
            quantity: body.quantity,
            userId,
            isCreate: false,
        });
        return this.prismaService.cartItem
            .update({
            where: {
                id: cartItemId,
                userId,
            },
            data: {
                skuId: body.skuId,
                quantity: body.quantity,
            },
        })
            .catch((error) => {
            if ((0, helpers_1.isNotFoundPrismaError)(error)) {
                throw cart_error_1.NotFoundCartItemException;
            }
            throw error;
        });
    }
    delete(userId, body) {
        return this.prismaService.cartItem.deleteMany({
            where: {
                id: {
                    in: body.cartItemIds,
                },
                userId,
            },
        });
    }
};
exports.CartRepo = CartRepo;
exports.CartRepo = CartRepo = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CartRepo);
//# sourceMappingURL=cart.repo.js.map