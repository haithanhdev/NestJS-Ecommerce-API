import { Injectable } from '@nestjs/common'
import {
  ChangeOrderStatusBodyType,
  CreateOrderBodyType,
  GetOrderListQueryType,
  GetOrderListResType,
} from 'src/routes/order/order.model'
import { OrderProducer } from 'src/routes/order/order.producer'
import { OrderRepo } from 'src/routes/order/order.repo'

@Injectable()
export class OrderService {
  constructor(private readonly orderRepo: OrderRepo) {}

  async list(userId: number, query: GetOrderListQueryType) {
    return this.orderRepo.list(userId, query)
  }

  async listOrders(userId: number, roleId: number, query: GetOrderListQueryType) {
    return this.orderRepo.listOrders(userId, roleId, query)
  }

  async create(userId: number, body: CreateOrderBodyType) {
    const result = await this.orderRepo.create(userId, body)
    return result
  }

  cancel(userId: number, roleId: number, orderId: number) {
    return this.orderRepo.cancel(userId, roleId, orderId)
  }

  changeStatus(userId: number, roleId: number, orderId: number, body: ChangeOrderStatusBodyType) {
    return this.orderRepo.changeStatus(userId, roleId, orderId, body)
  }

  detail(userId: number, roleId: number, orderId: number) {
    return this.orderRepo.detail(userId, roleId, orderId)
  }
}
