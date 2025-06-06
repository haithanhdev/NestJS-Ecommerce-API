import type { Server, Socket } from 'socket.io';
import type { CreateMessageBodyType } from 'src/routes/chat/chat.model';
import { ChatService } from 'src/routes/chat/chat.service';
export declare class ChatGateway {
    private readonly chatService;
    server: Server;
    private sessions;
    private chatMap;
    private socketUserMap;
    constructor(chatService: ChatService);
    handleStartChat(client: Socket, data: {
        toUserId: number;
    }): Promise<void>;
    handleEvent(client: Socket, newMessage: CreateMessageBodyType): Promise<void>;
    handleDisconnect(client: Socket): Promise<void>;
}
