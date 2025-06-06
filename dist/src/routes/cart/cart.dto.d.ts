declare const CartItemDTO_base: import("nestjs-zod").ZodDto<{
    userId: number;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    skuId: number;
    quantity: number;
}, import("zod").ZodObjectDef<{
    id: import("zod").ZodNumber;
    quantity: import("zod").ZodNumber;
    skuId: import("zod").ZodNumber;
    userId: import("zod").ZodNumber;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "strip", import("zod").ZodTypeAny>, {
    userId: number;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    skuId: number;
    quantity: number;
}>;
export declare class CartItemDTO extends CartItemDTO_base {
}
declare const GetCartResDTO_base: import("nestjs-zod").ZodDto<{
    data: {
        shop: {
            id: number;
            name: string;
            avatar: string | null;
        };
        cartItems: {
            userId: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            skuId: number;
            quantity: number;
            sku: {
                product: {
                    id: number;
                    name: string;
                    productTranslations: {
                        id: number;
                        name: string;
                        description: string;
                        productId: number;
                        languageId: string;
                    }[];
                    brandId: number;
                    variants: {
                        value: string;
                        options: string[];
                    }[];
                    publishedAt: Date | null;
                    basePrice: number;
                    virtualPrice: number;
                    images: string[];
                };
                value: string;
                id: number;
                image: string;
                productId: number;
                price: number;
                stock: number;
            };
        }[];
    }[];
    limit: number;
    page: number;
    totalItems: number;
    totalPages: number;
}, import("zod").ZodObjectDef<{
    data: import("zod").ZodArray<import("zod").ZodObject<{
        shop: import("zod").ZodObject<Pick<{
            id: import("zod").ZodNumber;
            email: import("zod").ZodString;
            name: import("zod").ZodString;
            password: import("zod").ZodString;
            phoneNumber: import("zod").ZodDefault<import("zod").ZodString>;
            avatar: import("zod").ZodNullable<import("zod").ZodString>;
            totpSecret: import("zod").ZodNullable<import("zod").ZodString>;
            status: import("zod").ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
            roleId: import("zod").ZodNumber;
            createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
            updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
            deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
            createdAt: import("zod").ZodDate;
            updatedAt: import("zod").ZodDate;
        }, "id" | "name" | "avatar">, "strip", import("zod").ZodTypeAny, {
            id: number;
            name: string;
            avatar: string | null;
        }, {
            id: number;
            name: string;
            avatar: string | null;
        }>;
        cartItems: import("zod").ZodArray<import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            id: import("zod").ZodNumber;
            quantity: import("zod").ZodNumber;
            skuId: import("zod").ZodNumber;
            userId: import("zod").ZodNumber;
            createdAt: import("zod").ZodDate;
            updatedAt: import("zod").ZodDate;
        }, {
            sku: import("zod").ZodObject<Omit<import("zod").objectUtil.extendShape<{
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
            }, {
                product: import("zod").ZodObject<Omit<import("zod").objectUtil.extendShape<{
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
                    productTranslations: import("zod").ZodArray<import("zod").ZodObject<Omit<{
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
                    }, "createdById" | "updatedById" | "deletedById" | "deletedAt" | "createdAt" | "updatedAt">, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        name: string;
                        description: string;
                        productId: number;
                        languageId: string;
                    }, {
                        id: number;
                        name: string;
                        description: string;
                        productId: number;
                        languageId: string;
                    }>, "many">;
                }>, "createdById" | "updatedById" | "deletedById" | "deletedAt" | "createdAt" | "updatedAt">, "strip", import("zod").ZodTypeAny, {
                    id: number;
                    name: string;
                    productTranslations: {
                        id: number;
                        name: string;
                        description: string;
                        productId: number;
                        languageId: string;
                    }[];
                    brandId: number;
                    variants: {
                        value: string;
                        options: string[];
                    }[];
                    publishedAt: Date | null;
                    basePrice: number;
                    virtualPrice: number;
                    images: string[];
                }, {
                    id: number;
                    name: string;
                    productTranslations: {
                        id: number;
                        name: string;
                        description: string;
                        productId: number;
                        languageId: string;
                    }[];
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
            }>, "createdById" | "updatedById" | "deletedById" | "deletedAt" | "createdAt" | "updatedAt">, "strip", import("zod").ZodTypeAny, {
                product: {
                    id: number;
                    name: string;
                    productTranslations: {
                        id: number;
                        name: string;
                        description: string;
                        productId: number;
                        languageId: string;
                    }[];
                    brandId: number;
                    variants: {
                        value: string;
                        options: string[];
                    }[];
                    publishedAt: Date | null;
                    basePrice: number;
                    virtualPrice: number;
                    images: string[];
                };
                value: string;
                id: number;
                image: string;
                productId: number;
                price: number;
                stock: number;
            }, {
                product: {
                    id: number;
                    name: string;
                    productTranslations: {
                        id: number;
                        name: string;
                        description: string;
                        productId: number;
                        languageId: string;
                    }[];
                    brandId: number;
                    variants: {
                        value: string;
                        options: string[];
                    }[];
                    publishedAt: Date | null;
                    basePrice: number;
                    virtualPrice: number;
                    images: string[];
                };
                value: string;
                id: number;
                image: string;
                productId: number;
                price: number;
                stock: number;
            }>;
        }>, "strip", import("zod").ZodTypeAny, {
            userId: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            skuId: number;
            quantity: number;
            sku: {
                product: {
                    id: number;
                    name: string;
                    productTranslations: {
                        id: number;
                        name: string;
                        description: string;
                        productId: number;
                        languageId: string;
                    }[];
                    brandId: number;
                    variants: {
                        value: string;
                        options: string[];
                    }[];
                    publishedAt: Date | null;
                    basePrice: number;
                    virtualPrice: number;
                    images: string[];
                };
                value: string;
                id: number;
                image: string;
                productId: number;
                price: number;
                stock: number;
            };
        }, {
            userId: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            skuId: number;
            quantity: number;
            sku: {
                product: {
                    id: number;
                    name: string;
                    productTranslations: {
                        id: number;
                        name: string;
                        description: string;
                        productId: number;
                        languageId: string;
                    }[];
                    brandId: number;
                    variants: {
                        value: string;
                        options: string[];
                    }[];
                    publishedAt: Date | null;
                    basePrice: number;
                    virtualPrice: number;
                    images: string[];
                };
                value: string;
                id: number;
                image: string;
                productId: number;
                price: number;
                stock: number;
            };
        }>, "many">;
    }, "strip", import("zod").ZodTypeAny, {
        shop: {
            id: number;
            name: string;
            avatar: string | null;
        };
        cartItems: {
            userId: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            skuId: number;
            quantity: number;
            sku: {
                product: {
                    id: number;
                    name: string;
                    productTranslations: {
                        id: number;
                        name: string;
                        description: string;
                        productId: number;
                        languageId: string;
                    }[];
                    brandId: number;
                    variants: {
                        value: string;
                        options: string[];
                    }[];
                    publishedAt: Date | null;
                    basePrice: number;
                    virtualPrice: number;
                    images: string[];
                };
                value: string;
                id: number;
                image: string;
                productId: number;
                price: number;
                stock: number;
            };
        }[];
    }, {
        shop: {
            id: number;
            name: string;
            avatar: string | null;
        };
        cartItems: {
            userId: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            skuId: number;
            quantity: number;
            sku: {
                product: {
                    id: number;
                    name: string;
                    productTranslations: {
                        id: number;
                        name: string;
                        description: string;
                        productId: number;
                        languageId: string;
                    }[];
                    brandId: number;
                    variants: {
                        value: string;
                        options: string[];
                    }[];
                    publishedAt: Date | null;
                    basePrice: number;
                    virtualPrice: number;
                    images: string[];
                };
                value: string;
                id: number;
                image: string;
                productId: number;
                price: number;
                stock: number;
            };
        }[];
    }>, "many">;
    totalItems: import("zod").ZodNumber;
    page: import("zod").ZodNumber;
    limit: import("zod").ZodNumber;
    totalPages: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny>, {
    data: {
        shop: {
            id: number;
            name: string;
            avatar: string | null;
        };
        cartItems: {
            userId: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            skuId: number;
            quantity: number;
            sku: {
                product: {
                    id: number;
                    name: string;
                    productTranslations: {
                        id: number;
                        name: string;
                        description: string;
                        productId: number;
                        languageId: string;
                    }[];
                    brandId: number;
                    variants: {
                        value: string;
                        options: string[];
                    }[];
                    publishedAt: Date | null;
                    basePrice: number;
                    virtualPrice: number;
                    images: string[];
                };
                value: string;
                id: number;
                image: string;
                productId: number;
                price: number;
                stock: number;
            };
        }[];
    }[];
    limit: number;
    page: number;
    totalItems: number;
    totalPages: number;
}>;
export declare class GetCartResDTO extends GetCartResDTO_base {
}
declare const GetCartItemParamsDTO_base: import("nestjs-zod").ZodDto<{
    cartItemId: number;
}, import("zod").ZodObjectDef<{
    cartItemId: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny>, {
    cartItemId: number;
}>;
export declare class GetCartItemParamsDTO extends GetCartItemParamsDTO_base {
}
declare const AddToCartBodyDTO_base: import("nestjs-zod").ZodDto<{
    skuId: number;
    quantity: number;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodNumber;
    quantity: import("zod").ZodNumber;
    skuId: import("zod").ZodNumber;
    userId: import("zod").ZodNumber;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "skuId" | "quantity">, "strict", import("zod").ZodTypeAny>, {
    skuId: number;
    quantity: number;
}>;
export declare class AddToCartBodyDTO extends AddToCartBodyDTO_base {
}
declare const UpdateCartItemBodyDTO_base: import("nestjs-zod").ZodDto<{
    skuId: number;
    quantity: number;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodNumber;
    quantity: import("zod").ZodNumber;
    skuId: import("zod").ZodNumber;
    userId: import("zod").ZodNumber;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "skuId" | "quantity">, "strict", import("zod").ZodTypeAny>, {
    skuId: number;
    quantity: number;
}>;
export declare class UpdateCartItemBodyDTO extends UpdateCartItemBodyDTO_base {
}
declare const DeleteCartBodyDTO_base: import("nestjs-zod").ZodDto<{
    cartItemIds: number[];
}, import("zod").ZodObjectDef<{
    cartItemIds: import("zod").ZodArray<import("zod").ZodNumber, "many">;
}, "strict", import("zod").ZodTypeAny>, {
    cartItemIds: number[];
}>;
export declare class DeleteCartBodyDTO extends DeleteCartBodyDTO_base {
}
export {};
