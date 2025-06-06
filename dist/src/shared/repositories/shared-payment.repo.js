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
exports.SharedPaymentRepository = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const payment_constant_1 = require("../constants/payment.constant");
const prisma_service_1 = require("../services/prisma.service");
let SharedPaymentRepository = class SharedPaymentRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async cancelPaymentAndOrder(paymentId) {
        const payment = await this.prismaService.payment.findUnique({
            where: {
                id: paymentId,
            },
            include: {
                orders: {
                    include: {
                        items: true,
                    },
                },
            },
        });
        if (!payment) {
            throw Error('Payment not found');
        }
        const { orders } = payment;
        const productSKUSnapshots = orders.map((order) => order.items).flat();
        await this.prismaService.$transaction(async (tx) => {
            const updateOrder$ = tx.order.updateMany({
                where: {
                    id: {
                        in: orders.map((order) => order.id),
                    },
                    status: client_1.OrderStatus.PENDING_PAYMENT,
                    deletedAt: null,
                },
                data: {
                    status: client_1.OrderStatus.CANCELLED,
                },
            });
            const updateSkus$ = Promise.all(productSKUSnapshots
                .filter((item) => item.skuId)
                .map((item) => tx.sKU.update({
                where: {
                    id: item.skuId,
                },
                data: {
                    stock: {
                        increment: item.quantity,
                    },
                },
            })));
            const updatePayment$ = tx.payment.update({
                where: {
                    id: paymentId,
                },
                data: {
                    status: payment_constant_1.PaymentStatus.FAILED,
                },
            });
            return await Promise.all([updateOrder$, updateSkus$, updatePayment$]);
        });
    }
};
exports.SharedPaymentRepository = SharedPaymentRepository;
exports.SharedPaymentRepository = SharedPaymentRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SharedPaymentRepository);
//# sourceMappingURL=shared-payment.repo.js.map