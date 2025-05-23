import { Module } from '@nestjs/common'
import { ChatModule } from 'src/routes/chat/chat.module'
import { ChatRepo } from 'src/routes/chat/chat.repo'
import { ChatService } from 'src/routes/chat/chat.service'
import { ChatGateway } from 'src/websocket/chat.gateway'
import { PaymentGateway } from 'src/websocket/payment.gateway'

@Module({
  imports: [ChatModule],
  providers: [ChatGateway, PaymentGateway],
})
export class WebsocketModule {}
