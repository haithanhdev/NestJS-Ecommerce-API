import { WebhookPaymentBodyType } from 'src/routes/payment/payment.model';
import { PaymentProducer } from 'src/routes/payment/payment.producer';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class PaymentRepo {
    private readonly prismaService;
    private readonly paymentProducer;
    constructor(prismaService: PrismaService, paymentProducer: PaymentProducer);
    private getTotalPrice;
    receiver(body: WebhookPaymentBodyType): Promise<number>;
}
