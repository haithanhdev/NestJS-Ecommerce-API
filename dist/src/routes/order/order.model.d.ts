import { z } from 'zod';
export declare const GetOrderListResSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<Omit<z.objectUtil.extendShape<{
        id: z.ZodNumber;
        userId: z.ZodNumber;
        status: z.ZodEnum<["PENDING_PAYMENT", "PENDING_PICKUP", "PENDING_DELIVERY", "DELIVERED", "RETURNED", "CANCELLED"]>;
        receiver: z.ZodObject<{
            name: z.ZodString;
            phone: z.ZodString;
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            phone: string;
            address: string;
        }, {
            name: string;
            phone: string;
            address: string;
        }>;
        shopId: z.ZodNullable<z.ZodNumber>;
        paymentId: z.ZodNumber;
        createdById: z.ZodNullable<z.ZodNumber>;
        updatedById: z.ZodNullable<z.ZodNumber>;
        deletedById: z.ZodNullable<z.ZodNumber>;
        deletedAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, {
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            productId: z.ZodNullable<z.ZodNumber>;
            productName: z.ZodString;
            productTranslations: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                description: z.ZodString;
                languageId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
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
            skuPrice: z.ZodNumber;
            image: z.ZodString;
            skuValue: z.ZodString;
            skuId: z.ZodNullable<z.ZodNumber>;
            orderId: z.ZodNullable<z.ZodNumber>;
            quantity: z.ZodNumber;
            createdAt: z.ZodDate;
        }, "strip", z.ZodTypeAny, {
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
    }>, "createdById" | "updatedById" | "deletedById" | "deletedAt">, "strip", z.ZodTypeAny, {
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
    totalItems: z.ZodNumber;
    page: z.ZodNumber;
    limit: z.ZodNumber;
    totalPages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
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
}, {
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
export declare const GetOrderListQuerySchema: z.ZodObject<z.objectUtil.extendShape<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, {
    status: z.ZodOptional<z.ZodEnum<["PENDING_PAYMENT", "PENDING_PICKUP", "PENDING_DELIVERY", "DELIVERED", "RETURNED", "CANCELLED"]>>;
}>, "strip", z.ZodTypeAny, {
    limit: number;
    page: number;
    status?: "PENDING_PAYMENT" | "PENDING_PICKUP" | "PENDING_DELIVERY" | "DELIVERED" | "RETURNED" | "CANCELLED" | undefined;
}, {
    status?: "PENDING_PAYMENT" | "PENDING_PICKUP" | "PENDING_DELIVERY" | "DELIVERED" | "RETURNED" | "CANCELLED" | undefined;
    limit?: number | undefined;
    page?: number | undefined;
}>;
export declare const GetOrderDetailResSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNumber;
    userId: z.ZodNumber;
    status: z.ZodEnum<["PENDING_PAYMENT", "PENDING_PICKUP", "PENDING_DELIVERY", "DELIVERED", "RETURNED", "CANCELLED"]>;
    receiver: z.ZodObject<{
        name: z.ZodString;
        phone: z.ZodString;
        address: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        phone: string;
        address: string;
    }, {
        name: string;
        phone: string;
        address: string;
    }>;
    shopId: z.ZodNullable<z.ZodNumber>;
    paymentId: z.ZodNumber;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, {
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        productId: z.ZodNullable<z.ZodNumber>;
        productName: z.ZodString;
        productTranslations: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
            description: z.ZodString;
            languageId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
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
        skuPrice: z.ZodNumber;
        image: z.ZodString;
        skuValue: z.ZodString;
        skuId: z.ZodNullable<z.ZodNumber>;
        orderId: z.ZodNullable<z.ZodNumber>;
        quantity: z.ZodNumber;
        createdAt: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
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
}>, "strip", z.ZodTypeAny, {
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
export declare const CreateOrderBodySchema: z.ZodArray<z.ZodObject<{
    shopId: z.ZodNumber;
    receiver: z.ZodObject<{
        name: z.ZodString;
        phone: z.ZodString;
        address: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        phone: string;
        address: string;
    }, {
        name: string;
        phone: string;
        address: string;
    }>;
    cartItemIds: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
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
}>, "many">;
export declare const CreateOrderResSchema: z.ZodObject<{
    orders: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        userId: z.ZodNumber;
        status: z.ZodEnum<["PENDING_PAYMENT", "PENDING_PICKUP", "PENDING_DELIVERY", "DELIVERED", "RETURNED", "CANCELLED"]>;
        receiver: z.ZodObject<{
            name: z.ZodString;
            phone: z.ZodString;
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            phone: string;
            address: string;
        }, {
            name: string;
            phone: string;
            address: string;
        }>;
        shopId: z.ZodNullable<z.ZodNumber>;
        paymentId: z.ZodNumber;
        createdById: z.ZodNullable<z.ZodNumber>;
        updatedById: z.ZodNullable<z.ZodNumber>;
        deletedById: z.ZodNullable<z.ZodNumber>;
        deletedAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
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
    paymentId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
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
}, {
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
export declare const CancelOrderBodySchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const CancelOrderResSchema: z.ZodObject<{
    id: z.ZodNumber;
    userId: z.ZodNumber;
    status: z.ZodEnum<["PENDING_PAYMENT", "PENDING_PICKUP", "PENDING_DELIVERY", "DELIVERED", "RETURNED", "CANCELLED"]>;
    receiver: z.ZodObject<{
        name: z.ZodString;
        phone: z.ZodString;
        address: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        phone: string;
        address: string;
    }, {
        name: string;
        phone: string;
        address: string;
    }>;
    shopId: z.ZodNullable<z.ZodNumber>;
    paymentId: z.ZodNumber;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
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
}>;
export declare const GetOrderParamsSchema: z.ZodObject<{
    orderId: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    orderId: number;
}, {
    orderId: number;
}>;
export declare const ChangeOrderStatusBodySchema: z.ZodObject<{
    status: z.ZodEnum<["PENDING_PAYMENT", "PENDING_PICKUP", "PENDING_DELIVERY", "DELIVERED", "RETURNED", "CANCELLED"]>;
}, "strip", z.ZodTypeAny, {
    status: "PENDING_PAYMENT" | "PENDING_PICKUP" | "PENDING_DELIVERY" | "DELIVERED" | "RETURNED" | "CANCELLED";
}, {
    status: "PENDING_PAYMENT" | "PENDING_PICKUP" | "PENDING_DELIVERY" | "DELIVERED" | "RETURNED" | "CANCELLED";
}>;
export type ChangeOrderStatusBodyType = z.infer<typeof ChangeOrderStatusBodySchema>;
export type GetOrderListResType = z.infer<typeof GetOrderListResSchema>;
export type GetOrderListQueryType = z.infer<typeof GetOrderListQuerySchema>;
export type GetOrderDetailResType = z.infer<typeof GetOrderDetailResSchema>;
export type GetOrderParamsType = z.infer<typeof GetOrderParamsSchema>;
export type CreateOrderBodyType = z.infer<typeof CreateOrderBodySchema>;
export type CreateOrderResType = z.infer<typeof CreateOrderResSchema>;
export type CancelOrderResType = z.infer<typeof CancelOrderResSchema>;
