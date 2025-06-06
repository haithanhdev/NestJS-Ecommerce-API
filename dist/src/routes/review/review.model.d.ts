import { z } from 'zod';
export declare const ReviewMediaSchema: z.ZodObject<{
    id: z.ZodNumber;
    url: z.ZodString;
    type: z.ZodEnum<["IMAGE", "VIDEO"]>;
    reviewId: z.ZodNumber;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    type: "IMAGE" | "VIDEO";
    id: number;
    createdAt: Date;
    url: string;
    reviewId: number;
}, {
    type: "IMAGE" | "VIDEO";
    id: number;
    createdAt: Date;
    url: string;
    reviewId: number;
}>;
export declare const ReviewSchema: z.ZodObject<{
    id: z.ZodNumber;
    content: z.ZodString;
    rating: z.ZodNumber;
    orderId: z.ZodNumber;
    productId: z.ZodNumber;
    userId: z.ZodNumber;
    updateCount: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    userId: number;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    orderId: number;
    productId: number;
    content: string;
    rating: number;
    updateCount: number;
}, {
    userId: number;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    orderId: number;
    productId: number;
    content: string;
    rating: number;
    updateCount: number;
}>;
export declare const CreateReviewBodySchema: z.ZodObject<z.objectUtil.extendShape<Pick<{
    id: z.ZodNumber;
    content: z.ZodString;
    rating: z.ZodNumber;
    orderId: z.ZodNumber;
    productId: z.ZodNumber;
    userId: z.ZodNumber;
    updateCount: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "orderId" | "productId" | "content" | "rating">, {
    medias: z.ZodArray<z.ZodObject<Pick<{
        id: z.ZodNumber;
        url: z.ZodString;
        type: z.ZodEnum<["IMAGE", "VIDEO"]>;
        reviewId: z.ZodNumber;
        createdAt: z.ZodDate;
    }, "type" | "url">, "strip", z.ZodTypeAny, {
        type: "IMAGE" | "VIDEO";
        url: string;
    }, {
        type: "IMAGE" | "VIDEO";
        url: string;
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
    orderId: number;
    productId: number;
    content: string;
    rating: number;
    medias: {
        type: "IMAGE" | "VIDEO";
        url: string;
    }[];
}, {
    orderId: number;
    productId: number;
    content: string;
    rating: number;
    medias: {
        type: "IMAGE" | "VIDEO";
        url: string;
    }[];
}>;
export declare const CreateReviewResSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNumber;
    content: z.ZodString;
    rating: z.ZodNumber;
    orderId: z.ZodNumber;
    productId: z.ZodNumber;
    userId: z.ZodNumber;
    updateCount: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, {
    medias: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        url: z.ZodString;
        type: z.ZodEnum<["IMAGE", "VIDEO"]>;
        reviewId: z.ZodNumber;
        createdAt: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        type: "IMAGE" | "VIDEO";
        id: number;
        createdAt: Date;
        url: string;
        reviewId: number;
    }, {
        type: "IMAGE" | "VIDEO";
        id: number;
        createdAt: Date;
        url: string;
        reviewId: number;
    }>, "many">;
    user: z.ZodObject<Pick<{
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
}>, "strip", z.ZodTypeAny, {
    user: {
        id: number;
        name: string;
        avatar: string | null;
    };
    userId: number;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    orderId: number;
    productId: number;
    content: string;
    rating: number;
    updateCount: number;
    medias: {
        type: "IMAGE" | "VIDEO";
        id: number;
        createdAt: Date;
        url: string;
        reviewId: number;
    }[];
}, {
    user: {
        id: number;
        name: string;
        avatar: string | null;
    };
    userId: number;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    orderId: number;
    productId: number;
    content: string;
    rating: number;
    updateCount: number;
    medias: {
        type: "IMAGE" | "VIDEO";
        id: number;
        createdAt: Date;
        url: string;
        reviewId: number;
    }[];
}>;
export declare const UpdateReviewResSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNumber;
    content: z.ZodString;
    rating: z.ZodNumber;
    orderId: z.ZodNumber;
    productId: z.ZodNumber;
    userId: z.ZodNumber;
    updateCount: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, {
    medias: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        url: z.ZodString;
        type: z.ZodEnum<["IMAGE", "VIDEO"]>;
        reviewId: z.ZodNumber;
        createdAt: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        type: "IMAGE" | "VIDEO";
        id: number;
        createdAt: Date;
        url: string;
        reviewId: number;
    }, {
        type: "IMAGE" | "VIDEO";
        id: number;
        createdAt: Date;
        url: string;
        reviewId: number;
    }>, "many">;
    user: z.ZodObject<Pick<{
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
}>, "strip", z.ZodTypeAny, {
    user: {
        id: number;
        name: string;
        avatar: string | null;
    };
    userId: number;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    orderId: number;
    productId: number;
    content: string;
    rating: number;
    updateCount: number;
    medias: {
        type: "IMAGE" | "VIDEO";
        id: number;
        createdAt: Date;
        url: string;
        reviewId: number;
    }[];
}, {
    user: {
        id: number;
        name: string;
        avatar: string | null;
    };
    userId: number;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    orderId: number;
    productId: number;
    content: string;
    rating: number;
    updateCount: number;
    medias: {
        type: "IMAGE" | "VIDEO";
        id: number;
        createdAt: Date;
        url: string;
        reviewId: number;
    }[];
}>;
export declare const GetReviewsSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodNumber;
        content: z.ZodString;
        rating: z.ZodNumber;
        orderId: z.ZodNumber;
        productId: z.ZodNumber;
        userId: z.ZodNumber;
        updateCount: z.ZodNumber;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, {
        medias: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            url: z.ZodString;
            type: z.ZodEnum<["IMAGE", "VIDEO"]>;
            reviewId: z.ZodNumber;
            createdAt: z.ZodDate;
        }, "strip", z.ZodTypeAny, {
            type: "IMAGE" | "VIDEO";
            id: number;
            createdAt: Date;
            url: string;
            reviewId: number;
        }, {
            type: "IMAGE" | "VIDEO";
            id: number;
            createdAt: Date;
            url: string;
            reviewId: number;
        }>, "many">;
        user: z.ZodObject<Pick<{
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
    }>, "strip", z.ZodTypeAny, {
        user: {
            id: number;
            name: string;
            avatar: string | null;
        };
        userId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderId: number;
        productId: number;
        content: string;
        rating: number;
        updateCount: number;
        medias: {
            type: "IMAGE" | "VIDEO";
            id: number;
            createdAt: Date;
            url: string;
            reviewId: number;
        }[];
    }, {
        user: {
            id: number;
            name: string;
            avatar: string | null;
        };
        userId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderId: number;
        productId: number;
        content: string;
        rating: number;
        updateCount: number;
        medias: {
            type: "IMAGE" | "VIDEO";
            id: number;
            createdAt: Date;
            url: string;
            reviewId: number;
        }[];
    }>, "many">;
    totalItems: z.ZodNumber;
    page: z.ZodNumber;
    limit: z.ZodNumber;
    totalPages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    data: {
        user: {
            id: number;
            name: string;
            avatar: string | null;
        };
        userId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderId: number;
        productId: number;
        content: string;
        rating: number;
        updateCount: number;
        medias: {
            type: "IMAGE" | "VIDEO";
            id: number;
            createdAt: Date;
            url: string;
            reviewId: number;
        }[];
    }[];
    limit: number;
    page: number;
    totalItems: number;
    totalPages: number;
}, {
    data: {
        user: {
            id: number;
            name: string;
            avatar: string | null;
        };
        userId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderId: number;
        productId: number;
        content: string;
        rating: number;
        updateCount: number;
        medias: {
            type: "IMAGE" | "VIDEO";
            id: number;
            createdAt: Date;
            url: string;
            reviewId: number;
        }[];
    }[];
    limit: number;
    page: number;
    totalItems: number;
    totalPages: number;
}>;
export declare const UpdateReviewBodySchema: z.ZodObject<z.objectUtil.extendShape<Pick<{
    id: z.ZodNumber;
    content: z.ZodString;
    rating: z.ZodNumber;
    orderId: z.ZodNumber;
    productId: z.ZodNumber;
    userId: z.ZodNumber;
    updateCount: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "orderId" | "productId" | "content" | "rating">, {
    medias: z.ZodArray<z.ZodObject<Pick<{
        id: z.ZodNumber;
        url: z.ZodString;
        type: z.ZodEnum<["IMAGE", "VIDEO"]>;
        reviewId: z.ZodNumber;
        createdAt: z.ZodDate;
    }, "type" | "url">, "strip", z.ZodTypeAny, {
        type: "IMAGE" | "VIDEO";
        url: string;
    }, {
        type: "IMAGE" | "VIDEO";
        url: string;
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
    orderId: number;
    productId: number;
    content: string;
    rating: number;
    medias: {
        type: "IMAGE" | "VIDEO";
        url: string;
    }[];
}, {
    orderId: number;
    productId: number;
    content: string;
    rating: number;
    medias: {
        type: "IMAGE" | "VIDEO";
        url: string;
    }[];
}>;
export declare const GetReviewsParamsSchema: z.ZodObject<{
    productId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    productId: number;
}, {
    productId: number;
}>;
export declare const GetReviewDetailParamsSchema: z.ZodObject<{
    reviewId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    reviewId: number;
}, {
    reviewId: number;
}>;
export type ReviewType = z.infer<typeof ReviewSchema>;
export type ReviewMediaType = z.infer<typeof ReviewMediaSchema>;
export type CreateReviewBodyType = z.infer<typeof CreateReviewBodySchema>;
export type UpdateReviewBodyType = z.infer<typeof UpdateReviewBodySchema>;
export type CreateReviewResType = z.infer<typeof CreateReviewResSchema>;
export type UpdateReviewResType = z.infer<typeof UpdateReviewResSchema>;
export type GetReviewsType = z.infer<typeof GetReviewsSchema>;
