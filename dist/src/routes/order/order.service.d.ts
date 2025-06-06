import { ChangeOrderStatusBodyType, CreateOrderBodyType, GetOrderListQueryType } from 'src/routes/order/order.model';
import { OrderRepo } from 'src/routes/order/order.repo';
export declare class OrderService {
    private readonly orderRepo;
    constructor(orderRepo: OrderRepo);
    list(userId: number, query: GetOrderListQueryType): Promise<{
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
    listOrders(userId: number, roleId: number, query: GetOrderListQueryType): Promise<{
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
    create(userId: number, body: CreateOrderBodyType): Promise<{
        paymentId: number;
        orders: import("src/routes/order/order.model").CreateOrderResType["orders"];
    }>;
    cancel(userId: number, roleId: number, orderId: number): Promise<{
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
    changeStatus(userId: number, roleId: number, orderId: number, body: ChangeOrderStatusBodyType): Promise<{
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
    detail(userId: number, roleId: number, orderId: number): Promise<{
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
}
