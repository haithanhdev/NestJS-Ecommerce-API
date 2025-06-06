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
exports.PaymentConsumer = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const queue_constant_1 = require("../shared/constants/queue.constant");
const shared_payment_repo_1 = require("../shared/repositories/shared-payment.repo");
let PaymentConsumer = class PaymentConsumer extends bullmq_1.WorkerHost {
    constructor(sharedPaymentRepository) {
        super();
        this.sharedPaymentRepository = sharedPaymentRepository;
    }
    async process(job) {
        switch (job.name) {
            case queue_constant_1.CANCEL_PAYMENT_JOB_NAME: {
                const paymentId = job.data.paymentId;
                await this.sharedPaymentRepository.cancelPaymentAndOrder(paymentId);
                return {};
            }
            default: {
                break;
            }
        }
    }
};
exports.PaymentConsumer = PaymentConsumer;
exports.PaymentConsumer = PaymentConsumer = __decorate([
    (0, bullmq_1.Processor)(queue_constant_1.PAYMENT_QUEUE_NAME),
    __metadata("design:paramtypes", [shared_payment_repo_1.SharedPaymentRepository])
], PaymentConsumer);
//# sourceMappingURL=payment.consumer.js.map