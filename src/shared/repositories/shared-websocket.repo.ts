import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/shared/services/prisma.service'

@Injectable()
export class SharedWebsocketRepository {
  constructor(private readonly prismaService: PrismaService) {}
  findMany(userId: number) {
    return this.prismaService.webSocket.findMany({
      where: {
        userId: userId,
      },
    })
  }
  create(data: { id: string; userId: number }) {
    return this.prismaService.webSocket.create({
      data: {
        id: data.id,
        userId: data.userId,
      },
    })
  }

  delete(id: string) {
    return this.prismaService.webSocket.delete({
      where: {
        id: id,
      },
    })
  }
}
