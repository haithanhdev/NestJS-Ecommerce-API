declare const GetBrandTranslationDetailResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<{
    id: import("zod").ZodNumber;
    brandId: import("zod").ZodNumber;
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
    brandId: number;
}>;
export declare class GetBrandTranslationDetailResDTO extends GetBrandTranslationDetailResDTO_base {
}
declare const GetBrandTranslationParamsDTO_base: import("nestjs-zod").ZodDto<{
    brandTranslationId: number;
}, import("zod").ZodObjectDef<{
    brandTranslationId: import("zod").ZodNumber;
}, "strict", import("zod").ZodTypeAny>, {
    brandTranslationId: number;
}>;
export declare class GetBrandTranslationParamsDTO extends GetBrandTranslationParamsDTO_base {
}
declare const CreateBrandTranslationBodyDTO_base: import("nestjs-zod").ZodDto<{
    name: string;
    description: string;
    languageId: string;
    brandId: number;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodNumber;
    brandId: import("zod").ZodNumber;
    languageId: import("zod").ZodString;
    name: import("zod").ZodString;
    description: import("zod").ZodString;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "name" | "description" | "languageId" | "brandId">, "strict", import("zod").ZodTypeAny>, {
    name: string;
    description: string;
    languageId: string;
    brandId: number;
}>;
export declare class CreateBrandTranslationBodyDTO extends CreateBrandTranslationBodyDTO_base {
}
declare const UpdateBrandTranslationBodyDTO_base: import("nestjs-zod").ZodDto<{
    name: string;
    description: string;
    languageId: string;
    brandId: number;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodNumber;
    brandId: import("zod").ZodNumber;
    languageId: import("zod").ZodString;
    name: import("zod").ZodString;
    description: import("zod").ZodString;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "name" | "description" | "languageId" | "brandId">, "strict", import("zod").ZodTypeAny>, {
    name: string;
    description: string;
    languageId: string;
    brandId: number;
}>;
export declare class UpdateBrandTranslationBodyDTO extends UpdateBrandTranslationBodyDTO_base {
}
export {};
