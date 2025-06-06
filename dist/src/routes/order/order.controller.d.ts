import { CancelOrderBodyDTO, ChangeOrderStatusBodyDTO, CreateOrderBodyDTO, GetOrderListQueryDTO, GetOrderParamsDTO } from 'src/routes/order/order.dto';
import { OrderService } from 'src/routes/order/order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getCart(userId: number, query: GetOrderListQueryDTO): Promise<{
        data: {
            status: "PENDING_PAYMENT" | "PENDING_PICKUP" | "PENDING_DELIVERY" | "DELIVERED" | "RETURNED" | "CANCELLED";
            userId: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            items: {
                id: number;
                createdAt: Date;
                productName: string;
                skuPrice: number;
                image: string;
                skuValue: string;
                skuId: number | null;
                orderId: number | null;
                quantity: number;
                productId: number | null;
                productTranslations: {
                    id: number;
                    name: string;
                    description: string;
                    languageId: string;
                }[];
            }[];
            receiver: {
                name: string;
                phone: string;
                address: string;
            };
            shopId: number | null;
            paymentId: number;
        }[];
        limit: number;
        page: number;
        totalItems: number;
        totalPages: number;
    }>;
    getOrders(userId: number, roleId: number, query: GetOrderListQueryDTO): Promise<{
        data: {
            status: "PENDING_PAYMENT" | "PENDING_PICKUP" | "PENDING_DELIVERY" | "DELIVERED" | "RETURNED" | "CANCELLED";
            userId: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            items: {
                id: number;
                createdAt: Date;
                productName: string;
                skuPrice: number;
                image: string;
                skuValue: string;
                skuId: number | null;
                orderId: number | null;
                quantity: number;
                productId: number | null;
                productTranslations: {
                    id: number;
                    name: string;
                    description: string;
                    languageId: string;
                }[];
            }[];
            receiver: {
                name: string;
                phone: string;
                address: string;
            };
            shopId: number | null;
            paymentId: number;
        }[];
        limit: number;
        page: number;
        totalItems: number;
        totalPages: number;
    }>;
    create(userId: number, body: CreateOrderBodyDTO): Promise<{
        paymentId: number;
        orders: import("./order.model").CreateOrderResType["orders"];
    }>;
    detail(userId: number, roleId: number, param: GetOrderParamsDTO): Promise<{
        status: "PENDING_PAYMENT" | "PENDING_PICKUP" | "PENDING_DELIVERY" | "DELIVERED" | "RETURNED" | "CANCELLED";
        userId: number;
        id: number;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        items: {
            id: number;
            createdAt: Date;
            productName: string;
            skuPrice: number;
            image: string;
            skuValue: string;
            skuId: number | null;
            orderId: number | null;
            quantity: number;
            productId: number | null;
            productTranslations: {
                id: number;
                name: string;
                description: string;
                languageId: string;
            }[];
        }[];
        receiver: {
            name: string;
            phone: string;
            address: string;
        };
        shopId: number | null;
        paymentId: number;
    }>;
    detailOrder(userId: number, roleId: number, param: GetOrderParamsDTO): Promise<{
        status: "PENDING_PAYMENT" | "PENDING_PICKUP" | "PENDING_DELIVERY" | "DELIVERED" | "RETURNED" | "CANCELLED";
        userId: number;
        id: number;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        items: {
            id: number;
            createdAt: Date;
            productName: string;
            skuPrice: number;
            image: string;
            skuValue: string;
            skuId: number | null;
            orderId: number | null;
            quantity: number;
            productId: number | null;
            productTranslations: {
                id: number;
                name: string;
                description: string;
                languageId: string;
            }[];
        }[];
        receiver: {
            name: string;
            phone: string;
            address: string;
        };
        shopId: number | null;
        paymentId: number;
    }>;
    cancel(userId: number, roleId: number, param: GetOrderParamsDTO, _: CancelOrderBodyDTO): Promise<{
        status: "PENDING_PAYMENT" | "PENDING_PICKUP" | "PENDING_DELIVERY" | "DELIVERED" | "RETURNED" | "CANCELLED";
        userId: number;
        id: number;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        receiver: {
            name: string;
            phone: string;
            address: string;
        };
        shopId: number | null;
        paymentId: number;
    }>;
    changeStatus(userId: number, roleId: number, param: GetOrderParamsDTO, body: ChangeOrderStatusBodyDTO): Promise<{
        status: "PENDING_PAYMENT" | "PENDING_PICKUP" | "PENDING_DELIVERY" | "DELIVERED" | "RETURNED" | "CANCELLED";
        userId: number;
        id: number;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        receiver: {
            name: string;
            phone: string;
            address: string;
        };
        shopId: number | null;
        paymentId: number;
    }>;
}
