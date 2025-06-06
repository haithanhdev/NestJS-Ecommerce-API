import { z } from 'zod';
export declare const OrderStatusSchema: z.ZodEnum<["PENDING_PAYMENT", "PENDING_PICKUP", "PENDING_DELIVERY", "DELIVERED", "RETURNED", "CANCELLED"]>;
export declare const OrderSchema: z.ZodObject<{
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
export declare const ProductSKUSnapshotSchema: z.ZodObject<{
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
}>;
export declare const OrderIncludeProductSKUSnapshotSchema: z.ZodObject<z.objectUtil.extendShape<{
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
export type OrderType = z.infer<typeof OrderSchema>;
export type OrderIncludeProductSKUSnapshotType = z.infer<typeof OrderIncludeProductSKUSnapshotSchema>;
