import { z } from 'zod';
export declare const EmptyBodySchema: z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>;
export type EmptyBodyType = z.infer<typeof EmptyBodySchema>;
export declare const PaginationQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    page: number;
}, {
    limit?: number | undefined;
    page?: number | undefined;
}>;
export type PaginationQueryType = z.infer<typeof PaginationQuerySchema>;
