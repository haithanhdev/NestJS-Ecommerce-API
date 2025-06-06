declare const GetReviewsDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<{
    data: import("zod").ZodArray<import("zod").ZodObject<import("zod").objectUtil.extendShape<{
        id: import("zod").ZodNumber;
        content: import("zod").ZodString;
        rating: import("zod").ZodNumber;
        orderId: import("zod").ZodNumber;
        productId: import("zod").ZodNumber;
        userId: import("zod").ZodNumber;
        updateCount: import("zod").ZodNumber;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, {
        medias: import("zod").ZodArray<import("zod").ZodObject<{
            id: import("zod").ZodNumber;
            url: import("zod").ZodString;
            type: import("zod").ZodEnum<["IMAGE", "VIDEO"]>;
            reviewId: import("zod").ZodNumber;
            createdAt: import("zod").ZodDate;
        }, "strip", import("zod").ZodTypeAny, {
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
        user: import("zod").ZodObject<Pick<{
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
    }>, "strip", import("zod").ZodTypeAny, {
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
    totalItems: import("zod").ZodNumber;
    page: import("zod").ZodNumber;
    limit: import("zod").ZodNumber;
    totalPages: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny>, {
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
export declare class GetReviewsDTO extends GetReviewsDTO_base {
}
declare const CreateReviewBodyDTO_base: import("nestjs-zod").ZodDto<{
    orderId: number;
    productId: number;
    content: string;
    rating: number;
    medias: {
        type: "IMAGE" | "VIDEO";
        url: string;
    }[];
}, import("zod").ZodObjectDef<import("zod").objectUtil.extendShape<Pick<{
    id: import("zod").ZodNumber;
    content: import("zod").ZodString;
    rating: import("zod").ZodNumber;
    orderId: import("zod").ZodNumber;
    productId: import("zod").ZodNumber;
    userId: import("zod").ZodNumber;
    updateCount: import("zod").ZodNumber;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "orderId" | "productId" | "content" | "rating">, {
    medias: import("zod").ZodArray<import("zod").ZodObject<Pick<{
        id: import("zod").ZodNumber;
        url: import("zod").ZodString;
        type: import("zod").ZodEnum<["IMAGE", "VIDEO"]>;
        reviewId: import("zod").ZodNumber;
        createdAt: import("zod").ZodDate;
    }, "type" | "url">, "strip", import("zod").ZodTypeAny, {
        type: "IMAGE" | "VIDEO";
        url: string;
    }, {
        type: "IMAGE" | "VIDEO";
        url: string;
    }>, "many">;
}>, "strip", import("zod").ZodTypeAny>, {
    orderId: number;
    productId: number;
    content: string;
    rating: number;
    medias: {
        type: "IMAGE" | "VIDEO";
        url: string;
    }[];
}>;
export declare class CreateReviewBodyDTO extends CreateReviewBodyDTO_base {
}
declare const CreateReviewResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<import("zod").objectUtil.extendShape<{
    id: import("zod").ZodNumber;
    content: import("zod").ZodString;
    rating: import("zod").ZodNumber;
    orderId: import("zod").ZodNumber;
    productId: import("zod").ZodNumber;
    userId: import("zod").ZodNumber;
    updateCount: import("zod").ZodNumber;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, {
    medias: import("zod").ZodArray<import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        url: import("zod").ZodString;
        type: import("zod").ZodEnum<["IMAGE", "VIDEO"]>;
        reviewId: import("zod").ZodNumber;
        createdAt: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
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
    user: import("zod").ZodObject<Pick<{
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
}>, "strip", import("zod").ZodTypeAny>, {
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
export declare class CreateReviewResDTO extends CreateReviewResDTO_base {
}
declare const UpdateReviewBodyDTO_base: import("nestjs-zod").ZodDto<{
    orderId: number;
    productId: number;
    content: string;
    rating: number;
    medias: {
        type: "IMAGE" | "VIDEO";
        url: string;
    }[];
}, import("zod").ZodObjectDef<import("zod").objectUtil.extendShape<Pick<{
    id: import("zod").ZodNumber;
    content: import("zod").ZodString;
    rating: import("zod").ZodNumber;
    orderId: import("zod").ZodNumber;
    productId: import("zod").ZodNumber;
    userId: import("zod").ZodNumber;
    updateCount: import("zod").ZodNumber;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "orderId" | "productId" | "content" | "rating">, {
    medias: import("zod").ZodArray<import("zod").ZodObject<Pick<{
        id: import("zod").ZodNumber;
        url: import("zod").ZodString;
        type: import("zod").ZodEnum<["IMAGE", "VIDEO"]>;
        reviewId: import("zod").ZodNumber;
        createdAt: import("zod").ZodDate;
    }, "type" | "url">, "strip", import("zod").ZodTypeAny, {
        type: "IMAGE" | "VIDEO";
        url: string;
    }, {
        type: "IMAGE" | "VIDEO";
        url: string;
    }>, "many">;
}>, "strip", import("zod").ZodTypeAny>, {
    orderId: number;
    productId: number;
    content: string;
    rating: number;
    medias: {
        type: "IMAGE" | "VIDEO";
        url: string;
    }[];
}>;
export declare class UpdateReviewBodyDTO extends UpdateReviewBodyDTO_base {
}
declare const UpdateReviewResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<import("zod").objectUtil.extendShape<{
    id: import("zod").ZodNumber;
    content: import("zod").ZodString;
    rating: import("zod").ZodNumber;
    orderId: import("zod").ZodNumber;
    productId: import("zod").ZodNumber;
    userId: import("zod").ZodNumber;
    updateCount: import("zod").ZodNumber;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, {
    medias: import("zod").ZodArray<import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        url: import("zod").ZodString;
        type: import("zod").ZodEnum<["IMAGE", "VIDEO"]>;
        reviewId: import("zod").ZodNumber;
        createdAt: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
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
    user: import("zod").ZodObject<Pick<{
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
}>, "strip", import("zod").ZodTypeAny>, {
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
export declare class UpdateReviewResDTO extends UpdateReviewResDTO_base {
}
declare const GetReviewsParamsDTO_base: import("nestjs-zod").ZodDto<{
    productId: number;
}, import("zod").ZodObjectDef<{
    productId: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny>, {
    productId: number;
}>;
export declare class GetReviewsParamsDTO extends GetReviewsParamsDTO_base {
}
declare const GetReviewDetailParamsDTO_base: import("nestjs-zod").ZodDto<{
    reviewId: number;
}, import("zod").ZodObjectDef<{
    reviewId: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny>, {
    reviewId: number;
}>;
export declare class GetReviewDetailParamsDTO extends GetReviewDetailParamsDTO_base {
}
export {};
