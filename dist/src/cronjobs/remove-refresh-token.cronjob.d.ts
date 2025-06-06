import { PrismaService } from 'src/shared/services/prisma.service';
export declare class RemoveRefreshTokenCronjob {
    private prismaService;
    private readonly logger;
    constructor(prismaService: PrismaService);
    handleCron(): Promise<void>;
}
