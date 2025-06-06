import { BrandTranslationSchema } from 'src/shared/models/shared-brand-translation.model';
import { z } from 'zod';
export declare const GetBrandTranslationParamsSchema: z.ZodObject<{
    brandTranslationId: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    brandTranslationId: number;
}, {
    brandTranslationId: number;
}>;
export declare const GetBrandTranslationDetailResSchema: z.ZodObject<{
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
}>;
export declare const CreateBrandTranslationBodySchema: z.ZodObject<Pick<{
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
}, "name" | "description" | "languageId" | "brandId">, "strict", z.ZodTypeAny, {
    name: string;
    description: string;
    languageId: string;
    brandId: number;
}, {
    name: string;
    description: string;
    languageId: string;
    brandId: number;
}>;
export declare const UpdateBrandTranslationBodySchema: z.ZodObject<Pick<{
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
}, "name" | "description" | "languageId" | "brandId">, "strict", z.ZodTypeAny, {
    name: string;
    description: string;
    languageId: string;
    brandId: number;
}, {
    name: string;
    description: string;
    languageId: string;
    brandId: number;
}>;
export type BrandTranslationType = z.infer<typeof BrandTranslationSchema>;
export type GetBrandTranslationDetailResType = z.infer<typeof GetBrandTranslationDetailResSchema>;
export type CreateBrandTranslationBodyType = z.infer<typeof CreateBrandTranslationBodySchema>;
export type UpdateBrandTranslationBodyType = z.infer<typeof UpdateBrandTranslationBodySchema>;
