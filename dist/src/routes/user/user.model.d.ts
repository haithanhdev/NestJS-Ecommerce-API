import { z } from 'zod';
export declare const GetUsersResSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<Omit<{
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
    }, "password" | "totpSecret">, {
        role: z.ZodObject<Pick<{
            id: z.ZodNumber;
            name: z.ZodString;
            description: z.ZodString;
            isActive: z.ZodDefault<z.ZodBoolean>;
            createdById: z.ZodNullable<z.ZodNumber>;
            updatedById: z.ZodNullable<z.ZodNumber>;
            deletedById: z.ZodNullable<z.ZodNumber>;
            deletedAt: z.ZodNullable<z.ZodDate>;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
        }, "id" | "name">, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>;
    }>, "strip", z.ZodTypeAny, {
        role: {
            id: number;
            name: string;
        };
        status: "ACTIVE" | "INACTIVE" | "BLOCKED";
        roleId: number;
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phoneNumber: string;
        avatar: string | null;
    }, {
        role: {
            id: number;
            name: string;
        };
        status: "ACTIVE" | "INACTIVE" | "BLOCKED";
        roleId: number;
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        avatar: string | null;
        phoneNumber?: string | undefined;
    }>, "many">;
    totalItems: z.ZodNumber;
    page: z.ZodNumber;
    limit: z.ZodNumber;
    totalPages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    data: {
        role: {
            id: number;
            name: string;
        };
        status: "ACTIVE" | "INACTIVE" | "BLOCKED";
        roleId: number;
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phoneNumber: string;
        avatar: string | null;
    }[];
    limit: number;
    page: number;
    totalItems: number;
    totalPages: number;
}, {
    data: {
        role: {
            id: number;
            name: string;
        };
        status: "ACTIVE" | "INACTIVE" | "BLOCKED";
        roleId: number;
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        avatar: string | null;
        phoneNumber?: string | undefined;
    }[];
    limit: number;
    page: number;
    totalItems: number;
    totalPages: number;
}>;
export declare const GetUsersQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    limit: number;
    page: number;
}, {
    limit?: number | undefined;
    page?: number | undefined;
}>;
export declare const GetUserParamsSchema: z.ZodObject<{
    userId: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    userId: number;
}, {
    userId: number;
}>;
export declare const CreateUserBodySchema: z.ZodObject<Pick<{
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
}, "status" | "roleId" | "name" | "email" | "password" | "phoneNumber" | "avatar">, "strict", z.ZodTypeAny, {
    status: "ACTIVE" | "INACTIVE" | "BLOCKED";
    roleId: number;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    avatar: string | null;
}, {
    status: "ACTIVE" | "INACTIVE" | "BLOCKED";
    roleId: number;
    name: string;
    email: string;
    password: string;
    avatar: string | null;
    phoneNumber?: string | undefined;
}>;
export declare const UpdateUserBodySchema: z.ZodObject<Omit<Pick<{
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
}, "status" | "roleId" | "name" | "email" | "password" | "phoneNumber" | "avatar">, "email" | "password">, "strict", z.ZodTypeAny, {
    status: "ACTIVE" | "INACTIVE" | "BLOCKED";
    roleId: number;
    name: string;
    phoneNumber: string;
    avatar: string | null;
}, {
    status: "ACTIVE" | "INACTIVE" | "BLOCKED";
    roleId: number;
    name: string;
    avatar: string | null;
    phoneNumber?: string | undefined;
}>;
export type GetUsersResType = z.infer<typeof GetUsersResSchema>;
export type GetUsersQueryType = z.infer<typeof GetUsersQuerySchema>;
export type GetUserParamsType = z.infer<typeof GetUserParamsSchema>;
export type CreateUserBodyType = z.infer<typeof CreateUserBodySchema>;
export type UpdateUserBodyType = z.infer<typeof UpdateUserBodySchema>;
