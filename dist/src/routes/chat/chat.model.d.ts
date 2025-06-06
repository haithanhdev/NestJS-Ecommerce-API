import { z } from 'zod';
export declare const GetMessagesQuerySchema: z.ZodObject<{
    fromUserId: z.ZodNumber;
    toUserId: z.ZodNumber;
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    limit: number;
    page: number;
    fromUserId: number;
    toUserId: number;
}, {
    fromUserId: number;
    toUserId: number;
    limit?: number | undefined;
    page?: number | undefined;
}>;
export declare const MessageSchema: z.ZodObject<{
    id: z.ZodNumber;
    fromUserId: z.ZodNumber;
    toUserId: z.ZodNumber;
    content: z.ZodString;
    readAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
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
}>;
export declare const GetMessagesResSchema: z.ZodObject<{
    messages: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        fromUserId: z.ZodNumber;
        toUserId: z.ZodNumber;
        content: z.ZodString;
        readAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
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
    totalItems: z.ZodNumber;
    page: z.ZodNumber;
    limit: z.ZodNumber;
    totalPages: z.ZodNumber;
    receiver: z.ZodNullable<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        email: z.ZodString;
        avatar: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
}, {
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
export declare const CreateMessageBodySchema: z.ZodObject<Pick<{
    id: z.ZodNumber;
    fromUserId: z.ZodNumber;
    toUserId: z.ZodNumber;
    content: z.ZodString;
    readAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
}, "createdAt" | "content" | "fromUserId" | "toUserId">, "strip", z.ZodTypeAny, {
    createdAt: Date;
    content: string;
    fromUserId: number;
    toUserId: number;
}, {
    createdAt: Date;
    content: string;
    fromUserId: number;
    toUserId: number;
}>;
export declare const GetUsersSchema: z.ZodObject<{
    users: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        email: z.ZodString;
        avatar: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
    users: {
        id: number;
        name: string;
        email: string;
        avatar: string | null;
    }[];
}, {
    users: {
        id: number;
        name: string;
        email: string;
        avatar: string | null;
    }[];
}>;
export type MessageType = z.infer<typeof MessageSchema>;
export type GetMessagesResType = z.infer<typeof GetMessagesResSchema>;
export type GetMessagesQueryType = z.infer<typeof GetMessagesQuerySchema>;
export type CreateMessageBodyType = z.infer<typeof CreateMessageBodySchema>;
export type GetUserResType = z.infer<typeof GetUsersSchema>;
