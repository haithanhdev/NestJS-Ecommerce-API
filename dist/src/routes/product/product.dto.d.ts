declare const ProductDTO_base: import("nestjs-zod").ZodDto<{
    id: number;
    name: string;
    createdById: number | null;
    updatedById: number | null;
    deletedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    brandId: number;
    variants: {
        value: string;
        options: string[];
    }[];
    publishedAt: Date | null;
    basePrice: number;
    virtualPrice: number;
    images: string[];
}, import("zod").ZodObjectDef<{
    id: import("zod").ZodNumber;
    publishedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    name: import("zod").ZodString;
    basePrice: import("zod").ZodNumber;
    virtualPrice: import("zod").ZodNumber;
    brandId: import("zod").ZodNumber;
    images: import("zod").ZodArray<import("zod").ZodString, "many">;
    variants: import("zod").ZodEffects<import("zod").ZodArray<import("zod").ZodObject<{
        value: import("zod").ZodString;
        options: import("zod").ZodArray<import("zod").ZodString, "many">;
    }, "strip", import("zod").ZodTypeAny, {
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
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "strip", import("zod").ZodTypeAny>, {
    id: number;
    name: string;
    createdById: number | null;
    updatedById: number | null;
    deletedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    brandId: number;
    variants: {
        value: string;
        options: string[];
    }[];
    publishedAt: Date | null;
    basePrice: number;
    virtualPrice: number;
    images: string[];
}>;
export declare class ProductDTO extends ProductDTO_base {
}
declare const GetProductsResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<{
    data: import("zod").ZodArray<import("zod").ZodObject<import("zod").objectUtil.extendShape<{
        id: import("zod").ZodNumber;
        publishedAt: import("zod").ZodNullable<import("zod").ZodDate>;
        name: import("zod").ZodString;
        basePrice: import("zod").ZodNumber;
        virtualPrice: import("zod").ZodNumber;
        brandId: import("zod").ZodNumber;
        images: import("zod").ZodArray<import("zod").ZodString, "many">;
        variants: import("zod").ZodEffects<import("zod").ZodArray<import("zod").ZodObject<{
            value: import("zod").ZodString;
            options: import("zod").ZodArray<import("zod").ZodString, "many">;
        }, "strip", import("zod").ZodTypeAny, {
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
        createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
        updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, {
        productTranslations: import("zod").ZodArray<import("zod").ZodObject<{
            id: import("zod").ZodNumber;
            productId: import("zod").ZodNumber;
            name: import("zod").ZodString;
            description: import("zod").ZodString;
            languageId: import("zod").ZodString;
            createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
            updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
            createdAt: import("zod").ZodDate;
            updatedAt: import("zod").ZodDate;
        }, "strip", import("zod").ZodTypeAny, {
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
        productSKUSnapshots: import("zod").ZodArray<import("zod").ZodObject<Pick<{
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
        }, "id" | "quantity" | "productId">, "strip", import("zod").ZodTypeAny, {
            id: number;
            quantity: number;
            productId: number | null;
        }, {
            id: number;
            quantity: number;
            productId: number | null;
        }>, "many">;
        brand: import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            id: import("zod").ZodNumber;
            name: import("zod").ZodString;
            logo: import("zod").ZodString;
            createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
            updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
            createdAt: import("zod").ZodDate;
            updatedAt: import("zod").ZodDate;
        }, {
            brandTranslations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodNumber;
                brandId: import("zod").ZodNumber;
                languageId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodString;
                createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
                updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
                deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
                deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
                createdAt: import("zod").ZodDate;
                updatedAt: import("zod").ZodDate;
            }, "strip", import("zod").ZodTypeAny, {
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
        }>, "strip", import("zod").ZodTypeAny, {
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
        skus: import("zod").ZodArray<import("zod").ZodObject<{
            id: import("zod").ZodNumber;
            value: import("zod").ZodString;
            price: import("zod").ZodNumber;
            stock: import("zod").ZodNumber;
            image: import("zod").ZodString;
            productId: import("zod").ZodNumber;
            createdById: import("zod").ZodNumber;
            updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
            createdAt: import("zod").ZodDate;
            updatedAt: import("zod").ZodDate;
        }, "strip", import("zod").ZodTypeAny, {
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
        categories: import("zod").ZodArray<import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            id: import("zod").ZodNumber;
            parentCategoryId: import("zod").ZodNullable<import("zod").ZodNumber>;
            name: import("zod").ZodString;
            logo: import("zod").ZodNullable<import("zod").ZodString>;
            createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
            updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
            createdAt: import("zod").ZodDate;
            updatedAt: import("zod").ZodDate;
        }, {
            categoryTranslations: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodNumber;
                categoryId: import("zod").ZodNumber;
                languageId: import("zod").ZodString;
                name: import("zod").ZodString;
                description: import("zod").ZodString;
                createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
                updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
                deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
                deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
                createdAt: import("zod").ZodDate;
                updatedAt: import("zod").ZodDate;
            }, "strip", import("zod").ZodTypeAny, {
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
        }>, "strip", import("zod").ZodTypeAny, {
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
    }>, "strip", import("zod").ZodTypeAny, {
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
    totalItems: import("zod").ZodNumber;
    page: import("zod").ZodNumber;
    limit: import("zod").ZodNumber;
    totalPages: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny>, {
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
export declare class GetProductsResDTO extends GetProductsResDTO_base {
}
declare const GetProductsQueryDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<{
    page: import("zod").ZodDefault<import("zod").ZodNumber>;
    limit: import("zod").ZodDefault<import("zod").ZodNumber>;
    name: import("zod").ZodOptional<import("zod").ZodString>;
    brandIds: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber, "many">>, number[] | undefined, unknown>;
    categories: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber, "many">>, number[] | undefined, unknown>;
    minPrice: import("zod").ZodOptional<import("zod").ZodNumber>;
    maxPrice: import("zod").ZodOptional<import("zod").ZodNumber>;
    createdById: import("zod").ZodOptional<import("zod").ZodNumber>;
    orderBy: import("zod").ZodDefault<import("zod").ZodEnum<["asc", "desc"]>>;
    sortBy: import("zod").ZodDefault<import("zod").ZodEnum<["sale", "price", "createdAt"]>>;
}, "strip", import("zod").ZodTypeAny>, {
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
export declare class GetProductsQueryDTO extends GetProductsQueryDTO_base {
}
declare const GetManageProductsQueryDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<import("zod").objectUtil.extendShape<{
    page: import("zod").ZodDefault<import("zod").ZodNumber>;
    limit: import("zod").ZodDefault<import("zod").ZodNumber>;
    name: import("zod").ZodOptional<import("zod").ZodString>;
    brandIds: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber, "many">>, number[] | undefined, unknown>;
    categories: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber, "many">>, number[] | undefined, unknown>;
    minPrice: import("zod").ZodOptional<import("zod").ZodNumber>;
    maxPrice: import("zod").ZodOptional<import("zod").ZodNumber>;
    createdById: import("zod").ZodOptional<import("zod").ZodNumber>;
    orderBy: import("zod").ZodDefault<import("zod").ZodEnum<["asc", "desc"]>>;
    sortBy: import("zod").ZodDefault<import("zod").ZodEnum<["sale", "price", "createdAt"]>>;
}, {
    isPublic: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodBoolean, boolean, unknown>>;
    createdById: import("zod").ZodNumber;
}>, "strip", import("zod").ZodTypeAny>, {
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
export declare class GetManageProductsQueryDTO extends GetManageProductsQueryDTO_base {
}
declare const GetProductParamsDTO_base: import("nestjs-zod").ZodDto<{
    productId: number;
}, import("zod").ZodObjectDef<{
    productId: import("zod").ZodNumber;
}, "strict", import("zod").ZodTypeAny>, {
    productId: number;
}>;
export declare class GetProductParamsDTO extends GetProductParamsDTO_base {
}
declare const GetProductDetailResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<import("zod").objectUtil.extendShape<{
    id: import("zod").ZodNumber;
    publishedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    name: import("zod").ZodString;
    basePrice: import("zod").ZodNumber;
    virtualPrice: import("zod").ZodNumber;
    brandId: import("zod").ZodNumber;
    images: import("zod").ZodArray<import("zod").ZodString, "many">;
    variants: import("zod").ZodEffects<import("zod").ZodArray<import("zod").ZodObject<{
        value: import("zod").ZodString;
        options: import("zod").ZodArray<import("zod").ZodString, "many">;
    }, "strip", import("zod").ZodTypeAny, {
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
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, {
    productTranslations: import("zod").ZodArray<import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        productId: import("zod").ZodNumber;
        name: import("zod").ZodString;
        description: import("zod").ZodString;
        languageId: import("zod").ZodString;
        createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
        updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
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
    skus: import("zod").ZodArray<import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        value: import("zod").ZodString;
        price: import("zod").ZodNumber;
        stock: import("zod").ZodNumber;
        image: import("zod").ZodString;
        productId: import("zod").ZodNumber;
        createdById: import("zod").ZodNumber;
        updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
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
    categories: import("zod").ZodArray<import("zod").ZodObject<import("zod").objectUtil.extendShape<{
        id: import("zod").ZodNumber;
        parentCategoryId: import("zod").ZodNullable<import("zod").ZodNumber>;
        name: import("zod").ZodString;
        logo: import("zod").ZodNullable<import("zod").ZodString>;
        createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
        updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, {
        categoryTranslations: import("zod").ZodArray<import("zod").ZodObject<{
            id: import("zod").ZodNumber;
            categoryId: import("zod").ZodNumber;
            languageId: import("zod").ZodString;
            name: import("zod").ZodString;
            description: import("zod").ZodString;
            createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
            updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
            createdAt: import("zod").ZodDate;
            updatedAt: import("zod").ZodDate;
        }, "strip", import("zod").ZodTypeAny, {
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
    }>, "strip", import("zod").ZodTypeAny, {
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
    brand: import("zod").ZodObject<import("zod").objectUtil.extendShape<{
        id: import("zod").ZodNumber;
        name: import("zod").ZodString;
        logo: import("zod").ZodString;
        createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
        updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, {
        brandTranslations: import("zod").ZodArray<import("zod").ZodObject<{
            id: import("zod").ZodNumber;
            brandId: import("zod").ZodNumber;
            languageId: import("zod").ZodString;
            name: import("zod").ZodString;
            description: import("zod").ZodString;
            createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
            updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
            createdAt: import("zod").ZodDate;
            updatedAt: import("zod").ZodDate;
        }, "strip", import("zod").ZodTypeAny, {
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
    }>, "strip", import("zod").ZodTypeAny, {
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
    productSKUSnapshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<Pick<{
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
    }, "id" | "quantity" | "productId">, "strip", import("zod").ZodTypeAny, {
        id: number;
        quantity: number;
        productId: number | null;
    }, {
        id: number;
        quantity: number;
        productId: number | null;
    }>, "many">>;
}>, "strip", import("zod").ZodTypeAny>, {
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
export declare class GetProductDetailResDTO extends GetProductDetailResDTO_base {
}
declare const CreateProductBodyDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodEffectsDef<import("zod").ZodObject<import("zod").objectUtil.extendShape<Pick<{
    id: import("zod").ZodNumber;
    publishedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    name: import("zod").ZodString;
    basePrice: import("zod").ZodNumber;
    virtualPrice: import("zod").ZodNumber;
    brandId: import("zod").ZodNumber;
    images: import("zod").ZodArray<import("zod").ZodString, "many">;
    variants: import("zod").ZodEffects<import("zod").ZodArray<import("zod").ZodObject<{
        value: import("zod").ZodString;
        options: import("zod").ZodArray<import("zod").ZodString, "many">;
    }, "strip", import("zod").ZodTypeAny, {
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
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "name" | "brandId" | "variants" | "publishedAt" | "basePrice" | "virtualPrice" | "images">, {
    categories: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    skus: import("zod").ZodArray<import("zod").ZodObject<import("zod").objectUtil.extendShape<Pick<{
        id: import("zod").ZodNumber;
        value: import("zod").ZodString;
        price: import("zod").ZodNumber;
        stock: import("zod").ZodNumber;
        image: import("zod").ZodString;
        productId: import("zod").ZodNumber;
        createdById: import("zod").ZodNumber;
        updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, "value" | "image" | "price" | "stock">, {
        id: import("zod").ZodOptional<import("zod").ZodNumber>;
    }>, "strip", import("zod").ZodTypeAny, {
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
}>, "strict", import("zod").ZodTypeAny, {
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
}>>, {
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
export declare class CreateProductBodyDTO extends CreateProductBodyDTO_base {
}
declare const UpdateProductBodyDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodEffectsDef<import("zod").ZodObject<import("zod").objectUtil.extendShape<Pick<{
    id: import("zod").ZodNumber;
    publishedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    name: import("zod").ZodString;
    basePrice: import("zod").ZodNumber;
    virtualPrice: import("zod").ZodNumber;
    brandId: import("zod").ZodNumber;
    images: import("zod").ZodArray<import("zod").ZodString, "many">;
    variants: import("zod").ZodEffects<import("zod").ZodArray<import("zod").ZodObject<{
        value: import("zod").ZodString;
        options: import("zod").ZodArray<import("zod").ZodString, "many">;
    }, "strip", import("zod").ZodTypeAny, {
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
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "name" | "brandId" | "variants" | "publishedAt" | "basePrice" | "virtualPrice" | "images">, {
    categories: import("zod").ZodArray<import("zod").ZodNumber, "many">;
    skus: import("zod").ZodArray<import("zod").ZodObject<import("zod").objectUtil.extendShape<Pick<{
        id: import("zod").ZodNumber;
        value: import("zod").ZodString;
        price: import("zod").ZodNumber;
        stock: import("zod").ZodNumber;
        image: import("zod").ZodString;
        productId: import("zod").ZodNumber;
        createdById: import("zod").ZodNumber;
        updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, "value" | "image" | "price" | "stock">, {
        id: import("zod").ZodOptional<import("zod").ZodNumber>;
    }>, "strip", import("zod").ZodTypeAny, {
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
}>, "strict", import("zod").ZodTypeAny, {
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
}>>, {
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
export declare class UpdateProductBodyDTO extends UpdateProductBodyDTO_base {
}
export {};
