declare const GetLanguagesResDTO_base: import("nestjs-zod").ZodDto<{
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
}, import("zod").ZodObjectDef<{
    data: import("zod").ZodArray<import("zod").ZodObject<{
        id: import("zod").ZodString;
        name: import("zod").ZodString;
        createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
        updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
        deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
        createdAt: import("zod").ZodDate;
        updatedAt: import("zod").ZodDate;
    }, "strip", import("zod").ZodTypeAny, {
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
    totalItems: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny>, {
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
export declare class GetLanguagesResDTO extends GetLanguagesResDTO_base {
}
declare const GetLanguageParamsDTO_base: import("nestjs-zod").ZodDto<{
    languageId: string;
}, import("zod").ZodObjectDef<{
    languageId: import("zod").ZodString;
}, "strict", import("zod").ZodTypeAny>, {
    languageId: string;
}>;
export declare class GetLanguageParamsDTO extends GetLanguageParamsDTO_base {
}
declare const GetLanguageDetailResDTO_base: import("nestjs-zod").ZodDto<{
    id: string;
    name: string;
    createdById: number | null;
    updatedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}, import("zod").ZodObjectDef<{
    id: import("zod").ZodString;
    name: import("zod").ZodString;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "strip", import("zod").ZodTypeAny>, {
    id: string;
    name: string;
    createdById: number | null;
    updatedById: number | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare class GetLanguageDetailResDTO extends GetLanguageDetailResDTO_base {
}
declare const CreateLanguageBodyDTO_base: import("nestjs-zod").ZodDto<{
    id: string;
    name: string;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodString;
    name: import("zod").ZodString;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "id" | "name">, "strict", import("zod").ZodTypeAny>, {
    id: string;
    name: string;
}>;
export declare class CreateLanguageBodyDTO extends CreateLanguageBodyDTO_base {
}
declare const UpdateLanguageBodyDTO_base: import("nestjs-zod").ZodDto<{
    name: string;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodString;
    name: import("zod").ZodString;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "name">, "strict", import("zod").ZodTypeAny>, {
    name: string;
}>;
export declare class UpdateLanguageBodyDTO extends UpdateLanguageBodyDTO_base {
}
export {};
