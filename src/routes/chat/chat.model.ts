import { PaginationQuerySchema } from 'src/shared/models/request.model'
import { z } from 'zod'

export const GetMessagesQuerySchema = z
  .object({
    fromUserId: z.coerce.number().int(),
    toUserId: z.coerce.number().int(),
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().default(10),
  })
  .strict()

export const MessageSchema = z.object({
  id: z.number(),
  fromUserId: z.number(),
  toUserId: z.number(),
  content: z.string(),
  readAt: z.date().nullable(),
  createdAt: z.date()
})

export const GetMessagesResSchema = z.object({
  data: z.array(MessageSchema),
  totalItems: z.number(),
  page: z.number(), // Số trang hiện tại
  limit: z.number(), // Số item trên 1 trang
  totalPages: z.number(), // Tổng số trang
})

export const CreateMessageBodySchema = MessageSchema.pick({
  fromUserId: true,
  toUserId: true,
  content: true,
  createdAt: true
})

export type MessageType = z.infer<typeof MessageSchema>
export type GetMessagesResType = z.infer<typeof GetMessagesResSchema>
export type GetMessagesQueryType = z.infer<typeof GetMessagesQuerySchema>
export type CreateMessageBodyType = z.infer<typeof CreateMessageBodySchema>