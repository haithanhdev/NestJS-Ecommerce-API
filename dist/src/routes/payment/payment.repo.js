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
exports.PaymentRepo = void 0;
const common_1 = require("@nestjs/common");
const date_fns_1 = require("date-fns");
const payment_producer_1 = require("./payment.producer");
const order_constants_1 = require("../../shared/constants/order.constants");
const other_constants_1 = require("../../shared/constants/other.constants");
const payment_constant_1 = require("../../shared/constants/payment.constant");
const prisma_service_1 = require("../../shared/services/prisma.service");
let PaymentRepo = class PaymentRepo {
    constructor(prismaService, paymentProducer) {
        this.prismaService = prismaService;
        this.paymentProducer = paymentProducer;
    }
    getTotalPrice(orders) {
        return orders.reduce((total, order) => {
            const orderTotal = order.items.reduce((totalPrice, productSku) => {
                return totalPrice + productSku.skuPrice * productSku.quantity;
            }, 0);
            return total + orderTotal;
        }, 0);
    }
    async receiver(body) {
        let amountIn = 0;
        let amountOut = 0;
        if (body.transferType === 'in') {
            amountIn = body.transferAmount;
        }
        else if (body.transferType === 'out') {
            amountOut = body.transferAmount;
        }
        const paymentTransaction = await this.prismaService.paymentTransaction.findUnique({
            where: {
                id: body.id,
            },
        });
        if (paymentTransaction) {
            throw new common_1.BadRequestException('Payment transaction already exists');
        }
        const userId = await this.prismaService.$transaction(async (tx) => {
            await tx.paymentTransaction.create({
                data: {
                    id: body.id,
                    gateway: body.gateway,
                    transactionDate: (0, date_fns_1.parse)(body.transactionDate, 'yyyy-MM-dd HH:mm:ss', new Date()),
                    accountNumber: body.accountNumber,
                    subAccount: body.subAccount,
                    amountIn,
                    amountOut,
                    accumulated: body.accumulated,
                    code: body.code,
                    transactionContent: body.content,
                    referenceNumber: body.referenceCode,
                    body: body.description,
                },
            });
            const paymentId = body.code
                ? Number(body.code.split(other_constants_1.PREFIX_PAYMENT_CODE)[1])
                : Number(body.content?.split(other_constants_1.PREFIX_PAYMENT_CODE)[1]);
            if (isNaN(paymentId)) {
                throw new common_1.BadRequestException('Cannot get payment id from content');
            }
            const payment = await tx.payment.findUnique({
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
                throw new common_1.BadRequestException(`Cannot find payment with id ${paymentId}`);
            }
            const userId = payment.orders[0].userId;
            const { orders } = payment;
            const totalPrice = this.getTotalPrice(orders);
            if (totalPrice !== body.transferAmount) {
                throw new common_1.BadRequestException(`Price not match, expected ${totalPrice} but got ${body.transferAmount}`);
            }
            await Promise.all([
                tx.payment.update({
                    where: {
                        id: paymentId,
                    },
                    data: {
                        status: payment_constant_1.PaymentStatus.SUCCESS,
                    },
                }),
                tx.order.updateMany({
                    where: {
                        id: {
                            in: orders.map((order) => order.id),
                        },
                    },
                    data: {
                        status: order_constants_1.OrderStatus.PENDING_PICKUP,
                    },
                }),
                this.paymentProducer.removeJob(paymentId),
            ]);
            return userId;
        });
        return userId;
    }
};
exports.PaymentRepo = PaymentRepo;
exports.PaymentRepo = PaymentRepo = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        payment_producer_1.PaymentProducer])
], PaymentRepo);
//# sourceMappingURL=payment.repo.js.map