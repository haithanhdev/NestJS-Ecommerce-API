import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

//namespace '/'
@WebSocketGateway({ namespace: 'payment' })
export class PaymentGateway {
  @WebSocketServer()
  server: Server

  //   afterInit(server: Server) {
  //     //App Chạy lần đầu tiên thì nó sẽ thực hiện
  //     //Emit một event nào đó chẳng hạn
  //     console.log('Websocket server initialized')
  //   }

  handleConnection(client: Socket, ...args: any[]) {
    //Khi client connect với server thì sẽ thực hiện
    console.log('Client connected')
    console.log(client.id)
  }

  // handleDisconnect(client: any) {
  //   //Khi client disconnect với server thì sẽ thực hiện
  //   console.log('Client disconnected')
  //   console.log(client.id)
  // }

  @SubscribeMessage('send-money')
  handleEvent(@MessageBody() data: string): string {
    this.server.emit('receive-money', {
      data: `Money ${data}`,
    })
    return data
  }
}
