"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLanguageBodySchema = exports.CreateLanguageBodySchema = exports.GetLanguageDetailResSchema = exports.GetLanguageParamsSchema = exports.GetLanguagesResSchema = exports.LanguageSchema = void 0;
const zod_1 = require("zod");
exports.LanguageSchema = zod_1.z.object({
    id: zod_1.z.string().max(10),
    name: zod_1.z.string().max(500),
    createdById: zod_1.z.number().nullable(),
    updatedById: zod_1.z.number().nullable(),
    deletedAt: zod_1.z.date().nullable(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.GetLanguagesResSchema = zod_1.z.object({
    data: zod_1.z.array(exports.LanguageSchema),
    totalItems: zod_1.z.number(),
});
exports.GetLanguageParamsSchema = zod_1.z
    .object({
    languageId: zod_1.z.string().max(10),
})
    .strict();
exports.GetLanguageDetailResSchema = exports.LanguageSchema;
exports.CreateLanguageBodySchema = exports.LanguageSchema.pick({
    id: true,
    name: true,
}).strict();
exports.UpdateLanguageBodySchema = exports.LanguageSchema.pick({
    name: true,
}).strict();
//# sourceMappingURL=language.model.js.map