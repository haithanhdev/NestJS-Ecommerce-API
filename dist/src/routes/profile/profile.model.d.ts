import { z } from 'zod';
export declare const UpdateMeBodySchema: z.ZodObject<Pick<{
    id: z.ZodNumber;
    email: z.ZodString;
    name: z.ZodString;
    password: z.ZodString;
    phoneNumber: z.ZodDefault<z.ZodString>;
    avatar: z.ZodNullable<z.ZodString>;
    totpSecret: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
    roleId: z.ZodNumber;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "name" | "phoneNumber" | "avatar">, "strict", z.ZodTypeAny, {
    name: string;
    phoneNumber: string;
    avatar: string | null;
}, {
    name: string;
    avatar: string | null;
    phoneNumber?: string | undefined;
}>;
export declare const ChangePasswordBodySchema: z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<Pick<{
    id: z.ZodNumber;
    email: z.ZodString;
    name: z.ZodString;
    password: z.ZodString;
    phoneNumber: z.ZodDefault<z.ZodString>;
    avatar: z.ZodNullable<z.ZodString>;
    totpSecret: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["ACTIVE", "INACTIVE", "BLOCKED"]>;
    roleId: z.ZodNumber;
    createdById: z.ZodNullable<z.ZodNumber>;
    updatedById: z.ZodNullable<z.ZodNumber>;
    deletedById: z.ZodNullable<z.ZodNumber>;
    deletedAt: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "password">, {
    newPassword: z.ZodString;
    confirmNewPassword: z.ZodString;
}>, "strict", z.ZodTypeAny, {
    password: string;
    newPassword: string;
    confirmNewPassword: string;
}, {
    password: string;
    newPassword: string;
    confirmNewPassword: string;
}>, {
    password: string;
    newPassword: string;
    confirmNewPassword: string;
}, {
    password: string;
    newPassword: string;
    confirmNewPassword: string;
}>;
export type UpdateMeBodyType = z.infer<typeof UpdateMeBodySchema>;
export type ChangePasswordBodyType = z.infer<typeof ChangePasswordBodySchema>;
