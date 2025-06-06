import { BrandIncludeTranslationSchema, BrandSchema } from 'src/shared/models/shared-brand.model';
import { z } from 'zod';
export declare const GetBrandsResSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodNumber;
        name: z.ZodString;
        logo: z.ZodString;
        createdById: z.ZodNullable<z.ZodNumber>;
        updatedById: z.ZodNullable<z.ZodNumber>;
        deletedById: z.ZodNullable<z.ZodNumber>;
        deletedAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, {
        brandTranslations: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            brandId: z.ZodNumber;
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
            brandId: number;
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
            brandId: number;
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
        brandTranslations: {
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
            brandId: number;
        }[];
        logo: string;
    }, {
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        brandTranslations: {
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
            brandId: number;
        }[];
        logo: string;
    }>, "many">;
    totalItems: z.ZodNumber;
    page: z.ZodNumber;
    limit: z.ZodNumber;
    totalPages: z.ZodNumber;
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
        brandTranslations: {
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
            brandId: number;
        }[];
        logo: string;
    }[];
    limit: number;
    page: number;
    totalItems: number;
    totalPages: number;
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
        brandTranslations: {
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
            brandId: number;
        }[];
        logo: string;
    }[];
    limit: number;
    page: number;
    totalItems: number;
    totalPages: number;
}>;
export declare const GetBrandParamsSchema: z.ZodObject<{
    brandId: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    brandId: number;
}, {
    brandId: number;
}>;
export declare const GetBrandDetailResSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNumber;
    name: z.ZodString;
    logo: z.ZodString;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, {
    brandTranslations: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        brandId: z.ZodNumber;
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
        brandId: number;
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
        brandId: number;
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
    brandTranslations: {
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
        brandId: number;
    }[];
    logo: string;
}, {
    id: number;
    name: string;
    createdById: number | null;
    updatedById: number | null;
    deletedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    brandTranslations: {
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
        brandId: number;
    }[];
    logo: string;
}>;
export declare const CreateBrandBodySchema: z.ZodObject<Pick<{
    id: z.ZodNumber;
    name: z.ZodString;
    logo: z.ZodString;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "name" | "logo">, "strict", z.ZodTypeAny, {
    name: string;
    logo: string;
}, {
    name: string;
    logo: string;
}>;
export declare const UpdateBrandBodySchema: z.ZodObject<Pick<{
    id: z.ZodNumber;
    name: z.ZodString;
    logo: z.ZodString;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "name" | "logo">, "strict", z.ZodTypeAny, {
    name: string;
    logo: string;
}, {
    name: string;
    logo: string;
}>;
export type BrandType = z.infer<typeof BrandSchema>;
export type BrandIncludeTranslationType = z.infer<typeof BrandIncludeTranslationSchema>;
export type GetBrandsResType = z.infer<typeof GetBrandsResSchema>;
export type GetBrandDetailResType = z.infer<typeof GetBrandDetailResSchema>;
export type CreateBrandBodyType = z.infer<typeof CreateBrandBodySchema>;
export type GetBrandParamsType = z.infer<typeof GetBrandParamsSchema>;
export type UpdateBrandBodyType = z.infer<typeof UpdateBrandBodySchema>;
