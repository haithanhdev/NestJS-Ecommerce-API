declare const GetPermissionsResDTO_base: import("nestjs-zod").ZodDto<{
    data: {
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
    limit: number;
    page: number;
    totalItems: number;
    totalPages: number;
}, import("zod").ZodObjectDef<{
    data: import("zod").ZodArray<import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        name: import("zod").ZodString;
        description: import("zod").ZodString;
        module: import("zod").ZodString;
        path: import("zod").ZodString;
        method: import("zod").ZodEnum<["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"]>;
        createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
        updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
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
    totalItems: import("zod").ZodNumber;
    page: import("zod").ZodNumber;
    limit: import("zod").ZodNumber;
    totalPages: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny>, {
    data: {
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
    limit: number;
    page: number;
    totalItems: number;
    totalPages: number;
}>;
export declare class GetPermissionsResDTO extends GetPermissionsResDTO_base {
}
declare const GetPermissionParamsDTO_base: import("nestjs-zod").ZodDto<{
    permissionId: number;
}, import("zod").ZodObjectDef<{
    permissionId: import("zod").ZodNumber;
}, "strict", import("zod").ZodTypeAny>, {
    permissionId: number;
}>;
export declare class GetPermissionParamsDTO extends GetPermissionParamsDTO_base {
}
declare const GetPermissionDetailResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<{
    id: import("zod").ZodNumber;
    name: import("zod").ZodString;
    description: import("zod").ZodString;
    module: import("zod").ZodString;
    path: import("zod").ZodString;
    method: import("zod").ZodEnum<["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"]>;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "strip", import("zod").ZodTypeAny>, {
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
}>;
export declare class GetPermissionDetailResDTO extends GetPermissionDetailResDTO_base {
}
declare const CreatePermissionBodyDTO_base: import("nestjs-zod").ZodDto<{
    path: string;
    name: string;
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
    module: string;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodNumber;
    name: import("zod").ZodString;
    description: import("zod").ZodString;
    module: import("zod").ZodString;
    path: import("zod").ZodString;
    method: import("zod").ZodEnum<["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"]>;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "path" | "name" | "method" | "module">, "strict", import("zod").ZodTypeAny>, {
    path: string;
    name: string;
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
    module: string;
}>;
export declare class CreatePermissionBodyDTO extends CreatePermissionBodyDTO_base {
}
declare const UpdatePermissionBodyDTO_base: import("nestjs-zod").ZodDto<{
    path: string;
    name: string;
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
    module: string;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodNumber;
    name: import("zod").ZodString;
    description: import("zod").ZodString;
    module: import("zod").ZodString;
    path: import("zod").ZodString;
    method: import("zod").ZodEnum<["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"]>;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "path" | "name" | "method" | "module">, "strict", import("zod").ZodTypeAny>, {
    path: string;
    name: string;
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
    module: string;
}>;
export declare class UpdatePermissionBodyDTO extends UpdatePermissionBodyDTO_base {
}
declare const GetPermissionsQueryDTO_base: import("nestjs-zod").ZodDto<{
    limit: number;
    page: number;
}, import("zod").ZodObjectDef<{
    page: import("zod").ZodDefault<import("zod").ZodNumber>;
    limit: import("zod").ZodDefault<import("zod").ZodNumber>;
}, "strict", import("zod").ZodTypeAny>, {
    limit?: number | undefined;
    page?: number | undefined;
}>;
export declare class GetPermissionsQueryDTO extends GetPermissionsQueryDTO_base {
}
export {};
