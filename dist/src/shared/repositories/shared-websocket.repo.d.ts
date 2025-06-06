import { PrismaService } from 'src/shared/services/prisma.service';
export declare class SharedWebsocketRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findMany(userId: number): import(".prisma/client").Prisma.PrismaPromise<{
        userId: number;
        id: string;
        createdAt: Date;
    }[]>;
    create(data: {
        id: string;
        userId: number;
    }): import(".prisma/client").Prisma.Prisma__WebSocketClient<{
        userId: number;
        id: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    delete(id: string): import(".prisma/client").Prisma.Prisma__WebSocketClient<{
        userId: number;
        id: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
