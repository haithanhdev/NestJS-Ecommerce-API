import { Logger } from '@nestjs/common'
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import type { Server, Socket } from 'socket.io'
import type { CreateMessageBodyType } from 'src/routes/chat/chat.model'
import { ChatService } from 'src/routes/chat/chat.service'

@WebSocketGateway({ namespace: 'chat' })
export class ChatGateway {
  @WebSocketServer()
  server: Server
  private sessions = new Map<string, Set<string>>()
  private chatMap = new Map<string, string>()
  private socketUserMap = new Map<string, number>() // Track socket to user mapping

  constructor(private readonly chatService: ChatService) {}

  @SubscribeMessage('start-chat')
  async handleStartChat(@ConnectedSocket() client: Socket, @MessageBody() data: { toUserId: number }) {
    const fromUserId: number = client.data.userId
    const socketId: string = client.id
    const roomKey = generateRoomKey(fromUserId, data.toUserId)

    Logger.log(`User ${fromUserId} starting chat with ${data.toUserId}, room: ${roomKey}`)

    // Clean up any previous mappings for this socket
    const oldRoomKey = this.chatMap.get(socketId)
    if (oldRoomKey) {
      const oldRoom = this.sessions.get(oldRoomKey)
      oldRoom?.delete(socketId)
      Logger.log(`Removed socket ${socketId} from old room ${oldRoomKey}`)
    }

    // Set new mappings
    this.chatMap.set(socketId, roomKey)
    this.socketUserMap.set(socketId, fromUserId)

    if (!this.sessions.has(roomKey)) {
      this.sessions.set(roomKey, new Set())
    }

    const targets = this.sessions.get(roomKey)
    targets?.add(socketId)

    Logger.log(`Added socket ${socketId} to room ${roomKey}, total sockets in room: ${targets?.size}`)
  }

  @SubscribeMessage('send-message')
  async handleEvent(@ConnectedSocket() client: Socket, @MessageBody() newMessage: CreateMessageBodyType) {
    const { userId } = client.data
    newMessage.fromUserId = userId

    Logger.log(`Received message from user ${userId} to ${newMessage.toUserId}: ${newMessage.content}`)

    try {
      // Create message in database
      const result = await this.chatService.create(newMessage)

      // Get room key and emit to all sockets in the room
      const roomKey = generateRoomKey(userId, newMessage.toUserId)
      const sockets = this.sessions.get(roomKey)

      Logger.log(`Emitting message to room ${roomKey}, sockets: ${sockets?.size}`)

      sockets?.forEach((id) => {
        this.server.to(id).emit('receive-message', result)
      })
    } catch (error) {
      Logger.error(`Error handling message: ${error.message}`, error.stack)
    }
  }

  async handleDisconnect(client: Socket) {
    const socketId = client.id
    const roomKey = this.chatMap.get(socketId)
    const userId = this.socketUserMap.get(socketId)

    Logger.log(`User ${userId} disconnected, socket: ${socketId}, room: ${roomKey}`)

    if (roomKey) {
      this.sessions.get(roomKey)?.delete(socketId)
      this.chatMap.delete(socketId)
    }

    this.socketUserMap.delete(socketId)
  }
}

function generateRoomKey(userA: number, userB: number): string {
  return [userA, userB].sort((a, b) => a - b).join('-')
}
