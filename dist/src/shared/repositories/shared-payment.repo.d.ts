import { PrismaService } from 'src/shared/services/prisma.service';
export declare class SharedPaymentRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    cancelPaymentAndOrder(paymentId: number): Promise<void>;
}
