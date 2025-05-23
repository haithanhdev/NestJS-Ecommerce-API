import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common'
import { ZodSerializerDto } from 'nestjs-zod'
import {
  CancelOrderBodyDTO,
  CancelOrderResDTO,
  ChangeOrderStatusBodyDTO,
  CreateOrderBodyDTO,
  CreateOrderResDTO,
  GetOrderDetailResDTO,
  GetOrderListQueryDTO,
  GetOrderListResDTO,
  GetOrderParamsDTO,
} from 'src/routes/order/order.dto'
import { OrderService } from 'src/routes/order/order.service'
import { ActiveUser } from 'src/shared/decorators/active-user.decorator'

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @ZodSerializerDto(GetOrderListResDTO)
  getCart(@ActiveUser('userId') userId: number, @Query() query: GetOrderListQueryDTO) {
    return this.orderService.list(userId, query)
  }

  @Get('/manage')
  @ZodSerializerDto(GetOrderListResDTO)
  getOrders(
    @ActiveUser('userId') userId: number,
    @ActiveUser('roleId') roleId: number,
    @Query() query: GetOrderListQueryDTO,
  ) {
    return this.orderService.listOrders(userId, roleId, query)
  }

  @Post()
  @ZodSerializerDto(CreateOrderResDTO)
  create(@ActiveUser('userId') userId: number, @Body() body: CreateOrderBodyDTO) {
    return this.orderService.create(userId, body)
  }

  @Get(':orderId')
  @ZodSerializerDto(GetOrderDetailResDTO)
  detail(
    @ActiveUser('userId') userId: number,
    @ActiveUser('roleId') roleId: number,
    @Param() param: GetOrderParamsDTO,
  ) {
    return this.orderService.detail(userId, roleId, param.orderId)
  }

  @Get('/manage/:orderId')
  @ZodSerializerDto(GetOrderDetailResDTO)
  detailOrder(
    @ActiveUser('userId') userId: number,
    @ActiveUser('roleId') roleId: number,
    @Param() param: GetOrderParamsDTO,
  ) {
    return this.orderService.detail(userId, roleId, param.orderId)
  }

  @Put(':orderId')
  @ZodSerializerDto(CancelOrderResDTO)
  cancel(
    @ActiveUser('userId') userId: number,
    @ActiveUser('roleId') roleId: number,
    @Param() param: GetOrderParamsDTO,
    @Body() _: CancelOrderBodyDTO,
  ) {
    return this.orderService.cancel(userId, roleId, param.orderId)
  }

  @Put('/status/:orderId')
  @ZodSerializerDto(CancelOrderResDTO)
  changeStatus(
    @ActiveUser('userId') userId: number,
    @ActiveUser('roleId') roleId: number,
    @Param() param: GetOrderParamsDTO,
    @Body() body: ChangeOrderStatusBodyDTO,
  ) {
    return this.orderService.changeStatus(userId, roleId, param.orderId, body)
  }
}
