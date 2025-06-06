declare const GetUserProfileResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<import("zod").objectUtil.extendShape<{
    id: import("zod").ZodNumber;
    email: import("zod").ZodString;
    name: import("zod").ZodString;
    phoneNumber: import("zod").ZodOptional<import("zod").ZodString>;
    avatar: import("zod").ZodNullable<import("zod").ZodString>;
    status: import("zod").ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
    roleId: import("zod").ZodNumber;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
    totpSecret: import("zod").ZodNullable<import("zod").ZodString>;
}, {
    role: import("zod").ZodObject<import("zod").objectUtil.extendShape<Pick<{
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
    }, "id" | "name">, {
        permissions: import("zod").ZodArray<import("zod").ZodObject<Pick<{
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
        }, "path" | "id" | "name" | "method" | "module">, "strip", import("zod").ZodTypeAny, {
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
    }>, "strip", import("zod").ZodTypeAny, {
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
}>, "strip", import("zod").ZodTypeAny>, {
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
export declare class GetUserProfileResDTO extends GetUserProfileResDTO_base {
}
declare const UpdateProfileResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<Omit<{
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
}, "password" | "totpSecret">, "strip", import("zod").ZodTypeAny>, {
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
export declare class UpdateProfileResDTO extends UpdateProfileResDTO_base {
}
export {};
