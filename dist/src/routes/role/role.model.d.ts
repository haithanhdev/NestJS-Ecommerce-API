import { z } from 'zod';
export declare const RoleWithPermissionsSchema: z.ZodObject<z.objectUtil.extendShape<{
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
}, {
    permissions: z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        path: string;
        id: number;
        name: string;
        description: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
        module: string;
    }, {
        path: string;
        id: number;
        name: string;
        description: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
        module: string;
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    createdById: number | null;
    updatedById: number | null;
    deletedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    permissions: {
        path: string;
        id: number;
        name: string;
        description: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
        module: string;
    }[];
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
    permissions: {
        path: string;
        id: number;
        name: string;
        description: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
        module: string;
    }[];
    isActive?: boolean | undefined;
}>;
export declare const GetRolesResSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        description: string;
        isActive: boolean;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
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
        isActive?: boolean | undefined;
    }>, "many">;
    totalItems: z.ZodNumber;
    page: z.ZodNumber;
    limit: z.ZodNumber;
    totalPages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    data: {
        id: number;
        name: string;
        description: string;
        isActive: boolean;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }[];
    limit: number;
    page: number;
    totalItems: number;
    totalPages: number;
}, {
    data: {
        id: number;
        name: string;
        description: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        isActive?: boolean | undefined;
    }[];
    limit: number;
    page: number;
    totalItems: number;
    totalPages: number;
}>;
export declare const GetRolesQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    limit: number;
    page: number;
}, {
    limit?: number | undefined;
    page?: number | undefined;
}>;
export declare const GetRoleParamsSchema: z.ZodObject<{
    roleId: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    roleId: number;
}, {
    roleId: number;
}>;
export declare const GetRoleDetailResSchema: z.ZodObject<z.objectUtil.extendShape<{
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
}, {
    permissions: z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        path: string;
        id: number;
        name: string;
        description: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
        module: string;
    }, {
        path: string;
        id: number;
        name: string;
        description: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
        module: string;
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    createdById: number | null;
    updatedById: number | null;
    deletedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    permissions: {
        path: string;
        id: number;
        name: string;
        description: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
        module: string;
    }[];
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
    permissions: {
        path: string;
        id: number;
        name: string;
        description: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
        module: string;
    }[];
    isActive?: boolean | undefined;
}>;
export declare const CreateRoleBodySchema: z.ZodObject<Pick<{
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
}, "name" | "description" | "isActive">, "strict", z.ZodTypeAny, {
    name: string;
    description: string;
    isActive: boolean;
}, {
    name: string;
    description: string;
    isActive?: boolean | undefined;
}>;
export declare const CreateRoleResSchema: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    createdById: number | null;
    updatedById: number | null;
    deletedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
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
    isActive?: boolean | undefined;
}>;
export declare const UpdateRoleBodySchema: z.ZodObject<z.objectUtil.extendShape<Pick<{
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
}, "name" | "description" | "isActive">, {
    permissionIds: z.ZodArray<z.ZodNumber, "many">;
}>, "strict", z.ZodTypeAny, {
    name: string;
    description: string;
    isActive: boolean;
    permissionIds: number[];
}, {
    name: string;
    description: string;
    permissionIds: number[];
    isActive?: boolean | undefined;
}>;
export type RoleWithPermissionsType = z.infer<typeof RoleWithPermissionsSchema>;
export type GetRolesResType = z.infer<typeof GetRolesResSchema>;
export type GetRolesQueryType = z.infer<typeof GetRolesQuerySchema>;
export type GetRoleDetailResType = z.infer<typeof GetRoleDetailResSchema>;
export type CreateRoleResType = z.infer<typeof CreateRoleResSchema>;
export type CreateRoleBodyType = z.infer<typeof CreateRoleBodySchema>;
export type GetRoleParamsType = z.infer<typeof GetRoleParamsSchema>;
export type UpdateRoleBodyType = z.infer<typeof UpdateRoleBodySchema>;
