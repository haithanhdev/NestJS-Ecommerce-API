declare const GetCategoryTranslationDetailResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<{
    id: import("zod").ZodNumber;
    categoryId: import("zod").ZodNumber;
    languageId: import("zod").ZodString;
    name: import("zod").ZodString;
    description: import("zod").ZodString;
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
    languageId: string;
    categoryId: number;
}>;
export declare class GetCategoryTranslationDetailResDTO extends GetCategoryTranslationDetailResDTO_base {
}
declare const GetCategoryTranslationParamsDTO_base: import("nestjs-zod").ZodDto<{
    categoryTranslationId: number;
}, import("zod").ZodObjectDef<{
    categoryTranslationId: import("zod").ZodNumber;
}, "strict", import("zod").ZodTypeAny>, {
    categoryTranslationId: number;
}>;
export declare class GetCategoryTranslationParamsDTO extends GetCategoryTranslationParamsDTO_base {
}
declare const CreateCategoryTranslationBodyDTO_base: import("nestjs-zod").ZodDto<{
    name: string;
    description: string;
    languageId: string;
    categoryId: number;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodNumber;
    categoryId: import("zod").ZodNumber;
    languageId: import("zod").ZodString;
    name: import("zod").ZodString;
    description: import("zod").ZodString;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "name" | "description" | "languageId" | "categoryId">, "strict", import("zod").ZodTypeAny>, {
    name: string;
    description: string;
    languageId: string;
    categoryId: number;
}>;
export declare class CreateCategoryTranslationBodyDTO extends CreateCategoryTranslationBodyDTO_base {
}
declare const UpdateCategoryTranslationBodyDTO_base: import("nestjs-zod").ZodDto<{
    name: string;
    description: string;
    languageId: string;
    categoryId: number;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodNumber;
    categoryId: import("zod").ZodNumber;
    languageId: import("zod").ZodString;
    name: import("zod").ZodString;
    description: import("zod").ZodString;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "name" | "description" | "languageId" | "categoryId">, "strict", import("zod").ZodTypeAny>, {
    name: string;
    description: string;
    languageId: string;
    categoryId: number;
}>;
export declare class UpdateCategoryTranslationBodyDTO extends UpdateCategoryTranslationBodyDTO_base {
}
export {};
