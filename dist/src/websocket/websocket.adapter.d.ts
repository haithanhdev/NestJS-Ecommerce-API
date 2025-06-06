import { INestApplicationContext } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server, ServerOptions, Socket } from 'socket.io';
export declare class WebsocketAdapter extends IoAdapter {
    private readonly sharedWebsocketRepository;
    private readonly tokenService;
    constructor(app: INestApplicationContext);
    createIOServer(port: number, options?: ServerOptions): Server<import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, any>;
    authMiddleware(socket: Socket, next: (err?: any) => void): Promise<void>;
}
