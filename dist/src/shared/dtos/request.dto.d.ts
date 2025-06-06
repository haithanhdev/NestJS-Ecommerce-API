declare const EmptyBodyDTO_base: import("nestjs-zod").ZodDto<{}, import("zod").ZodObjectDef<{}, "strict", import("zod").ZodTypeAny>, {}>;
export declare class EmptyBodyDTO extends EmptyBodyDTO_base {
}
declare const PaginationQueryDTO_base: import("nestjs-zod").ZodDto<{
    limit: number;
    page: number;
}, import("zod").ZodObjectDef<{
    page: import("zod").ZodDefault<import("zod").ZodNumber>;
    limit: import("zod").ZodDefault<import("zod").ZodNumber>;
}, "strip", import("zod").ZodTypeAny>, {
    limit?: number | undefined;
    page?: number | undefined;
}>;
export declare class PaginationQueryDTO extends PaginationQueryDTO_base {
}
export {};
