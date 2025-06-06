import { z } from 'zod';
export declare const CartItemSchema: z.ZodObject<{
    id: z.ZodNumber;
    quantity: z.ZodNumber;
    skuId: z.ZodNumber;
    userId: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    userId: number;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    skuId: number;
    quantity: number;
}, {
    userId: number;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    skuId: number;
    quantity: number;
}>;
export declare const GetCartItemParamsSchema: z.ZodObject<{
    cartItemId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    cartItemId: number;
}, {
    cartItemId: number;
}>;
export declare const CartItemDetailSchema: z.ZodObject<{
    shop: z.ZodObject<Pick<{
        id: z.ZodNumber;
        email: z.ZodString;
        name: z.ZodString;
        password: z.ZodString;
        phoneNumber: z.ZodDefault<z.ZodString>;
        avatar: z.ZodNullable<z.ZodString>;
        totpSecret: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
        roleId: z.ZodNumber;
        createdById: z.ZodNullable<z.ZodNumber>;
        updatedById: z.ZodNullable<z.ZodNumber>;
        deletedById: z.ZodNullable<z.ZodNumber>;
        deletedAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, "id" | "name" | "avatar">, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        avatar: string | null;
    }, {
        id: number;
        name: string;
        avatar: string | null;
    }>;
    cartItems: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodNumber;
        quantity: z.ZodNumber;
        skuId: z.ZodNumber;
        userId: z.ZodNumber;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, {
        sku: z.ZodObject<Omit<z.objectUtil.extendShape<{
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
        }, {
            product: z.ZodObject<Omit<z.objectUtil.extendShape<{
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
                productTranslations: z.ZodArray<z.ZodObject<Omit<{
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
                }, "createdById" | "updatedById" | "deletedById" | "deletedAt" | "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
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
            }>, "createdById" | "updatedById" | "deletedById" | "deletedAt" | "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
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
        }>, "createdById" | "updatedById" | "deletedById" | "deletedAt" | "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
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
    }>, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
}>;
export declare const GetCartResSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        shop: z.ZodObject<Pick<{
            id: z.ZodNumber;
            email: z.ZodString;
            name: z.ZodString;
            password: z.ZodString;
            phoneNumber: z.ZodDefault<z.ZodString>;
            avatar: z.ZodNullable<z.ZodString>;
            totpSecret: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
            roleId: z.ZodNumber;
            createdById: z.ZodNullable<z.ZodNumber>;
            updatedById: z.ZodNullable<z.ZodNumber>;
            deletedById: z.ZodNullable<z.ZodNumber>;
            deletedAt: z.ZodNullable<z.ZodDate>;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
        }, "id" | "name" | "avatar">, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            avatar: string | null;
        }, {
            id: number;
            name: string;
            avatar: string | null;
        }>;
        cartItems: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodNumber;
            quantity: z.ZodNumber;
            skuId: z.ZodNumber;
            userId: z.ZodNumber;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
        }, {
            sku: z.ZodObject<Omit<z.objectUtil.extendShape<{
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
            }, {
                product: z.ZodObject<Omit<z.objectUtil.extendShape<{
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
                    productTranslations: z.ZodArray<z.ZodObject<Omit<{
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
                    }, "createdById" | "updatedById" | "deletedById" | "deletedAt" | "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
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
                }>, "createdById" | "updatedById" | "deletedById" | "deletedAt" | "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
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
            }>, "createdById" | "updatedById" | "deletedById" | "deletedAt" | "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
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
        }>, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
    totalItems: z.ZodNumber;
    page: z.ZodNumber;
    limit: z.ZodNumber;
    totalPages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
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
}, {
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
export declare const AddToCartBodySchema: z.ZodObject<Pick<{
    id: z.ZodNumber;
    quantity: z.ZodNumber;
    skuId: z.ZodNumber;
    userId: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "skuId" | "quantity">, "strict", z.ZodTypeAny, {
    skuId: number;
    quantity: number;
}, {
    skuId: number;
    quantity: number;
}>;
export declare const UpdateCartItemBodySchema: z.ZodObject<Pick<{
    id: z.ZodNumber;
    quantity: z.ZodNumber;
    skuId: z.ZodNumber;
    userId: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "skuId" | "quantity">, "strict", z.ZodTypeAny, {
    skuId: number;
    quantity: number;
}, {
    skuId: number;
    quantity: number;
}>;
export declare const DeleteCartBodySchema: z.ZodObject<{
    cartItemIds: z.ZodArray<z.ZodNumber, "many">;
}, "strict", z.ZodTypeAny, {
    cartItemIds: number[];
}, {
    cartItemIds: number[];
}>;
export type CartItemType = z.infer<typeof CartItemSchema>;
export type GetCartItemParamType = z.infer<typeof GetCartItemParamsSchema>;
export type CartItemDetailType = z.infer<typeof CartItemDetailSchema>;
export type GetCartResType = z.infer<typeof GetCartResSchema>;
export type AddToCartBodyType = z.infer<typeof AddToCartBodySchema>;
export type UpdateCartItemBodyType = z.infer<typeof UpdateCartItemBodySchema>;
export type DeleteCartBodyType = z.infer<typeof DeleteCartBodySchema>;
