import { Queue } from 'bullmq';
export declare class OrderProducer {
    private paymentQueue;
    constructor(paymentQueue: Queue);
    addCancelPaymentJob(paymentId: number): Promise<import("bullmq").Job<any, any, string>>;
}
