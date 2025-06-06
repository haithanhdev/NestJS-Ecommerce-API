import { z } from 'zod';
export declare const GetProductTranslationParamsSchema: z.ZodObject<{
    productTranslationId: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    productTranslationId: number;
}, {
    productTranslationId: number;
}>;
export declare const GetProductTranslationDetailResSchema: z.ZodObject<{
    id: z.ZodNumber;
    productId: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodString;
    languageId: z.ZodString;
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
    productId: number;
    languageId: string;
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
    productId: number;
    languageId: string;
}>;
export declare const CreateProductTranslationBodySchema: z.ZodObject<Pick<{
    id: z.ZodNumber;
    productId: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodString;
    languageId: z.ZodString;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "name" | "description" | "productId" | "languageId">, "strict", z.ZodTypeAny, {
    name: string;
    description: string;
    productId: number;
    languageId: string;
}, {
    name: string;
    description: string;
    productId: number;
    languageId: string;
}>;
export declare const UpdateProductTranslationBodySchema: z.ZodObject<Pick<{
    id: z.ZodNumber;
    productId: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodString;
    languageId: z.ZodString;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "name" | "description" | "productId" | "languageId">, "strict", z.ZodTypeAny, {
    name: string;
    description: string;
    productId: number;
    languageId: string;
}, {
    name: string;
    description: string;
    productId: number;
    languageId: string;
}>;
export declare const DeleteProductTranslationParamsSchema: z.ZodObject<{
    productTranslationId: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    productTranslationId: number;
}, {
    productTranslationId: number;
}>;
export type GetProductTranslationParamsType = z.infer<typeof GetProductTranslationParamsSchema>;
export type GetProductTranslationDetailResType = z.infer<typeof GetProductTranslationDetailResSchema>;
export type CreateProductTranslationBodyType = z.infer<typeof CreateProductTranslationBodySchema>;
export type UpdateProductTranslationBodyType = z.infer<typeof UpdateProductTranslationBodySchema>;
export type DeleteProductTranslationParamsType = z.infer<typeof DeleteProductTranslationParamsSchema>;
