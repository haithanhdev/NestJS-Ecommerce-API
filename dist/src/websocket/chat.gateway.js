"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const chat_service_1 = require("../routes/chat/chat.service");
let ChatGateway = class ChatGateway {
    constructor(chatService) {
        this.chatService = chatService;
        this.sessions = new Map();
        this.chatMap = new Map();
        this.socketUserMap = new Map();
    }
    async handleStartChat(client, data) {
        const fromUserId = client.data.userId;
        const socketId = client.id;
        const roomKey = generateRoomKey(fromUserId, data.toUserId);
        common_1.Logger.log(`User ${fromUserId} starting chat with ${data.toUserId}, room: ${roomKey}`);
        const oldRoomKey = this.chatMap.get(socketId);
        if (oldRoomKey) {
            const oldRoom = this.sessions.get(oldRoomKey);
            oldRoom?.delete(socketId);
            common_1.Logger.log(`Removed socket ${socketId} from old room ${oldRoomKey}`);
        }
        this.chatMap.set(socketId, roomKey);
        this.socketUserMap.set(socketId, fromUserId);
        if (!this.sessions.has(roomKey)) {
            this.sessions.set(roomKey, new Set());
        }
        const targets = this.sessions.get(roomKey);
        targets?.add(socketId);
        common_1.Logger.log(`Added socket ${socketId} to room ${roomKey}, total sockets in room: ${targets?.size}`);
    }
    async handleEvent(client, newMessage) {
        const { userId } = client.data;
        newMessage.fromUserId = userId;
        common_1.Logger.log(`Received message from user ${userId} to ${newMessage.toUserId}: ${newMessage.content}`);
        try {
            const result = await this.chatService.create(newMessage);
            const roomKey = generateRoomKey(userId, newMessage.toUserId);
            const sockets = this.sessions.get(roomKey);
            common_1.Logger.log(`Emitting message to room ${roomKey}, sockets: ${sockets?.size}`);
            sockets?.forEach((id) => {
                this.server.to(id).emit('receive-message', result);
            });
        }
        catch (error) {
            common_1.Logger.error(`Error handling message: ${error.message}`, error.stack);
        }
    }
    async handleDisconnect(client) {
        const socketId = client.id;
        const roomKey = this.chatMap.get(socketId);
        const userId = this.socketUserMap.get(socketId);
        common_1.Logger.log(`User ${userId} disconnected, socket: ${socketId}, room: ${roomKey}`);
        if (roomKey) {
            this.sessions.get(roomKey)?.delete(socketId);
            this.chatMap.delete(socketId);
        }
        this.socketUserMap.delete(socketId);
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", Function)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('start-chat'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleStartChat", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('send-message'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleEvent", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ namespace: 'chat' }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatGateway);
function generateRoomKey(userA, userB) {
    return [userA, userB].sort((a, b) => a - b).join('-');
}
//# sourceMappingURL=chat.gateway.js.map