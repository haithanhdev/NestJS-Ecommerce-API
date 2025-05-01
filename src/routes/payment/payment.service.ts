import { Injectable } from '@nestjs/common'
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server } from 'socket.io'
import { WebhookPaymentBodyType } from 'src/routes/payment/payment.model'

import { PaymentRepo } from 'src/routes/payment/payment.repo'
import { SharedWebsocketRepository } from 'src/shared/repositories/shared-websocket.repo'

@Injectable()
@WebSocketGateway({ namespace: 'payment' })
export class PaymentService {
  @WebSocketServer()
  server: Server
  constructor(
    private readonly paymentRepo: PaymentRepo,
    private readonly sharedWebsocketRepository: SharedWebsocketRepository,
  ) {}

  async receiver(body: WebhookPaymentBodyType) {
    const result = await this.paymentRepo.receiver(body)
    try {
      const websockets = await this.sharedWebsocketRepository.findMany(result)
      websockets.forEach((ws) => {
        this.server.to(ws.id).emit('payment', {
          status: 'success',
        })
      })
    } catch (error) {
      console.log(error)
    }
    return {
      message: 'Payment received successfully',
    }
  }
}
