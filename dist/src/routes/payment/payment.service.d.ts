import { Server } from 'socket.io';
import { WebhookPaymentBodyType } from 'src/routes/payment/payment.model';
import { PaymentRepo } from 'src/routes/payment/payment.repo';
import { SharedWebsocketRepository } from 'src/shared/repositories/shared-websocket.repo';
export declare class PaymentService {
    private readonly paymentRepo;
    private readonly sharedWebsocketRepository;
    server: Server;
    constructor(paymentRepo: PaymentRepo, sharedWebsocketRepository: SharedWebsocketRepository);
    receiver(body: WebhookPaymentBodyType): Promise<{
        message: string;
    }>;
}
