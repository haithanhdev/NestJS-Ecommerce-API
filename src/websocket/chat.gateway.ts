import { Logger } from '@nestjs/common'
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { CreateMessageBodyType } from 'src/routes/chat/chat.model'
import { ChatService } from 'src/routes/chat/chat.service'
import { SharedWebsocketRepository } from 'src/shared/repositories/shared-websocket.repo'

//namespace '/'
@WebSocketGateway({ namespace: 'chat' })
export class ChatGateway {
  @WebSocketServer()
  server: Server
  private sessions = new Map<string, Set<string>>()
  private chatMap = new Map<string, string>()
  constructor(private readonly chatService: ChatService) { }
  @SubscribeMessage('start-chat')
  async handleStartChat(@ConnectedSocket() client: Socket, @MessageBody() data: { toUserId: number }) {
    const fromUserId: number = client.data.userId
    const socketId: string = client.id
    const roomKey = generateRoomKey(fromUserId, data.toUserId)
    
    this.chatMap.set(socketId, roomKey)

    if (!this.sessions.has(roomKey)) {
      this.sessions.set(roomKey, new Set())
    }
    
    const targets = this.sessions.get(roomKey);

    targets?.add(socketId);
  }
  @SubscribeMessage('send-message')
  async handleEvent(@ConnectedSocket() client: Socket, @MessageBody() newMessage: CreateMessageBodyType) {
    const {userId} = client.data
    newMessage.fromUserId = userId
    const result = await this.chatService.create(newMessage)
    try {
      const roomKey = generateRoomKey(userId, newMessage.toUserId)
      const sockets = this.sessions.get(roomKey)
      sockets?.forEach((id) => {
        this.server.to(id).emit('receive-message', result)
      })

    } catch (error) {
      Logger.log(error)
    }
  }
  async handleDisconnect(client: Socket) {
    const roomKey = this.chatMap.get(client.id)
    this.sessions.get(roomKey as string)?.delete(client.id)
  }
}

function generateRoomKey(userA: number, userB: number): string {
  return [userA, userB].sort((a, b) => a - b).join('-');
}