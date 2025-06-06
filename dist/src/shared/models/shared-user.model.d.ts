import { z } from 'zod';
export declare const UserSchema: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
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
    password: string;
    phoneNumber: string;
    avatar: string | null;
    totpSecret: string | null;
}, {
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
    password: string;
    avatar: string | null;
    totpSecret: string | null;
    phoneNumber?: string | undefined;
}>;
export declare const GetUserProfileResSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNumber;
    email: z.ZodString;
    name: z.ZodString;
    phoneNumber: z.ZodOptional<z.ZodString>;
    avatar: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
    roleId: z.ZodNumber;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    totpSecret: z.ZodNullable<z.ZodString>;
}, {
    role: z.ZodObject<z.objectUtil.extendShape<Pick<{
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
    }, "id" | "name">, {
        permissions: z.ZodArray<z.ZodObject<Pick<{
            id: z.ZodNumber;
            name: z.ZodString;
            description: z.ZodString;
            module: z.ZodString;
            path: z.ZodString;
            method: z.ZodEnum<["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"]>;
            createdById: z.ZodNullable<z.ZodNumber>;
            updatedById: z.ZodNullable<z.ZodNumber>;
            deletedById: z.ZodNullable<z.ZodNumber>;
            deletedAt: z.ZodNullable<z.ZodDate>;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
        }, "path" | "id" | "name" | "method" | "module">, "strip", z.ZodTypeAny, {
            path: string;
            id: number;
            name: string;
            method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
            module: string;
        }, {
            path: string;
            id: number;
            name: string;
            method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
            module: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        permissions: {
            path: string;
            id: number;
            name: string;
            method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
            module: string;
        }[];
    }, {
        id: number;
        name: string;
        permissions: {
            path: string;
            id: number;
            name: string;
            method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
            module: string;
        }[];
    }>;
}>, "strip", z.ZodTypeAny, {
    role: {
        id: number;
        name: string;
        permissions: {
            path: string;
            id: number;
            name: string;
            method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
            module: string;
        }[];
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
    totpSecret: string | null;
    phoneNumber?: string | undefined;
}, {
    role: {
        id: number;
        name: string;
        permissions: {
            path: string;
            id: number;
            name: string;
            method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
            module: string;
        }[];
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
    totpSecret: string | null;
    phoneNumber?: string | undefined;
}>;
export declare const UpdateProfileResSchema: z.ZodObject<Omit<{
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
}, "password" | "totpSecret">, "strip", z.ZodTypeAny, {
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
}>;
export type UserType = z.infer<typeof UserSchema>;
export type GetUserProfileResType = z.infer<typeof GetUserProfileResSchema>;
export type UpdateProfileResType = z.infer<typeof UpdateProfileResSchema>;
