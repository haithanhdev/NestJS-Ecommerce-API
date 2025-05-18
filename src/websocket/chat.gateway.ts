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
    
  constructor(private readonly chatService: ChatService,
    private readonly sharedWebsocketRepository: SharedWebsocketRepository) { }
  
  @SubscribeMessage('send-message')
  async handleEvent(@ConnectedSocket() client: Socket, @MessageBody() newMessage: CreateMessageBodyType) {
    newMessage.fromUserId = client.data.userId
    const result = await this.chatService.create(newMessage)
    try {
      const sockets = await Promise.all([
        this.sharedWebsocketRepository.findMany(newMessage.toUserId),
        this.sharedWebsocketRepository.findMany(newMessage.fromUserId)
      ])
      sockets.flat().forEach((ws) => {
        this.server.to(ws.id).emit('receive-message', result)
      })
      
    } catch (error) {
      Logger.log(error)
    }
  }
}
