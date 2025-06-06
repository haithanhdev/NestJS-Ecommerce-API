declare const GetProductTranslationDetailResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<{
    id: import("zod").ZodNumber;
    productId: import("zod").ZodNumber;
    name: import("zod").ZodString;
    description: import("zod").ZodString;
    languageId: import("zod").ZodString;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "strip", import("zod").ZodTypeAny>, {
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
export declare class GetProductTranslationDetailResDTO extends GetProductTranslationDetailResDTO_base {
}
declare const GetProductTranslationParamsDTO_base: import("nestjs-zod").ZodDto<{
    productTranslationId: number;
}, import("zod").ZodObjectDef<{
    productTranslationId: import("zod").ZodNumber;
}, "strict", import("zod").ZodTypeAny>, {
    productTranslationId: number;
}>;
export declare class GetProductTranslationParamsDTO extends GetProductTranslationParamsDTO_base {
}
declare const CreateProductTranslationBodyDTO_base: import("nestjs-zod").ZodDto<{
    name: string;
    description: string;
    productId: number;
    languageId: string;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodNumber;
    productId: import("zod").ZodNumber;
    name: import("zod").ZodString;
    description: import("zod").ZodString;
    languageId: import("zod").ZodString;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "name" | "description" | "productId" | "languageId">, "strict", import("zod").ZodTypeAny>, {
    name: string;
    description: string;
    productId: number;
    languageId: string;
}>;
export declare class CreateProductTranslationBodyDTO extends CreateProductTranslationBodyDTO_base {
}
declare const UpdateProductTranslationBodyDTO_base: import("nestjs-zod").ZodDto<{
    name: string;
    description: string;
    productId: number;
    languageId: string;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodNumber;
    productId: import("zod").ZodNumber;
    name: import("zod").ZodString;
    description: import("zod").ZodString;
    languageId: import("zod").ZodString;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "name" | "description" | "productId" | "languageId">, "strict", import("zod").ZodTypeAny>, {
    name: string;
    description: string;
    productId: number;
    languageId: string;
}>;
export declare class UpdateProductTranslationBodyDTO extends UpdateProductTranslationBodyDTO_base {
}
export {};
