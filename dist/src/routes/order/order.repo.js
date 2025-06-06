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
exports.OrderRepo = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const order_error_1 = require("./order.error");
const order_producer_1 = require("./order.producer");
const payment_constant_1 = require("../../shared/constants/payment.constant");
const helpers_1 = require("../../shared/helpers");
const prisma_service_1 = require("../../shared/services/prisma.service");
let OrderRepo = class OrderRepo {
    constructor(prismaService, orderProducer) {
        this.prismaService = prismaService;
        this.orderProducer = orderProducer;
    }
    async list(userId, query) {
        const { page, limit, status } = query;
        const skip = (page - 1) * limit;
        const take = limit;
        const where = {
            userId,
            status,
        };
        const totalItem$ = this.prismaService.order.count({
            where,
        });
        const data$ = this.prismaService.order.findMany({
            where,
            include: {
                items: true,
            },
            skip,
            take,
            orderBy: {
                createdAt: 'desc',
            },
        });
        const [data, totalItems] = await Promise.all([data$, totalItem$]);
        return {
            data,
            page,
            limit,
            totalItems,
            totalPages: Math.ceil(totalItems / limit),
        };
    }
    async listOrders(userId, roleId, query) {
        const { page, limit, status } = query;
        const skip = (page - 1) * limit;
        const take = limit;
        const where = {
            status,
        };
        if (roleId === 3) {
            where.shopId = userId;
        }
        const totalItem$ = this.prismaService.order.count({
            where,
        });
        const data$ = await this.prismaService.order.findMany({
            where,
            include: {
                items: true,
            },
            skip,
            take,
            orderBy: {
                createdAt: 'desc',
            },
        });
        const [data, totalItems] = await Promise.all([data$, totalItem$]);
        return {
            data,
            page,
            limit,
            totalItems,
            totalPages: Math.ceil(totalItems / limit),
        };
    }
    async create(userId, body) {
        const allBodyCartItemIds = body.map((item) => item.cartItemIds).flat();
        const cartItems = await this.prismaService.cartItem.findMany({
            where: {
                id: {
                    in: allBodyCartItemIds,
                },
                userId,
            },
            include: {
                sku: {
                    include: {
                        product: {
                            include: {
                                productTranslations: true,
                            },
                        },
                    },
                },
            },
        });
        if (cartItems.length !== allBodyCartItemIds.length) {
            throw order_error_1.NotFoundCartItemException;
        }
        const isOutOfStock = cartItems.some((item) => {
            return item.sku.stock < item.quantity;
        });
        if (isOutOfStock) {
            throw order_error_1.OutOfStockSKUException;
        }
        const isExistNotReadyProduct = cartItems.some((item) => item.sku.product.deletedAt !== null ||
            item.sku.product.publishedAt === null ||
            item.sku.product.publishedAt > new Date());
        if (isExistNotReadyProduct) {
            throw order_error_1.ProductNotFoundException;
        }
        const cartItemMap = new Map();
        cartItems.forEach((item) => {
            cartItemMap.set(item.id, item);
        });
        const isValidShop = body.every((item) => {
            const bodyCartItemIds = item.cartItemIds;
            return bodyCartItemIds.every((cartItemId) => {
                const cartItem = cartItemMap.get(cartItemId);
                return item.shopId === cartItem.sku.createdById;
            });
        });
        if (!isValidShop) {
            throw order_error_1.SKUNotBelongToShopException;
        }
        const [paymentId, orders] = await this.prismaService.$transaction(async (tx) => {
            const payment = await tx.payment.create({
                data: {
                    status: payment_constant_1.PaymentStatus.PENDING,
                },
            });
            const orders$ = Promise.all(body.map((item) => tx.order.create({
                data: {
                    userId,
                    status: client_1.OrderStatus.PENDING_PAYMENT,
                    receiver: item.receiver,
                    createdById: userId,
                    shopId: item.shopId,
                    paymentId: payment.id,
                    items: {
                        create: item.cartItemIds.map((cartItemId) => {
                            const cartItem = cartItemMap.get(cartItemId);
                            return {
                                productName: cartItem.sku.product.name,
                                skuPrice: cartItem.sku.price,
                                image: cartItem.sku.image,
                                skuId: cartItem.sku.id,
                                skuValue: cartItem.sku.value,
                                quantity: cartItem.quantity,
                                productId: cartItem.sku.product.id,
                                productTranslations: cartItem.sku.product.productTranslations.map((translation) => {
                                    return {
                                        id: translation.id,
                                        name: translation.name,
                                        description: translation.description,
                                        languageId: translation.languageId,
                                    };
                                }),
                            };
                        }),
                    },
                    products: {
                        connect: item.cartItemIds.map((cartItemId) => {
                            const cartItem = cartItemMap.get(cartItemId);
                            return {
                                id: cartItem.sku.product.id,
                            };
                        }),
                    },
                },
            })));
            const cartItem$ = tx.cartItem.deleteMany({
                where: {
                    id: {
                        in: allBodyCartItemIds,
                    },
                },
            });
            const sku$ = Promise.all(cartItems.map((item) => tx.sKU.update({
                where: {
                    id: item.sku.id,
                },
                data: {
                    stock: {
                        decrement: item.quantity,
                    },
                },
            })));
            const addCancelPaymentJob$ = this.orderProducer.addCancelPaymentJob(payment.id);
            const [orders] = await Promise.all([orders$, cartItem$, sku$, addCancelPaymentJob$]);
            return [payment.id, orders];
        });
        return {
            paymentId,
            orders,
        };
    }
    async detail(userId, roleId, orderid) {
        const where = {
            id: orderid,
            deletedAt: null,
        };
        if (roleId === 3) {
            where.shopId = userId;
        }
        else if (roleId === 2) {
            where.userId = userId;
        }
        const order = await this.prismaService.order.findUnique({
            where,
            include: {
                items: true,
            },
        });
        if (!order) {
            throw order_error_1.OrderNotFoundException;
        }
        return order;
    }
    async cancel(userId, roleId, orderId) {
        try {
            const where = {
                id: orderId,
                deletedAt: null,
            };
            if (roleId === 3) {
                where.shopId = userId;
            }
            else if (roleId === 2) {
                where.userId = userId;
            }
            const order = await this.prismaService.order.findUniqueOrThrow({
                where,
            });
            if (order.status !== client_1.OrderStatus.PENDING_PAYMENT) {
                throw order_error_1.CannotCancelOrderException;
            }
            const updatedOrder = await this.prismaService.order.update({
                where,
                data: {
                    status: client_1.OrderStatus.CANCELLED,
                    updatedById: userId,
                },
            });
            return updatedOrder;
        }
        catch (error) {
            if ((0, helpers_1.isNotFoundPrismaError)(error)) {
                throw order_error_1.OrderNotFoundException;
            }
            throw error;
        }
    }
    async changeStatus(userId, roleId, orderId, body) {
        try {
            const where = {
                id: orderId,
                deletedAt: null,
            };
            if (roleId === 3) {
                where.shopId = userId;
            }
            else if (roleId === 2) {
                where.userId = userId;
            }
            const order = await this.prismaService.order.findUniqueOrThrow({
                where,
            });
            if (order.status === client_1.OrderStatus.PENDING_PAYMENT ||
                order.status === client_1.OrderStatus.DELIVERED ||
                order.status === client_1.OrderStatus.CANCELLED) {
                throw order_error_1.CannotChangeOrderStatusException;
            }
            const updatedOrder = await this.prismaService.order.update({
                where,
                data: {
                    status: body.status,
                    updatedById: userId,
                },
            });
            return updatedOrder;
        }
        catch (error) {
            if ((0, helpers_1.isNotFoundPrismaError)(error)) {
                throw order_error_1.OrderNotFoundException;
            }
            throw error;
        }
    }
};
exports.OrderRepo = OrderRepo;
exports.OrderRepo = OrderRepo = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        order_producer_1.OrderProducer])
], OrderRepo);
//# sourceMappingURL=order.repo.js.map