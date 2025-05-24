import { INestApplicationContext } from '@nestjs/common'
import { IoAdapter } from '@nestjs/platform-socket.io'
import { generate } from 'rxjs'
import { Server, ServerOptions, Socket } from 'socket.io'
import { generateRoomUserId } from 'src/shared/helpers'
import { SharedWebsocketRepository } from 'src/shared/repositories/shared-websocket.repo'
import { TokenService } from 'src/shared/services/token.service'

// const namespace = ['/', 'chat', 'payment']

export class WebsocketAdapter extends IoAdapter {
  private readonly sharedWebsocketRepository: SharedWebsocketRepository
  private readonly tokenService: TokenService
  constructor(app: INestApplicationContext) {
    super(app)
    this.sharedWebsocketRepository = app.get(SharedWebsocketRepository)
    this.tokenService = app.get(TokenService)
  }
  createIOServer(port: number, options?: ServerOptions) {
    const server: Server = super.createIOServer(3003, {
      ...options,
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true,
      },
    })

    //Cách 1
    // namespace.forEach((item) => {
    //   server.of(item).use(authMiddleware)
    // })

    //Cách 2:
    server.use((socket, next) => {
      this.authMiddleware(socket, next)
    })
    server.of(/.*/).use((socket, next) => {
      this.authMiddleware(socket, next)
    })
    return server
  }

  async authMiddleware(socket: Socket, next: (err?: any) => void) {
    const { authorization } = socket.handshake.headers
    if (!authorization) {
      return next(new Error('Missing authorization header'))
    }
    const accessToken = authorization.split(' ')[1]
    if (!accessToken) {
      return next(new Error('Missing accessToken'))
    }
    try {
      const { userId } = await this.tokenService.verifyAccessToken(accessToken)
      await socket.join(generateRoomUserId(userId))
      socket.data.userId = userId

      await this.sharedWebsocketRepository.create({ id: socket.id, userId })
      socket.on('disconnect', async () => {
        await this.sharedWebsocketRepository.delete(socket.id).catch(() => {})
      })
      next()
    } catch (error) {
      next(error)
    }
  }
}
