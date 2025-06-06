import { ChatService } from 'src/routes/chat/chat.service';
import { GetMessagesQueryDTO } from 'src/routes/chat/chat.dto';
import { AccessTokenPayload } from 'src/shared/types/jwt.type';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    list(query: GetMessagesQueryDTO, user: AccessTokenPayload): Promise<{
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
    listReceivers(user: AccessTokenPayload): Promise<{
        users: any;
    }>;
}
