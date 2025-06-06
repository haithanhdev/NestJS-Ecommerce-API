declare const GetOrderListResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<{
    data: import("zod").ZodArray<import("zod").ZodObject<Omit<import("zod").objectUtil.extendShape<{
        id: import("zod").ZodNumber;
        userId: import("zod").ZodNumber;
        status: import("zod").ZodEnum<["PENDING_PAYMENT", "PENDING_PICKUP", "PENDING_DELIVERY", "DELIVERED", "RETURNED", "CANCELLED"]>;
        receiver: import("zod").ZodObject<{
            name: import("zod").ZodString;
            phone: import("zod").ZodString;
            address: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            phone: string;
            address: string;
        }, {
            name: string;
            phone: string;
            address: string;
        }>;
        shopId: import("zod").ZodNullable<import("zod").ZodNumber>;
        paymentId: import("zod").ZodNumber;
        createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
        updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, {
        items: import("zod").ZodArray<import("zod").ZodObject<{
            id: import("zod").ZodNumber;
            productId: import("zod").ZodNullable<import("zod").ZodNumber>;
            productName: import("zod").ZodString;
            productTranslations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodNumber;
                name: import("zod").ZodString;
                description: import("zod").ZodString;
                languageId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
                name: string;
                description: string;
                languageId: string;
            }, {
                id: number;
                name: string;
                description: string;
                languageId: string;
            }>, "many">;
            skuPrice: import("zod").ZodNumber;
            image: import("zod").ZodString;
            skuValue: import("zod").ZodString;
            skuId: import("zod").ZodNullable<import("zod").ZodNumber>;
            orderId: import("zod").ZodNullable<import("zod").ZodNumber>;
            quantity: import("zod").ZodNumber;
            createdAt: import("zod").ZodDate;
        }, "strip", import("zod").ZodTypeAny, {
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
        }, {
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
        }>, "many">;
    }>, "createdById" | "updatedById" | "deletedById" | "deletedAt">, "strip", import("zod").ZodTypeAny, {
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
    }, {
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
    }>, "many">;
    totalItems: import("zod").ZodNumber;
    page: import("zod").ZodNumber;
    limit: import("zod").ZodNumber;
    totalPages: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny>, {
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
export declare class GetOrderListResDTO extends GetOrderListResDTO_base {
}
declare const GetOrderListQueryDTO_base: import("nestjs-zod").ZodDto<{
    limit: number;
    page: number;
    status?: "PENDING_PAYMENT" | "PENDING_PICKUP" | "PENDING_DELIVERY" | "DELIVERED" | "RETURNED" | "CANCELLED" | undefined;
}, import("zod").ZodObjectDef<import("zod").objectUtil.extendShape<{
    page: import("zod").ZodDefault<import("zod").ZodNumber>;
    limit: import("zod").ZodDefault<import("zod").ZodNumber>;
}, {
    status: import("zod").ZodOptional<import("zod").ZodEnum<["PENDING_PAYMENT", "PENDING_PICKUP", "PENDING_DELIVERY", "DELIVERED", "RETURNED", "CANCELLED"]>>;
}>, "strip", import("zod").ZodTypeAny>, {
    status?: "PENDING_PAYMENT" | "PENDING_PICKUP" | "PENDING_DELIVERY" | "DELIVERED" | "RETURNED" | "CANCELLED" | undefined;
    limit?: number | undefined;
    page?: number | undefined;
}>;
export declare class GetOrderListQueryDTO extends GetOrderListQueryDTO_base {
}
declare const GetOrderDetailResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<import("zod").objectUtil.extendShape<{
    id: import("zod").ZodNumber;
    userId: import("zod").ZodNumber;
    status: import("zod").ZodEnum<["PENDING_PAYMENT", "PENDING_PICKUP", "PENDING_DELIVERY", "DELIVERED", "RETURNED", "CANCELLED"]>;
    receiver: import("zod").ZodObject<{
        name: import("zod").ZodString;
        phone: import("zod").ZodString;
        address: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        name: string;
        phone: string;
        address: string;
    }, {
        name: string;
        phone: string;
        address: string;
    }>;
    shopId: import("zod").ZodNullable<import("zod").ZodNumber>;
    paymentId: import("zod").ZodNumber;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, {
    items: import("zod").ZodArray<import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        productId: import("zod").ZodNullable<import("zod").ZodNumber>;
        productName: import("zod").ZodString;
        productTranslations: import("zod").ZodArray<import("zod").ZodObject<{
            id: import("zod").ZodNumber;
            name: import("zod").ZodString;
            description: import("zod").ZodString;
            languageId: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            id: number;
            name: string;
            description: string;
            languageId: string;
        }, {
            id: number;
            name: string;
            description: string;
            languageId: string;
        }>, "many">;
        skuPrice: import("zod").ZodNumber;
        image: import("zod").ZodString;
        skuValue: import("zod").ZodString;
        skuId: import("zod").ZodNullable<import("zod").ZodNumber>;
        orderId: import("zod").ZodNullable<import("zod").ZodNumber>;
        quantity: import("zod").ZodNumber;
        createdAt: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
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
    }, {
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
    }>, "many">;
}>, "strip", import("zod").ZodTypeAny>, {
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
export declare class GetOrderDetailResDTO extends GetOrderDetailResDTO_base {
}
declare const CreateOrderBodyDTO_base: import("nestjs-zod").ZodDto<{
    receiver: {
        name: string;
        phone: string;
        address: string;
    };
    shopId: number;
    cartItemIds: number[];
}[], import("zod").ZodArrayDef<import("zod").ZodObject<{
    shopId: import("zod").ZodNumber;
    receiver: import("zod").ZodObject<{
        name: import("zod").ZodString;
        phone: import("zod").ZodString;
        address: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        name: string;
        phone: string;
        address: string;
    }, {
        name: string;
        phone: string;
        address: string;
    }>;
    cartItemIds: import("zod").ZodArray<import("zod").ZodNumber, "many">;
}, "strip", import("zod").ZodTypeAny, {
    receiver: {
        name: string;
        phone: string;
        address: string;
    };
    shopId: number;
    cartItemIds: number[];
}, {
    receiver: {
        name: string;
        phone: string;
        address: string;
    };
    shopId: number;
    cartItemIds: number[];
}>>, {
    receiver: {
        name: string;
        phone: string;
        address: string;
    };
    shopId: number;
    cartItemIds: number[];
}[]>;
export declare class CreateOrderBodyDTO extends CreateOrderBodyDTO_base {
}
declare const CreateOrderResDTO_base: import("nestjs-zod").ZodDto<{
    orders: {
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
    }[];
    paymentId: number;
}, import("zod").ZodObjectDef<{
    orders: import("zod").ZodArray<import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        userId: import("zod").ZodNumber;
        status: import("zod").ZodEnum<["PENDING_PAYMENT", "PENDING_PICKUP", "PENDING_DELIVERY", "DELIVERED", "RETURNED", "CANCELLED"]>;
        receiver: import("zod").ZodObject<{
            name: import("zod").ZodString;
            phone: import("zod").ZodString;
            address: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            phone: string;
            address: string;
        }, {
            name: string;
            phone: string;
            address: string;
        }>;
        shopId: import("zod").ZodNullable<import("zod").ZodNumber>;
        paymentId: import("zod").ZodNumber;
        createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
        updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
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
    }, {
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
    }>, "many">;
    paymentId: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny>, {
    orders: {
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
    }[];
    paymentId: number;
}>;
export declare class CreateOrderResDTO extends CreateOrderResDTO_base {
}
declare const CancelOrderBodyDTO_base: import("nestjs-zod").ZodDto<{}, import("zod").ZodObjectDef<{}, "strip", import("zod").ZodTypeAny>, {}>;
export declare class CancelOrderBodyDTO extends CancelOrderBodyDTO_base {
}
declare const CancelOrderResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<{
    id: import("zod").ZodNumber;
    userId: import("zod").ZodNumber;
    status: import("zod").ZodEnum<["PENDING_PAYMENT", "PENDING_PICKUP", "PENDING_DELIVERY", "DELIVERED", "RETURNED", "CANCELLED"]>;
    receiver: import("zod").ZodObject<{
        name: import("zod").ZodString;
        phone: import("zod").ZodString;
        address: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        name: string;
        phone: string;
        address: string;
    }, {
        name: string;
        phone: string;
        address: string;
    }>;
    shopId: import("zod").ZodNullable<import("zod").ZodNumber>;
    paymentId: import("zod").ZodNumber;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "strip", import("zod").ZodTypeAny>, {
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
export declare class CancelOrderResDTO extends CancelOrderResDTO_base {
}
declare const GetOrderParamsDTO_base: import("nestjs-zod").ZodDto<{
    orderId: number;
}, import("zod").ZodObjectDef<{
    orderId: import("zod").ZodNumber;
}, "strict", import("zod").ZodTypeAny>, {
    orderId: number;
}>;
export declare class GetOrderParamsDTO extends GetOrderParamsDTO_base {
}
declare const ChangeOrderStatusBodyDTO_base: import("nestjs-zod").ZodDto<{
    status: "PENDING_PAYMENT" | "PENDING_PICKUP" | "PENDING_DELIVERY" | "DELIVERED" | "RETURNED" | "CANCELLED";
}, import("zod").ZodObjectDef<{
    status: import("zod").ZodEnum<["PENDING_PAYMENT", "PENDING_PICKUP", "PENDING_DELIVERY", "DELIVERED", "RETURNED", "CANCELLED"]>;
}, "strip", import("zod").ZodTypeAny>, {
    status: "PENDING_PAYMENT" | "PENDING_PICKUP" | "PENDING_DELIVERY" | "DELIVERED" | "RETURNED" | "CANCELLED";
}>;
export declare class ChangeOrderStatusBodyDTO extends ChangeOrderStatusBodyDTO_base {
}
export {};
