import { Module } from '@nestjs/common'
import { ChatRepo } from 'src/routes/chat/chat.repo'
import { ChatService } from 'src/routes/chat/chat.service'
import { ChatGateway } from 'src/websocket/chat.gateway'
import { PaymentGateway } from 'src/websocket/payment.gateway'

@Module({
  providers: [ChatGateway, PaymentGateway, ChatService, ChatRepo],
})
export class WebsocketModule {}
