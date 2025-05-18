import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/shared/services/prisma.service'
import { CreateMessageBodyType, GetMessagesQueryType, GetMessagesResType, MessageType } from './chat.model'

@Injectable()
export class ChatRepo {
    constructor(
        private readonly prismaService: PrismaService
    ) { }
    async list({ limit, page, fromUserId, toUserId }: {
        limit: number,
        page: number,
        fromUserId: number,
        toUserId: number
    }): Promise<GetMessagesResType> {
        const skip = (page - 1) * limit
        const take = limit
        const cond = {
            where: {
                OR: [
                    {
                        fromUserId: fromUserId,
                        toUserId: toUserId
                    },
                    {
                        fromUserId: toUserId,
                        toUserId: fromUserId
                    }
                ]
            }
        }
        const [totalItems, data] = await Promise.all([
            this.prismaService.message.count(cond),
            this.prismaService.message.findMany({
                ...cond,
                skip,
                take,
                include: {
                    toUser: true,
                    fromUser: true,
                },
                orderBy: {
                    id: 'desc'
                },
            }),
        ])
        return {
            data,
            totalItems,
            page: page,
            limit: limit,
            totalPages: Math.ceil(totalItems / limit),
        }
    }

    create(data: CreateMessageBodyType): Promise<MessageType> {
        return this.prismaService.message.create({
            data: data
        })
    }
}