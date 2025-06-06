import { WebhookPaymentBodyDTO } from 'src/routes/payment/payment.dto';
import { PaymentService } from 'src/routes/payment/payment.service';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    receiver(body: WebhookPaymentBodyDTO): Promise<{
        message: string;
    }>;
}
