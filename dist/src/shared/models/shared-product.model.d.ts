import { z } from 'zod';
export declare const VariantSchema: z.ZodObject<{
    value: z.ZodString;
    options: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    value: string;
    options: string[];
}, {
    value: string;
    options: string[];
}>;
export declare const VariantsSchema: z.ZodEffects<z.ZodArray<z.ZodObject<{
    value: z.ZodString;
    options: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    value: string;
    options: string[];
}, {
    value: string;
    options: string[];
}>, "many">, {
    value: string;
    options: string[];
}[], {
    value: string;
    options: string[];
}[]>;
export declare const ProductSchema: z.ZodObject<{
    id: z.ZodNumber;
    publishedAt: z.ZodNullable<z.ZodDate>;
    name: z.ZodString;
    basePrice: z.ZodNumber;
    virtualPrice: z.ZodNumber;
    brandId: z.ZodNumber;
    images: z.ZodArray<z.ZodString, "many">;
    variants: z.ZodEffects<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        options: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        value: string;
        options: string[];
    }, {
        value: string;
        options: string[];
    }>, "many">, {
        value: string;
        options: string[];
    }[], {
        value: string;
        options: string[];
    }[]>;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    createdById: number | null;
    updatedById: number | null;
    deletedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    brandId: number;
    variants: {
        value: string;
        options: string[];
    }[];
    publishedAt: Date | null;
    basePrice: number;
    virtualPrice: number;
    images: string[];
}, {
    id: number;
    name: string;
    createdById: number | null;
    updatedById: number | null;
    deletedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    brandId: number;
    variants: {
        value: string;
        options: string[];
    }[];
    publishedAt: Date | null;
    basePrice: number;
    virtualPrice: number;
    images: string[];
}>;
export type ProductType = z.infer<typeof ProductSchema>;
export type VariantsType = z.infer<typeof VariantsSchema>;
