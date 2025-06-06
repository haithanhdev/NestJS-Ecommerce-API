import { z } from 'zod';
export declare const GetProductsQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
    name: z.ZodOptional<z.ZodString>;
    brandIds: z.ZodEffects<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>, number[] | undefined, unknown>;
    categories: z.ZodEffects<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>, number[] | undefined, unknown>;
    minPrice: z.ZodOptional<z.ZodNumber>;
    maxPrice: z.ZodOptional<z.ZodNumber>;
    createdById: z.ZodOptional<z.ZodNumber>;
    orderBy: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
    sortBy: z.ZodDefault<z.ZodEnum<["sale", "price", "createdAt"]>>;
}, "strip", z.ZodTypeAny, {
    orderBy: "asc" | "desc";
    limit: number;
    page: number;
    sortBy: "createdAt" | "price" | "sale";
    name?: string | undefined;
    createdById?: number | undefined;
    categories?: number[] | undefined;
    brandIds?: number[] | undefined;
    minPrice?: number | undefined;
    maxPrice?: number | undefined;
}, {
    name?: string | undefined;
    createdById?: number | undefined;
    orderBy?: "asc" | "desc" | undefined;
    limit?: number | undefined;
    page?: number | undefined;
    categories?: unknown;
    brandIds?: unknown;
    minPrice?: number | undefined;
    maxPrice?: number | undefined;
    sortBy?: "createdAt" | "price" | "sale" | undefined;
}>;
export declare const GetManageProductsQuerySchema: z.ZodObject<z.objectUtil.extendShape<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
    name: z.ZodOptional<z.ZodString>;
    brandIds: z.ZodEffects<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>, number[] | undefined, unknown>;
    categories: z.ZodEffects<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>, number[] | undefined, unknown>;
    minPrice: z.ZodOptional<z.ZodNumber>;
    maxPrice: z.ZodOptional<z.ZodNumber>;
    createdById: z.ZodOptional<z.ZodNumber>;
    orderBy: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
    sortBy: z.ZodDefault<z.ZodEnum<["sale", "price", "createdAt"]>>;
}, {
    isPublic: z.ZodOptional<z.ZodEffects<z.ZodBoolean, boolean, unknown>>;
    createdById: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    createdById: number;
    orderBy: "asc" | "desc";
    limit: number;
    page: number;
    sortBy: "createdAt" | "price" | "sale";
    name?: string | undefined;
    categories?: number[] | undefined;
    brandIds?: number[] | undefined;
    minPrice?: number | undefined;
    maxPrice?: number | undefined;
    isPublic?: boolean | undefined;
}, {
    createdById: number;
    name?: string | undefined;
    orderBy?: "asc" | "desc" | undefined;
    limit?: number | undefined;
    page?: number | undefined;
    categories?: unknown;
    brandIds?: unknown;
    minPrice?: number | undefined;
    maxPrice?: number | undefined;
    sortBy?: "createdAt" | "price" | "sale" | undefined;
    isPublic?: unknown;
}>;
export declare const GetProductsResSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodNumber;
        publishedAt: z.ZodNullable<z.ZodDate>;
        name: z.ZodString;
        basePrice: z.ZodNumber;
        virtualPrice: z.ZodNumber;
        brandId: z.ZodNumber;
        images: z.ZodArray<z.ZodString, "many">;
        variants: z.ZodEffects<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            options: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            value: string;
            options: string[];
        }, {
            value: string;
            options: string[];
        }>, "many">, {
            value: string;
            options: string[];
        }[], {
            value: string;
            options: string[];
        }[]>;
        createdById: z.ZodNullable<z.ZodNumber>;
        updatedById: z.ZodNullable<z.ZodNumber>;
        deletedById: z.ZodNullable<z.ZodNumber>;
        deletedAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, {
        productTranslations: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            productId: z.ZodNumber;
            name: z.ZodString;
            description: z.ZodString;
            languageId: z.ZodString;
            createdById: z.ZodNullable<z.ZodNumber>;
            updatedById: z.ZodNullable<z.ZodNumber>;
            deletedById: z.ZodNullable<z.ZodNumber>;
            deletedAt: z.ZodNullable<z.ZodDate>;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            productId: number;
            languageId: string;
        }, {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            productId: number;
            languageId: string;
        }>, "many">;
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
        productSKUSnapshots: z.ZodArray<z.ZodObject<Pick<{
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
        }, "id" | "quantity" | "productId">, "strip", z.ZodTypeAny, {
            id: number;
            quantity: number;
            productId: number | null;
        }, {
            id: number;
            quantity: number;
            productId: number | null;
        }>, "many">;
        brand: z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodNumber;
            name: z.ZodString;
            logo: z.ZodString;
            createdById: z.ZodNullable<z.ZodNumber>;
            updatedById: z.ZodNullable<z.ZodNumber>;
            deletedById: z.ZodNullable<z.ZodNumber>;
            deletedAt: z.ZodNullable<z.ZodDate>;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
        }, {
            brandTranslations: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                brandId: z.ZodNumber;
                languageId: z.ZodString;
                name: z.ZodString;
                description: z.ZodString;
                createdById: z.ZodNullable<z.ZodNumber>;
                updatedById: z.ZodNullable<z.ZodNumber>;
                deletedById: z.ZodNullable<z.ZodNumber>;
                deletedAt: z.ZodNullable<z.ZodDate>;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                brandId: number;
            }, {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                brandId: number;
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            brandTranslations: {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                brandId: number;
            }[];
            logo: string;
        }, {
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            brandTranslations: {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                brandId: number;
            }[];
            logo: string;
        }>;
        skus: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            value: z.ZodString;
            price: z.ZodNumber;
            stock: z.ZodNumber;
            image: z.ZodString;
            productId: z.ZodNumber;
            createdById: z.ZodNumber;
            updatedById: z.ZodNullable<z.ZodNumber>;
            deletedById: z.ZodNullable<z.ZodNumber>;
            deletedAt: z.ZodNullable<z.ZodDate>;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
        }, "strip", z.ZodTypeAny, {
            value: string;
            id: number;
            createdById: number;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            image: string;
            productId: number;
            price: number;
            stock: number;
        }, {
            value: string;
            id: number;
            createdById: number;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            image: string;
            productId: number;
            price: number;
            stock: number;
        }>, "many">;
        categories: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodNumber;
            parentCategoryId: z.ZodNullable<z.ZodNumber>;
            name: z.ZodString;
            logo: z.ZodNullable<z.ZodString>;
            createdById: z.ZodNullable<z.ZodNumber>;
            updatedById: z.ZodNullable<z.ZodNumber>;
            deletedById: z.ZodNullable<z.ZodNumber>;
            deletedAt: z.ZodNullable<z.ZodDate>;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
        }, {
            categoryTranslations: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                categoryId: z.ZodNumber;
                languageId: z.ZodString;
                name: z.ZodString;
                description: z.ZodString;
                createdById: z.ZodNullable<z.ZodNumber>;
                updatedById: z.ZodNullable<z.ZodNumber>;
                deletedById: z.ZodNullable<z.ZodNumber>;
                deletedAt: z.ZodNullable<z.ZodDate>;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                categoryId: number;
            }, {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                categoryId: number;
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            categoryTranslations: {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                categoryId: number;
            }[];
            logo: string | null;
            parentCategoryId: number | null;
        }, {
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            categoryTranslations: {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                categoryId: number;
            }[];
            logo: string | null;
            parentCategoryId: number | null;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        brand: {
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            brandTranslations: {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                brandId: number;
            }[];
            logo: string;
        };
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
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
        productTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            productId: number;
            languageId: string;
        }[];
        productSKUSnapshots: {
            id: number;
            quantity: number;
            productId: number | null;
        }[];
        brandId: number;
        categories: {
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            categoryTranslations: {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                categoryId: number;
            }[];
            logo: string | null;
            parentCategoryId: number | null;
        }[];
        variants: {
            value: string;
            options: string[];
        }[];
        publishedAt: Date | null;
        basePrice: number;
        virtualPrice: number;
        images: string[];
        skus: {
            value: string;
            id: number;
            createdById: number;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            image: string;
            productId: number;
            price: number;
            stock: number;
        }[];
    }, {
        brand: {
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            brandTranslations: {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                brandId: number;
            }[];
            logo: string;
        };
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
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
        productTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            productId: number;
            languageId: string;
        }[];
        productSKUSnapshots: {
            id: number;
            quantity: number;
            productId: number | null;
        }[];
        brandId: number;
        categories: {
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            categoryTranslations: {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                categoryId: number;
            }[];
            logo: string | null;
            parentCategoryId: number | null;
        }[];
        variants: {
            value: string;
            options: string[];
        }[];
        publishedAt: Date | null;
        basePrice: number;
        virtualPrice: number;
        images: string[];
        skus: {
            value: string;
            id: number;
            createdById: number;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            image: string;
            productId: number;
            price: number;
            stock: number;
        }[];
    }>, "many">;
    totalItems: z.ZodNumber;
    page: z.ZodNumber;
    limit: z.ZodNumber;
    totalPages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    data: {
        brand: {
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            brandTranslations: {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                brandId: number;
            }[];
            logo: string;
        };
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
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
        productTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            productId: number;
            languageId: string;
        }[];
        productSKUSnapshots: {
            id: number;
            quantity: number;
            productId: number | null;
        }[];
        brandId: number;
        categories: {
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            categoryTranslations: {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                categoryId: number;
            }[];
            logo: string | null;
            parentCategoryId: number | null;
        }[];
        variants: {
            value: string;
            options: string[];
        }[];
        publishedAt: Date | null;
        basePrice: number;
        virtualPrice: number;
        images: string[];
        skus: {
            value: string;
            id: number;
            createdById: number;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            image: string;
            productId: number;
            price: number;
            stock: number;
        }[];
    }[];
    limit: number;
    page: number;
    totalItems: number;
    totalPages: number;
}, {
    data: {
        brand: {
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            brandTranslations: {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                brandId: number;
            }[];
            logo: string;
        };
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
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
        productTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            productId: number;
            languageId: string;
        }[];
        productSKUSnapshots: {
            id: number;
            quantity: number;
            productId: number | null;
        }[];
        brandId: number;
        categories: {
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            categoryTranslations: {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                categoryId: number;
            }[];
            logo: string | null;
            parentCategoryId: number | null;
        }[];
        variants: {
            value: string;
            options: string[];
        }[];
        publishedAt: Date | null;
        basePrice: number;
        virtualPrice: number;
        images: string[];
        skus: {
            value: string;
            id: number;
            createdById: number;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            image: string;
            productId: number;
            price: number;
            stock: number;
        }[];
    }[];
    limit: number;
    page: number;
    totalItems: number;
    totalPages: number;
}>;
export declare const GetProductParamsSchema: z.ZodObject<{
    productId: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    productId: number;
}, {
    productId: number;
}>;
export declare const GetProductDetailResSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNumber;
    publishedAt: z.ZodNullable<z.ZodDate>;
    name: z.ZodString;
    basePrice: z.ZodNumber;
    virtualPrice: z.ZodNumber;
    brandId: z.ZodNumber;
    images: z.ZodArray<z.ZodString, "many">;
    variants: z.ZodEffects<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        options: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        value: string;
        options: string[];
    }, {
        value: string;
        options: string[];
    }>, "many">, {
        value: string;
        options: string[];
    }[], {
        value: string;
        options: string[];
    }[]>;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, {
    productTranslations: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        productId: z.ZodNumber;
        name: z.ZodString;
        description: z.ZodString;
        languageId: z.ZodString;
        createdById: z.ZodNullable<z.ZodNumber>;
        updatedById: z.ZodNullable<z.ZodNumber>;
        deletedById: z.ZodNullable<z.ZodNumber>;
        deletedAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        description: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        productId: number;
        languageId: string;
    }, {
        id: number;
        name: string;
        description: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        productId: number;
        languageId: string;
    }>, "many">;
    skus: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        value: z.ZodString;
        price: z.ZodNumber;
        stock: z.ZodNumber;
        image: z.ZodString;
        productId: z.ZodNumber;
        createdById: z.ZodNumber;
        updatedById: z.ZodNullable<z.ZodNumber>;
        deletedById: z.ZodNullable<z.ZodNumber>;
        deletedAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        value: string;
        id: number;
        createdById: number;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        image: string;
        productId: number;
        price: number;
        stock: number;
    }, {
        value: string;
        id: number;
        createdById: number;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        image: string;
        productId: number;
        price: number;
        stock: number;
    }>, "many">;
    categories: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodNumber;
        parentCategoryId: z.ZodNullable<z.ZodNumber>;
        name: z.ZodString;
        logo: z.ZodNullable<z.ZodString>;
        createdById: z.ZodNullable<z.ZodNumber>;
        updatedById: z.ZodNullable<z.ZodNumber>;
        deletedById: z.ZodNullable<z.ZodNumber>;
        deletedAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, {
        categoryTranslations: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            categoryId: z.ZodNumber;
            languageId: z.ZodString;
            name: z.ZodString;
            description: z.ZodString;
            createdById: z.ZodNullable<z.ZodNumber>;
            updatedById: z.ZodNullable<z.ZodNumber>;
            deletedById: z.ZodNullable<z.ZodNumber>;
            deletedAt: z.ZodNullable<z.ZodDate>;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            languageId: string;
            categoryId: number;
        }, {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            languageId: string;
            categoryId: number;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        categoryTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            languageId: string;
            categoryId: number;
        }[];
        logo: string | null;
        parentCategoryId: number | null;
    }, {
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        categoryTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            languageId: string;
            categoryId: number;
        }[];
        logo: string | null;
        parentCategoryId: number | null;
    }>, "many">;
    brand: z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodNumber;
        name: z.ZodString;
        logo: z.ZodString;
        createdById: z.ZodNullable<z.ZodNumber>;
        updatedById: z.ZodNullable<z.ZodNumber>;
        deletedById: z.ZodNullable<z.ZodNumber>;
        deletedAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, {
        brandTranslations: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            brandId: z.ZodNumber;
            languageId: z.ZodString;
            name: z.ZodString;
            description: z.ZodString;
            createdById: z.ZodNullable<z.ZodNumber>;
            updatedById: z.ZodNullable<z.ZodNumber>;
            deletedById: z.ZodNullable<z.ZodNumber>;
            deletedAt: z.ZodNullable<z.ZodDate>;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            languageId: string;
            brandId: number;
        }, {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            languageId: string;
            brandId: number;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        brandTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            languageId: string;
            brandId: number;
        }[];
        logo: string;
    }, {
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        brandTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            languageId: string;
            brandId: number;
        }[];
        logo: string;
    }>;
    productSKUSnapshots: z.ZodOptional<z.ZodArray<z.ZodObject<Pick<{
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
    }, "id" | "quantity" | "productId">, "strip", z.ZodTypeAny, {
        id: number;
        quantity: number;
        productId: number | null;
    }, {
        id: number;
        quantity: number;
        productId: number | null;
    }>, "many">>;
}>, "strip", z.ZodTypeAny, {
    brand: {
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        brandTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            languageId: string;
            brandId: number;
        }[];
        logo: string;
    };
    id: number;
    name: string;
    createdById: number | null;
    updatedById: number | null;
    deletedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    productTranslations: {
        id: number;
        name: string;
        description: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        productId: number;
        languageId: string;
    }[];
    brandId: number;
    categories: {
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        categoryTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            languageId: string;
            categoryId: number;
        }[];
        logo: string | null;
        parentCategoryId: number | null;
    }[];
    variants: {
        value: string;
        options: string[];
    }[];
    publishedAt: Date | null;
    basePrice: number;
    virtualPrice: number;
    images: string[];
    skus: {
        value: string;
        id: number;
        createdById: number;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        image: string;
        productId: number;
        price: number;
        stock: number;
    }[];
    productSKUSnapshots?: {
        id: number;
        quantity: number;
        productId: number | null;
    }[] | undefined;
}, {
    brand: {
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        brandTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            languageId: string;
            brandId: number;
        }[];
        logo: string;
    };
    id: number;
    name: string;
    createdById: number | null;
    updatedById: number | null;
    deletedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    productTranslations: {
        id: number;
        name: string;
        description: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        productId: number;
        languageId: string;
    }[];
    brandId: number;
    categories: {
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        categoryTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            languageId: string;
            categoryId: number;
        }[];
        logo: string | null;
        parentCategoryId: number | null;
    }[];
    variants: {
        value: string;
        options: string[];
    }[];
    publishedAt: Date | null;
    basePrice: number;
    virtualPrice: number;
    images: string[];
    skus: {
        value: string;
        id: number;
        createdById: number;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        image: string;
        productId: number;
        price: number;
        stock: number;
    }[];
    productSKUSnapshots?: {
        id: number;
        quantity: number;
        productId: number | null;
    }[] | undefined;
}>;
export declare const CreateProductBodySchema: z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<Pick<{
    id: z.ZodNumber;
    publishedAt: z.ZodNullable<z.ZodDate>;
    name: z.ZodString;
    basePrice: z.ZodNumber;
    virtualPrice: z.ZodNumber;
    brandId: z.ZodNumber;
    images: z.ZodArray<z.ZodString, "many">;
    variants: z.ZodEffects<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        options: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        value: string;
        options: string[];
    }, {
        value: string;
        options: string[];
    }>, "many">, {
        value: string;
        options: string[];
    }[], {
        value: string;
        options: string[];
    }[]>;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "name" | "brandId" | "variants" | "publishedAt" | "basePrice" | "virtualPrice" | "images">, {
    categories: z.ZodArray<z.ZodNumber, "many">;
    skus: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<Pick<{
        id: z.ZodNumber;
        value: z.ZodString;
        price: z.ZodNumber;
        stock: z.ZodNumber;
        image: z.ZodString;
        productId: z.ZodNumber;
        createdById: z.ZodNumber;
        updatedById: z.ZodNullable<z.ZodNumber>;
        deletedById: z.ZodNullable<z.ZodNumber>;
        deletedAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, "value" | "image" | "price" | "stock">, {
        id: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        value: string;
        image: string;
        price: number;
        stock: number;
        id?: number | undefined;
    }, {
        value: string;
        image: string;
        price: number;
        stock: number;
        id?: number | undefined;
    }>, "many">;
}>, "strict", z.ZodTypeAny, {
    name: string;
    brandId: number;
    categories: number[];
    variants: {
        value: string;
        options: string[];
    }[];
    publishedAt: Date | null;
    basePrice: number;
    virtualPrice: number;
    images: string[];
    skus: {
        value: string;
        image: string;
        price: number;
        stock: number;
        id?: number | undefined;
    }[];
}, {
    name: string;
    brandId: number;
    categories: number[];
    variants: {
        value: string;
        options: string[];
    }[];
    publishedAt: Date | null;
    basePrice: number;
    virtualPrice: number;
    images: string[];
    skus: {
        value: string;
        image: string;
        price: number;
        stock: number;
        id?: number | undefined;
    }[];
}>, {
    name: string;
    brandId: number;
    categories: number[];
    variants: {
        value: string;
        options: string[];
    }[];
    publishedAt: Date | null;
    basePrice: number;
    virtualPrice: number;
    images: string[];
    skus: {
        value: string;
        image: string;
        price: number;
        stock: number;
        id?: number | undefined;
    }[];
}, {
    name: string;
    brandId: number;
    categories: number[];
    variants: {
        value: string;
        options: string[];
    }[];
    publishedAt: Date | null;
    basePrice: number;
    virtualPrice: number;
    images: string[];
    skus: {
        value: string;
        image: string;
        price: number;
        stock: number;
        id?: number | undefined;
    }[];
}>;
export declare const UpdateProductBodySchema: z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<Pick<{
    id: z.ZodNumber;
    publishedAt: z.ZodNullable<z.ZodDate>;
    name: z.ZodString;
    basePrice: z.ZodNumber;
    virtualPrice: z.ZodNumber;
    brandId: z.ZodNumber;
    images: z.ZodArray<z.ZodString, "many">;
    variants: z.ZodEffects<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        options: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        value: string;
        options: string[];
    }, {
        value: string;
        options: string[];
    }>, "many">, {
        value: string;
        options: string[];
    }[], {
        value: string;
        options: string[];
    }[]>;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "name" | "brandId" | "variants" | "publishedAt" | "basePrice" | "virtualPrice" | "images">, {
    categories: z.ZodArray<z.ZodNumber, "many">;
    skus: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<Pick<{
        id: z.ZodNumber;
        value: z.ZodString;
        price: z.ZodNumber;
        stock: z.ZodNumber;
        image: z.ZodString;
        productId: z.ZodNumber;
        createdById: z.ZodNumber;
        updatedById: z.ZodNullable<z.ZodNumber>;
        deletedById: z.ZodNullable<z.ZodNumber>;
        deletedAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, "value" | "image" | "price" | "stock">, {
        id: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        value: string;
        image: string;
        price: number;
        stock: number;
        id?: number | undefined;
    }, {
        value: string;
        image: string;
        price: number;
        stock: number;
        id?: number | undefined;
    }>, "many">;
}>, "strict", z.ZodTypeAny, {
    name: string;
    brandId: number;
    categories: number[];
    variants: {
        value: string;
        options: string[];
    }[];
    publishedAt: Date | null;
    basePrice: number;
    virtualPrice: number;
    images: string[];
    skus: {
        value: string;
        image: string;
        price: number;
        stock: number;
        id?: number | undefined;
    }[];
}, {
    name: string;
    brandId: number;
    categories: number[];
    variants: {
        value: string;
        options: string[];
    }[];
    publishedAt: Date | null;
    basePrice: number;
    virtualPrice: number;
    images: string[];
    skus: {
        value: string;
        image: string;
        price: number;
        stock: number;
        id?: number | undefined;
    }[];
}>, {
    name: string;
    brandId: number;
    categories: number[];
    variants: {
        value: string;
        options: string[];
    }[];
    publishedAt: Date | null;
    basePrice: number;
    virtualPrice: number;
    images: string[];
    skus: {
        value: string;
        image: string;
        price: number;
        stock: number;
        id?: number | undefined;
    }[];
}, {
    name: string;
    brandId: number;
    categories: number[];
    variants: {
        value: string;
        options: string[];
    }[];
    publishedAt: Date | null;
    basePrice: number;
    virtualPrice: number;
    images: string[];
    skus: {
        value: string;
        image: string;
        price: number;
        stock: number;
        id?: number | undefined;
    }[];
}>;
export type GetProductsResType = z.infer<typeof GetProductsResSchema>;
export type GetProductsQueryType = z.infer<typeof GetProductsQuerySchema>;
export type GetManageProductsQueryType = z.infer<typeof GetManageProductsQuerySchema>;
export type GetProductDetailResType = z.infer<typeof GetProductDetailResSchema>;
export type CreateProductBodyType = z.infer<typeof CreateProductBodySchema>;
export type GetProductParamsType = z.infer<typeof GetProductParamsSchema>;
export type UpdateProductBodyType = z.infer<typeof UpdateProductBodySchema>;
