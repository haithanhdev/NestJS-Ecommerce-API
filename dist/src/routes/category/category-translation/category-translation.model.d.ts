import { CategoryTranslationSchema } from 'src/shared/models/shared-category-translation.model';
import { z } from 'zod';
export declare const GetCategoryTranslationParamsSchema: z.ZodObject<{
    categoryTranslationId: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    categoryTranslationId: number;
}, {
    categoryTranslationId: number;
}>;
export declare const GetCategoryTranslationDetailResSchema: z.ZodObject<{
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
}>;
export declare const CreateCategoryTranslationBodySchema: z.ZodObject<Pick<{
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
}, "name" | "description" | "languageId" | "categoryId">, "strict", z.ZodTypeAny, {
    name: string;
    description: string;
    languageId: string;
    categoryId: number;
}, {
    name: string;
    description: string;
    languageId: string;
    categoryId: number;
}>;
export declare const UpdateCategoryTranslationBodySchema: z.ZodObject<Pick<{
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
}, "name" | "description" | "languageId" | "categoryId">, "strict", z.ZodTypeAny, {
    name: string;
    description: string;
    languageId: string;
    categoryId: number;
}, {
    name: string;
    description: string;
    languageId: string;
    categoryId: number;
}>;
export type CategoryTranslationType = z.infer<typeof CategoryTranslationSchema>;
export type GetCategoryTranslationDetailResType = z.infer<typeof GetCategoryTranslationDetailResSchema>;
export type CreateCategoryTranslationBodyType = z.infer<typeof CreateCategoryTranslationBodySchema>;
export type UpdateCategoryTranslationBodyType = z.infer<typeof UpdateCategoryTranslationBodySchema>;
