import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { ChatRepo } from './chat.repo';

@Module({
  controllers: [ChatController],
  providers: [ChatService, ChatRepo]
})
export class ChatModule {}
