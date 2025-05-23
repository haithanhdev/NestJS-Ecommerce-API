import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/shared/services/prisma.service'
import { CreateMessageBodyType, GetMessagesQueryType, GetMessagesResType, GetUserResType, MessageType } from './chat.model'

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
        const [totalItems, data, receiver] = await Promise.all([
            this.prismaService.message.count(cond),
            this.prismaService.message.findMany({
                ...cond,
                skip,
                take,
                orderBy: {
                    id: 'desc'
                },
            }),
            this.prismaService.user.findFirst({
                where: {id: toUserId},
                select: {id: true, name: true, email: true, avatar: true}
            })
        ])
        return {
            messages: data,
            totalItems,
            page: page,
            limit: limit,
            totalPages: Math.ceil(totalItems / limit),
            receiver,
        }
    }
    async listReceivers(fromUserId: number): Promise<any> {
        return this.prismaService.$queryRaw`
                select distinct on("User"."id") "User"."id", "User"."email", "User"."name", "User"."avatar"
                from "User", "Message"
                where "User"."id" = "Message"."toUserId" and "Message"."fromUserId" = ${fromUserId}
            `
    }
    create(data: CreateMessageBodyType): Promise<MessageType> {
        return this.prismaService.message.create({
            data: data
        })
    }
}