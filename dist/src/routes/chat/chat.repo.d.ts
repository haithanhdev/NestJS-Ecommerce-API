import { PrismaService } from 'src/shared/services/prisma.service';
import { CreateMessageBodyType, GetMessagesResType, MessageType } from './chat.model';
export declare class ChatRepo {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    list({ limit, page, fromUserId, toUserId, }: {
        limit: number;
        page: number;
        fromUserId: number;
        toUserId: number;
    }): Promise<GetMessagesResType>;
    listReceivers(fromUserId: number): Promise<any>;
    create(data: CreateMessageBodyType): Promise<MessageType>;
}
