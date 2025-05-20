import { Controller, Get, Query } from '@nestjs/common';
import { ZodSerializerDto } from 'nestjs-zod'
import { ActiveUser } from 'src/shared/decorators/active-user.decorator'
import { ChatService } from 'src/routes/chat/chat.service'
import {GetMessagesQueryDTO, GetMessagesResDTO, GetUsersDTO} from 'src/routes/chat/chat.dto'
import { AccessTokenPayload } from 'src/shared/types/jwt.type'


@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) {}
    @Get()
    @ZodSerializerDto(GetMessagesResDTO)
    async list(@Query() query: GetMessagesQueryDTO, @ActiveUser() user: AccessTokenPayload) {
        query.fromUserId = user.userId
        const result = await this.chatService.list({
            query,
        })
        result.messages.reverse();
        return result
    }
    @Get('/receivers')
    @ZodSerializerDto(GetUsersDTO)
    async listReceivers(@ActiveUser() user: AccessTokenPayload) {
        const result = await this.chatService.listReceivers({
            fromUserId: user.userId
        })
        return {users: result}
    }
}
