import { z } from 'zod';
export declare const LanguageSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    createdById: number | null;
    updatedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}, {
    id: string;
    name: string;
    createdById: number | null;
    updatedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const GetLanguagesResSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        createdById: z.ZodNullable<z.ZodNumber>;
        updatedById: z.ZodNullable<z.ZodNumber>;
        deletedAt: z.ZodNullable<z.ZodDate>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, {
        id: string;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>, "many">;
    totalItems: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    data: {
        id: string;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }[];
    totalItems: number;
}, {
    data: {
        id: string;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }[];
    totalItems: number;
}>;
export declare const GetLanguageParamsSchema: z.ZodObject<{
    languageId: z.ZodString;
}, "strict", z.ZodTypeAny, {
    languageId: string;
}, {
    languageId: string;
}>;
export declare const GetLanguageDetailResSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    createdById: number | null;
    updatedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}, {
    id: string;
    name: string;
    createdById: number | null;
    updatedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const CreateLanguageBodySchema: z.ZodObject<Pick<{
    id: z.ZodString;
    name: z.ZodString;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "id" | "name">, "strict", z.ZodTypeAny, {
    id: string;
    name: string;
}, {
    id: string;
    name: string;
}>;
export declare const UpdateLanguageBodySchema: z.ZodObject<Pick<{
    id: z.ZodString;
    name: z.ZodString;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "name">, "strict", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export type LanguageType = z.infer<typeof LanguageSchema>;
export type GetLanguagesResType = z.infer<typeof GetLanguagesResSchema>;
export type GetLanguageDetailResType = z.infer<typeof GetLanguageDetailResSchema>;
export type CreateLanguageBodyType = z.infer<typeof CreateLanguageBodySchema>;
export type GetLanguageParamsType = z.infer<typeof GetLanguageParamsSchema>;
export type UpdateLanguageBodyType = z.infer<typeof UpdateLanguageBodySchema>;
