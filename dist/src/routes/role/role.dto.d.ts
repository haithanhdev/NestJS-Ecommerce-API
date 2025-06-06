declare const GetRolesResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<{
    data: import("zod").ZodArray<import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        name: import("zod").ZodString;
        description: import("zod").ZodString;
        isActive: import("zod").ZodDefault<import("zod").ZodBoolean>;
        createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
        updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
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
    totalItems: import("zod").ZodNumber;
    page: import("zod").ZodNumber;
    limit: import("zod").ZodNumber;
    totalPages: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny>, {
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
export declare class GetRolesResDTO extends GetRolesResDTO_base {
}
declare const GetRoleParamsDTO_base: import("nestjs-zod").ZodDto<{
    roleId: number;
}, import("zod").ZodObjectDef<{
    roleId: import("zod").ZodNumber;
}, "strict", import("zod").ZodTypeAny>, {
    roleId: number;
}>;
export declare class GetRoleParamsDTO extends GetRoleParamsDTO_base {
}
declare const GetRoleDetailResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<import("zod").objectUtil.extendShape<{
    id: import("zod").ZodNumber;
    name: import("zod").ZodString;
    description: import("zod").ZodString;
    isActive: import("zod").ZodDefault<import("zod").ZodBoolean>;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, {
    permissions: import("zod").ZodArray<import("zod").ZodObject<{
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
}>, "strip", import("zod").ZodTypeAny>, {
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
export declare class GetRoleDetailResDTO extends GetRoleDetailResDTO_base {
}
declare const CreateRoleBodyDTO_base: import("nestjs-zod").ZodDto<{
    name: string;
    description: string;
    isActive: boolean;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodNumber;
    name: import("zod").ZodString;
    description: import("zod").ZodString;
    isActive: import("zod").ZodDefault<import("zod").ZodBoolean>;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "name" | "description" | "isActive">, "strict", import("zod").ZodTypeAny>, {
    name: string;
    description: string;
    isActive?: boolean | undefined;
}>;
export declare class CreateRoleBodyDTO extends CreateRoleBodyDTO_base {
}
declare const CreateRoleResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<{
    id: import("zod").ZodNumber;
    name: import("zod").ZodString;
    description: import("zod").ZodString;
    isActive: import("zod").ZodDefault<import("zod").ZodBoolean>;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "strip", import("zod").ZodTypeAny>, {
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
export declare class CreateRoleResDTO extends CreateRoleResDTO_base {
}
declare const UpdateRoleBodyDTO_base: import("nestjs-zod").ZodDto<{
    name: string;
    description: string;
    isActive: boolean;
    permissionIds: number[];
}, import("zod").ZodObjectDef<import("zod").objectUtil.extendShape<Pick<{
    id: import("zod").ZodNumber;
    name: import("zod").ZodString;
    description: import("zod").ZodString;
    isActive: import("zod").ZodDefault<import("zod").ZodBoolean>;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "name" | "description" | "isActive">, {
    permissionIds: import("zod").ZodArray<import("zod").ZodNumber, "many">;
}>, "strict", import("zod").ZodTypeAny>, {
    name: string;
    description: string;
    permissionIds: number[];
    isActive?: boolean | undefined;
}>;
export declare class UpdateRoleBodyDTO extends UpdateRoleBodyDTO_base {
}
declare const GetRolesQueryDTO_base: import("nestjs-zod").ZodDto<{
    limit: number;
    page: number;
}, import("zod").ZodObjectDef<{
    page: import("zod").ZodDefault<import("zod").ZodNumber>;
    limit: import("zod").ZodDefault<import("zod").ZodNumber>;
}, "strict", import("zod").ZodTypeAny>, {
    limit?: number | undefined;
    page?: number | undefined;
}>;
export declare class GetRolesQueryDTO extends GetRolesQueryDTO_base {
}
export {};
