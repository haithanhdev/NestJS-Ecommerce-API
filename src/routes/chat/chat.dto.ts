import { createZodDto } from 'nestjs-zod'
import { GetMessagesQuerySchema, GetMessagesResSchema, MessageSchema } from './chat.model'

export class MessageDTO extends createZodDto(MessageSchema) {}

export class GetMessagesResDTO extends createZodDto(GetMessagesResSchema) {}

export class GetMessagesQueryDTO extends createZodDto(GetMessagesQuerySchema) {}