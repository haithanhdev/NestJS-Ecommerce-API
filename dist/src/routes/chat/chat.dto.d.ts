declare const MessageDTO_base: import("nestjs-zod").ZodDto<{
    id: number;
    createdAt: Date;
    content: string;
    fromUserId: number;
    toUserId: number;
    readAt: Date | null;
}, import("zod").ZodObjectDef<{
    id: import("zod").ZodNumber;
    fromUserId: import("zod").ZodNumber;
    toUserId: import("zod").ZodNumber;
    content: import("zod").ZodString;
    readAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
}, "strip", import("zod").ZodTypeAny>, {
    id: number;
    createdAt: Date;
    content: string;
    fromUserId: number;
    toUserId: number;
    readAt: Date | null;
}>;
export declare class MessageDTO extends MessageDTO_base {
}
declare const GetMessagesResDTO_base: import("nestjs-zod").ZodDto<{
    receiver: {
        id: number;
        name: string;
        email: string;
        avatar: string | null;
    } | null;
    limit: number;
    page: number;
    totalItems: number;
    totalPages: number;
    messages: {
        id: number;
        createdAt: Date;
        content: string;
        fromUserId: number;
        toUserId: number;
        readAt: Date | null;
    }[];
}, import("zod").ZodObjectDef<{
    messages: import("zod").ZodArray<import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        fromUserId: import("zod").ZodNumber;
        toUserId: import("zod").ZodNumber;
        content: import("zod").ZodString;
        readAt: import("zod").ZodNullable<import("zod").ZodDate>;
        createdAt: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
        id: number;
        createdAt: Date;
        content: string;
        fromUserId: number;
        toUserId: number;
        readAt: Date | null;
    }, {
        id: number;
        createdAt: Date;
        content: string;
        fromUserId: number;
        toUserId: number;
        readAt: Date | null;
    }>, "many">;
    totalItems: import("zod").ZodNumber;
    page: import("zod").ZodNumber;
    limit: import("zod").ZodNumber;
    totalPages: import("zod").ZodNumber;
    receiver: import("zod").ZodNullable<import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        name: import("zod").ZodString;
        email: import("zod").ZodString;
        avatar: import("zod").ZodNullable<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        id: number;
        name: string;
        email: string;
        avatar: string | null;
    }, {
        id: number;
        name: string;
        email: string;
        avatar: string | null;
    }>>;
}, "strip", import("zod").ZodTypeAny>, {
    receiver: {
        id: number;
        name: string;
        email: string;
        avatar: string | null;
    } | null;
    limit: number;
    page: number;
    totalItems: number;
    totalPages: number;
    messages: {
        id: number;
        createdAt: Date;
        content: string;
        fromUserId: number;
        toUserId: number;
        readAt: Date | null;
    }[];
}>;
export declare class GetMessagesResDTO extends GetMessagesResDTO_base {
}
declare const GetMessagesQueryDTO_base: import("nestjs-zod").ZodDto<{
    limit: number;
    page: number;
    fromUserId: number;
    toUserId: number;
}, import("zod").ZodObjectDef<{
    fromUserId: import("zod").ZodNumber;
    toUserId: import("zod").ZodNumber;
    page: import("zod").ZodDefault<import("zod").ZodNumber>;
    limit: import("zod").ZodDefault<import("zod").ZodNumber>;
}, "strict", import("zod").ZodTypeAny>, {
    fromUserId: number;
    toUserId: number;
    limit?: number | undefined;
    page?: number | undefined;
}>;
export declare class GetMessagesQueryDTO extends GetMessagesQueryDTO_base {
}
declare const GetUsersDTO_base: import("nestjs-zod").ZodDto<{
    users: {
        id: number;
        name: string;
        email: string;
        avatar: string | null;
    }[];
}, import("zod").ZodObjectDef<{
    users: import("zod").ZodArray<import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        name: import("zod").ZodString;
        email: import("zod").ZodString;
        avatar: import("zod").ZodNullable<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        id: number;
        name: string;
        email: string;
        avatar: string | null;
    }, {
        id: number;
        name: string;
        email: string;
        avatar: string | null;
    }>, "many">;
}, "strip", import("zod").ZodTypeAny>, {
    users: {
        id: number;
        name: string;
        email: string;
        avatar: string | null;
    }[];
}>;
export declare class GetUsersDTO extends GetUsersDTO_base {
}
export {};
