import { CategoryIncludeTranslationSchema, CategorySchema } from 'src/shared/models/shared-category.model';
import { z } from 'zod';
export declare const GetAllCategoriesResSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodNumber;
        parentCategoryId: z.ZodNullable<z.ZodNumber>;
        name: z.ZodString;
        logo: z.ZodNullable<z.ZodString>;
        createdById: z.ZodNullable<z.ZodNumber>;
        updatedById: z.ZodNullable<z.ZodNumber>;
        deletedById: z.ZodNullable<z.ZodNumber>;
        deletedAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, {
        categoryTranslations: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            categoryId: z.ZodNumber;
            languageId: z.ZodString;
            name: z.ZodString;
            description: z.ZodString;
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
    }>, "strip", z.ZodTypeAny, {
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
    totalItems: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
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
}, {
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
export declare const GetAllCategoriesQuerySchema: z.ZodObject<{
    parentCategoryId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    parentCategoryId?: number | undefined;
}, {
    parentCategoryId?: number | undefined;
}>;
export declare const GetCategoryParamsSchema: z.ZodObject<{
    categoryId: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    categoryId: number;
}, {
    categoryId: number;
}>;
export declare const GetCategoryDetailResSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNumber;
    parentCategoryId: z.ZodNullable<z.ZodNumber>;
    name: z.ZodString;
    logo: z.ZodNullable<z.ZodString>;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, {
    categoryTranslations: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        categoryId: z.ZodNumber;
        languageId: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
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
}>, "strip", z.ZodTypeAny, {
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
}>;
export declare const CreateCategoryBodySchema: z.ZodObject<Pick<{
    id: z.ZodNumber;
    parentCategoryId: z.ZodNullable<z.ZodNumber>;
    name: z.ZodString;
    logo: z.ZodNullable<z.ZodString>;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "name" | "logo" | "parentCategoryId">, "strict", z.ZodTypeAny, {
    name: string;
    logo: string | null;
    parentCategoryId: number | null;
}, {
    name: string;
    logo: string | null;
    parentCategoryId: number | null;
}>;
export declare const UpdateCategoryBodySchema: z.ZodObject<Pick<{
    id: z.ZodNumber;
    parentCategoryId: z.ZodNullable<z.ZodNumber>;
    name: z.ZodString;
    logo: z.ZodNullable<z.ZodString>;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "name" | "logo" | "parentCategoryId">, "strict", z.ZodTypeAny, {
    name: string;
    logo: string | null;
    parentCategoryId: number | null;
}, {
    name: string;
    logo: string | null;
    parentCategoryId: number | null;
}>;
export type CategoryType = z.infer<typeof CategorySchema>;
export type CategoryIncludeTranslationType = z.infer<typeof CategoryIncludeTranslationSchema>;
export type GetAllCategoriesResType = z.infer<typeof GetAllCategoriesResSchema>;
export type GetAllCategoriesQueryType = z.infer<typeof GetAllCategoriesQuerySchema>;
export type GetCategoryDetailResType = z.infer<typeof GetCategoryDetailResSchema>;
export type CreateCategoryBodyType = z.infer<typeof CreateCategoryBodySchema>;
export type GetCategoryParamsType = z.infer<typeof GetCategoryParamsSchema>;
export type UpdateCategoryBodyType = z.infer<typeof UpdateCategoryBodySchema>;
