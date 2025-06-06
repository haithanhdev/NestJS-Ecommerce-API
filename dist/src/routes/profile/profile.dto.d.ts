declare const UpdateMeBodyDTO_base: import("nestjs-zod").ZodDto<{
    name: string;
    phoneNumber: string;
    avatar: string | null;
}, import("zod").ZodObjectDef<Pick<{
    id: import("zod").ZodNumber;
    email: import("zod").ZodString;
    name: import("zod").ZodString;
    password: import("zod").ZodString;
    phoneNumber: import("zod").ZodDefault<import("zod").ZodString>;
    avatar: import("zod").ZodNullable<import("zod").ZodString>;
    totpSecret: import("zod").ZodNullable<import("zod").ZodString>;
    status: import("zod").ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
    roleId: import("zod").ZodNumber;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "name" | "phoneNumber" | "avatar">, "strict", import("zod").ZodTypeAny>, {
    name: string;
    avatar: string | null;
    phoneNumber?: string | undefined;
}>;
export declare class UpdateMeBodyDTO extends UpdateMeBodyDTO_base {
}
declare const ChangePasswordBodyDTO_base: import("nestjs-zod").ZodDto<{
    password: string;
    newPassword: string;
    confirmNewPassword: string;
}, import("zod").ZodEffectsDef<import("zod").ZodObject<import("zod").objectUtil.extendShape<Pick<{
    id: import("zod").ZodNumber;
    email: import("zod").ZodString;
    name: import("zod").ZodString;
    password: import("zod").ZodString;
    phoneNumber: import("zod").ZodDefault<import("zod").ZodString>;
    avatar: import("zod").ZodNullable<import("zod").ZodString>;
    totpSecret: import("zod").ZodNullable<import("zod").ZodString>;
    status: import("zod").ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
    roleId: import("zod").ZodNumber;
    createdById: import("zod").ZodNullable<import("zod").ZodNumber>;
    updatedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedById: import("zod").ZodNullable<import("zod").ZodNumber>;
    deletedAt: import("zod").ZodNullable<import("zod").ZodDate>;
    createdAt: import("zod").ZodDate;
    updatedAt: import("zod").ZodDate;
}, "password">, {
    newPassword: import("zod").ZodString;
    confirmNewPassword: import("zod").ZodString;
}>, "strict", import("zod").ZodTypeAny, {
    password: string;
    newPassword: string;
    confirmNewPassword: string;
}, {
    password: string;
    newPassword: string;
    confirmNewPassword: string;
}>>, {
    password: string;
    newPassword: string;
    confirmNewPassword: string;
}>;
export declare class ChangePasswordBodyDTO extends ChangePasswordBodyDTO_base {
}
export {};
