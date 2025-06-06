import { Server, Socket } from 'socket.io';
export declare class PaymentGateway {
    server: Server;
    handleConnection(client: Socket, ...args: any[]): void;
    handleEvent(data: string): string;
}
