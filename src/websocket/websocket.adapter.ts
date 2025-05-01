import { IoAdapter } from '@nestjs/platform-socket.io'
import { Server, ServerOptions, Socket } from 'socket.io'

// const namespace = ['/', 'chat', 'payment']

export class WebsocketAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions) {
    const server: Server = super.createIOServer(3003, {
      ...options,
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true,
      },
    })

    const authMiddleware = (socket: Socket, next: (err?: any) => void) => {
      console.log(`Client ${socket.id} connected`)

      socket.on('disconnect', () => {
        console.log(`Client ${socket.id} disconnected`)
      })
      next()
    }
    //Cách 1
    // namespace.forEach((item) => {
    //   server.of(item).use(authMiddleware)
    // })

    //Cách 2:
    server.use(authMiddleware)
    server.of(/.*/).use(authMiddleware)
    return server
  }
}
