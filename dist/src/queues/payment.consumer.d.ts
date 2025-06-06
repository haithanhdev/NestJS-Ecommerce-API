import { WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { SharedPaymentRepository } from 'src/shared/repositories/shared-payment.repo';
export declare class PaymentConsumer extends WorkerHost {
    private readonly sharedPaymentRepository;
    constructor(sharedPaymentRepository: SharedPaymentRepository);
    process(job: Job<{
        paymentId: number;
    }, any, string>): Promise<any>;
}
