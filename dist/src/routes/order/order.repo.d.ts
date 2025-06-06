import { CancelOrderResType, ChangeOrderStatusBodyType, CreateOrderBodyType, CreateOrderResType, GetOrderDetailResType, GetOrderListQueryType, GetOrderListResType } from 'src/routes/order/order.model';
import { OrderProducer } from 'src/routes/order/order.producer';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class OrderRepo {
    private readonly prismaService;
    private readonly orderProducer;
    constructor(prismaService: PrismaService, orderProducer: OrderProducer);
    list(userId: number, query: GetOrderListQueryType): Promise<GetOrderListResType>;
    listOrders(userId: number, roleId: number, query: GetOrderListQueryType): Promise<GetOrderListResType>;
    create(userId: number, body: CreateOrderBodyType): Promise<{
        paymentId: number;
        orders: CreateOrderResType['orders'];
    }>;
    detail(userId: number, roleId: number, orderid: number): Promise<GetOrderDetailResType>;
    cancel(userId: number, roleId: number, orderId: number): Promise<CancelOrderResType>;
    changeStatus(userId: number, roleId: number, orderId: number, body: ChangeOrderStatusBodyType): Promise<CancelOrderResType>;
}
