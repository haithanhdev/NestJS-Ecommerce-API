import { z } from 'zod';
export declare const UpsertSKUBodySchema: z.ZodObject<z.objectUtil.extendShape<Pick<{
    id: z.ZodNumber;
    value: z.ZodString;
    price: z.ZodNumber;
    stock: z.ZodNumber;
    image: z.ZodString;
    productId: z.ZodNumber;
    createdById: z.ZodNumber;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "value" | "image" | "price" | "stock">, {
    id: z.ZodOptional<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    value: string;
    image: string;
    price: number;
    stock: number;
    id?: number | undefined;
}, {
    value: string;
    image: string;
    price: number;
    stock: number;
    id?: number | undefined;
}>;
export type UpsertSKUBodyType = z.infer<typeof UpsertSKUBodySchema>;
