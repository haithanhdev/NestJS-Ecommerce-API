export declare const OrderStatus: {
    readonly PENDING_PAYMENT: "PENDING_PAYMENT";
    readonly PENDING_PICKUP: "PENDING_PICKUP";
    readonly PENDING_DELIVERY: "PENDING_DELIVERY";
    readonly DELIVERED: "DELIVERED";
    readonly RETURNED: "RETURNED";
    readonly CANCELLED: "CANCELLED";
};
export type OrderStatusType = (typeof OrderStatus)[keyof typeof OrderStatus];
