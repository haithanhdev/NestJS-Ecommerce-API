import { UpdateProfileResDTO } from 'src/shared/dtos/shared-user.dto';
declare const GetUsersResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<{
    data: import("zod").ZodArray<import("zod").ZodObject<import("zod").objectUtil.extendShape<Omit<{
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
    }, "password" | "totpSecret">, {
        role: import("zod").ZodObject<Pick<{
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
        }, "id" | "name">, "strip", import("zod").ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
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
    totalItems: import("zod").ZodNumber;
    page: import("zod").ZodNumber;
    limit: import("zod").ZodNumber;
    totalPages: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny>, {
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
export declare class GetUsersResDTO extends GetUsersResDTO_base {
}
declare const GetUsersQueryDTO_base: import("nestjs-zod").ZodDto<{
    limit: number;
    page: number;
}, import("zod").ZodObjectDef<{
    page: import("zod").ZodDefault<import("zod").ZodNumber>;
    limit: import("zod").ZodDefault<import("zod").ZodNumber>;
}, "strict", import("zod").ZodTypeAny>, {
    limit?: number | undefined;
    page?: number | undefined;
}>;
export declare class GetUsersQueryDTO extends GetUsersQueryDTO_base {
}
declare const GetUserParamsDTO_base: import("nestjs-zod").ZodDto<{
    userId: number;
}, import("zod").ZodObjectDef<{
    userId: import("zod").ZodNumber;
}, "strict", import("zod").ZodTypeAny>, {
    userId: number;
}>;
export declare class GetUserParamsDTO extends GetUserParamsDTO_base {
}
declare const CreateUserBodyDTO_base: import("nestjs-zod").ZodDto<{
    status: "ACTIVE" | "INACTIVE" | "BLOCKED";
    roleId: number;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    avatar: string | null;
}, import("zod").ZodObjectDef<Pick<{
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
}, "status" | "roleId" | "name" | "email" | "password" | "phoneNumber" | "avatar">, "strict", import("zod").ZodTypeAny>, {
    status: "ACTIVE" | "INACTIVE" | "BLOCKED";
    roleId: number;
    name: string;
    email: string;
    password: string;
    avatar: string | null;
    phoneNumber?: string | undefined;
}>;
export declare class CreateUserBodyDTO extends CreateUserBodyDTO_base {
}
declare const UpdateUserBodyDTO_base: import("nestjs-zod").ZodDto<{
    status: "ACTIVE" | "INACTIVE" | "BLOCKED";
    roleId: number;
    name: string;
    phoneNumber: string;
    avatar: string | null;
}, import("zod").ZodObjectDef<Omit<Pick<{
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
}, "status" | "roleId" | "name" | "email" | "password" | "phoneNumber" | "avatar">, "email" | "password">, "strict", import("zod").ZodTypeAny>, {
    status: "ACTIVE" | "INACTIVE" | "BLOCKED";
    roleId: number;
    name: string;
    avatar: string | null;
    phoneNumber?: string | undefined;
}>;
export declare class UpdateUserBodyDTO extends UpdateUserBodyDTO_base {
}
export declare class CreateUserResDTO extends UpdateProfileResDTO {
}
export {};
