import { ChatRepo } from './chat.repo';
import { CreateMessageBodyType, GetMessagesQueryType } from './chat.model';
export declare class ChatService {
    private readonly chatRepo;
    constructor(chatRepo: ChatRepo);
    list(props: {
        query: GetMessagesQueryType;
    }): Promise<{
        receiver: {
            id: number;
            name: string;
            email: string;
            avatar: string | null;
        } | null;
        limit: number;
        page: number;
        totalItems: number;
        totalPages: number;
        messages: {
            id: number;
            createdAt: Date;
            content: string;
            fromUserId: number;
            toUserId: number;
            readAt: Date | null;
        }[];
    }>;
    listReceivers({ fromUserId }: {
        fromUserId: any;
    }): Promise<any>;
    create(data: CreateMessageBodyType): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        fromUserId: number;
        toUserId: number;
        readAt: Date | null;
    }>;
}
