import { Queue } from 'bullmq';
export declare class PaymentProducer {
    private paymentQueue;
    constructor(paymentQueue: Queue);
    removeJob(paymentId: number): Promise<number>;
}
