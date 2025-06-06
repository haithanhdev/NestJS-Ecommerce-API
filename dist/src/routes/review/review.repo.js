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
exports.ReviewRepository = void 0;
const common_1 = require("@nestjs/common");
const order_constants_1 = require("../../shared/constants/order.constants");
const helpers_1 = require("../../shared/helpers");
const prisma_service_1 = require("../../shared/services/prisma.service");
let ReviewRepository = class ReviewRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async list(productId, pagination) {
        const skip = (pagination.page - 1) * pagination.limit;
        const take = pagination.limit;
        const [totalItems, data] = await Promise.all([
            this.prismaService.review.count({
                where: {
                    productId,
                },
            }),
            this.prismaService.review.findMany({
                where: {
                    productId,
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            avatar: true,
                        },
                    },
                    medias: true,
                },
                skip,
                take,
                orderBy: {
                    createdAt: 'desc',
                },
            }),
        ]);
        return {
            data,
            totalItems,
            page: pagination.page,
            limit: pagination.limit,
            totalPages: Math.ceil(totalItems / pagination.limit),
        };
    }
    async validateOrder({ orderId, userId }) {
        const order = await this.prismaService.order.findUnique({
            where: {
                id: orderId,
                userId,
            },
        });
        if (!order) {
            throw new common_1.BadRequestException('Đơn hàng không tồn tại hoặc không thuộc về bạn');
        }
        if (order.status !== order_constants_1.OrderStatus.DELIVERED) {
            throw new common_1.BadRequestException('Đơn hàng chưa được giao');
        }
        return order;
    }
    async validateUpdateReview({ reviewId, userId }) {
        const review = await this.prismaService.review.findUnique({
            where: {
                id: reviewId,
                userId,
            },
        });
        if (!review) {
            throw new common_1.NotFoundException('Đánh giá không tồn tại hoặc không thuộc về bạn');
        }
        if (review.updateCount >= 1) {
            throw new common_1.BadRequestException('Bạn chỉ được phép sửa đánh giá 1 lần');
        }
        return review;
    }
    async create(userId, body) {
        const { content, medias, productId, orderId, rating } = body;
        await this.validateOrder({
            orderId,
            userId,
        });
        return this.prismaService.$transaction(async (tx) => {
            const review = await tx.review
                .create({
                data: {
                    content,
                    rating,
                    productId,
                    orderId,
                    userId,
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            avatar: true,
                        },
                    },
                },
            })
                .catch((error) => {
                if ((0, helpers_1.isUniqueConstraintPrismaError)(error)) {
                    throw new common_1.ConflictException('Bạn đã đánh giá sản phẩm này rồi');
                }
                throw error;
            });
            const reviewMedias = await tx.reviewMedia.createManyAndReturn({
                data: medias.map((media) => ({
                    url: media.url,
                    type: media.type,
                    reviewId: review.id,
                })),
            });
            return {
                ...review,
                medias: reviewMedias,
            };
        });
    }
    async update({ userId, reviewId, body, }) {
        const { content, medias, productId, orderId, rating } = body;
        await Promise.all([
            this.validateOrder({
                orderId,
                userId,
            }),
            this.validateUpdateReview({
                reviewId,
                userId,
            }),
        ]);
        return this.prismaService.$transaction(async (tx) => {
            const review = await tx.review.update({
                where: {
                    id: reviewId,
                },
                data: {
                    content,
                    rating,
                    productId,
                    orderId,
                    userId,
                    updateCount: {
                        increment: 1,
                    },
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            avatar: true,
                        },
                    },
                },
            });
            await tx.reviewMedia.deleteMany({
                where: {
                    reviewId,
                },
            });
            const reviewMedias = await tx.reviewMedia.createManyAndReturn({
                data: medias.map((media) => ({
                    url: media.url,
                    type: media.type,
                    reviewId: review.id,
                })),
            });
            return {
                ...review,
                medias: reviewMedias,
            };
        });
    }
    async getDetail(reviewId) {
        const data = await this.prismaService.review.findUnique({
            where: {
                id: reviewId,
            },
            include: {
                medias: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true,
                    },
                },
            },
        });
        return data;
    }
};
exports.ReviewRepository = ReviewRepository;
exports.ReviewRepository = ReviewRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReviewRepository);
//# sourceMappingURL=review.repo.js.map