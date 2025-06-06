declare const GetAllCategoriesResDTO_base: import("nestjs-zod").ZodDto<{
    data: {
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        categoryTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            languageId: string;
            categoryId: number;
        }[];
        logo: string | null;
        parentCategoryId: number | null;
    }[];
    totalItems: number;
}, import("zod").ZodObjectDef<{
    data: import("zod").ZodArray<import("zod").ZodObject<import("zod").objectUtil.extendShape<{
        id: import("zod").ZodNumber;
        parentCategoryId: import("zod").ZodNullable<import("zod").ZodNumber>;
        name: import("zod").ZodString;
        logo: import("zod").ZodNullable<import("zod").ZodString>;
        createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
        updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, {
        categoryTranslations: import("zod").ZodArray<import("zod").ZodObject<{
            id: import("zod").ZodNumber;
            categoryId: import("zod").ZodNumber;
            languageId: import("zod").ZodString;
            name: import("zod").ZodString;
            description: import("zod").ZodString;
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
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            languageId: string;
            categoryId: number;
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
            languageId: string;
            categoryId: number;
        }>, "many">;
    }>, "strip", import("zod").ZodTypeAny, {
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        categoryTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            languageId: string;
            categoryId: number;
        }[];
        logo: string | null;
        parentCategoryId: number | null;
    }, {
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        categoryTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            languageId: string;
            categoryId: number;
        }[];
        logo: string | null;
        parentCategoryId: number | null;
    }>, "many">;
    totalItems: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny>, {
    data: {
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        categoryTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            languageId: string;
            categoryId: number;
        }[];
        logo: string | null;
        parentCategoryId: number | null;
    }[];
    totalItems: number;
}>;
export declare class GetAllCategoriesResDTO extends GetAllCategoriesResDTO_base {
}
declare const GetAllCategoriesQueryDTO_base: import("nestjs-zod").ZodDto<{
    parentCategoryId?: number | undefined;
}, import("zod").ZodObjectDef<{
    parentCategoryId: import("zod").ZodOptional<import("zod").ZodNumber>;
}, "strip", import("zod").ZodTypeAny>, {
    parentCategoryId?: number | undefined;
}>;
export declare class GetAllCategoriesQueryDTO extends GetAllCategoriesQueryDTO_base {
}
declare const GetCategoryParamsDTO_base: import("nestjs-zod").ZodDto<{
    categoryId: number;
}, import("zod").ZodObjectDef<{
    categoryId: import("zod").ZodNumber;
}, "strict", import("zod").ZodTypeAny>, {
    categoryId: number;
}>;
export declare class GetCategoryParamsDTO extends GetCategoryParamsDTO_base {
}
declare const GetCategoryDetailResDTO_base: import("nestjs-zod").ZodDto<{
    id: number;
    name: string;
    createdById: number | null;
    updatedById: number | null;
    deletedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    categoryTranslations: {
        id: number;
        name: string;
        description: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        languageId: string;
        categoryId: number;
    }[];
    logo: string | null;
    parentCategoryId: number | null;
}, import("zod").ZodObjectDef<import("zod").objectUtil.extendShape<{
    id: import("zod").ZodNumber;
    parentCategoryId: import("zod").ZodNullable<import("zod").ZodNumber>;
    name: import("zod").ZodString;
    logo: import("zod").ZodNullable<import("zod").ZodString>;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, {
    categoryTranslations: import("zod").ZodArray<import("zod").ZodObject<{
        id: import("zod").ZodNumber;
        categoryId: import("zod").ZodNumber;
        languageId: import("zod").ZodString;
        name: import("zod").ZodString;
        description: import("zod").ZodString;
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
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        languageId: string;
        categoryId: number;
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
        languageId: string;
        categoryId: number;
    }>, "many">;
}>, "strip", import("zod").ZodTypeAny>, {
    id: number;
    name: string;
    createdById: number | null;
    updatedById: number | null;
    deletedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    categoryTranslations: {
        id: number;
        name: string;
        description: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        languageId: string;
        categoryId: number;
    }[];
    logo: string | null;
    parentCategoryId: number | null;
}>;
export declare class GetCategoryDetailResDTO extends GetCategoryDetailResDTO_base {
}
declare const CreateCategoryBodyDTO_base: import("nestjs-zod").ZodDto<{
    name: string;
    logo: string | null;
    parentCategoryId: number | null;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodNumber;
    parentCategoryId: import("zod").ZodNullable<import("zod").ZodNumber>;
    name: import("zod").ZodString;
    logo: import("zod").ZodNullable<import("zod").ZodString>;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "name" | "logo" | "parentCategoryId">, "strict", import("zod").ZodTypeAny>, {
    name: string;
    logo: string | null;
    parentCategoryId: number | null;
}>;
export declare class CreateCategoryBodyDTO extends CreateCategoryBodyDTO_base {
}
declare const UpdateCategoryBodyDTO_base: import("nestjs-zod").ZodDto<{
    name: string;
    logo: string | null;
    parentCategoryId: number | null;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodNumber;
    parentCategoryId: import("zod").ZodNullable<import("zod").ZodNumber>;
    name: import("zod").ZodString;
    logo: import("zod").ZodNullable<import("zod").ZodString>;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "name" | "logo" | "parentCategoryId">, "strict", import("zod").ZodTypeAny>, {
    name: string;
    logo: string | null;
    parentCategoryId: number | null;
}>;
export declare class UpdateCategoryBodyDTO extends UpdateCategoryBodyDTO_base {
}
export {};
