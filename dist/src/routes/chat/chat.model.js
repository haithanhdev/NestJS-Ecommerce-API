"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersSchema = exports.CreateMessageBodySchema = exports.GetMessagesResSchema = exports.MessageSchema = exports.GetMessagesQuerySchema = void 0;
const zod_1 = require("zod");
exports.GetMessagesQuerySchema = zod_1.z
    .object({
    fromUserId: zod_1.z.coerce.number().int(),
    toUserId: zod_1.z.coerce.number().int(),
    page: zod_1.z.coerce.number().int().positive().default(1),
    limit: zod_1.z.coerce.number().int().positive().default(10),
})
    .strict();
exports.MessageSchema = zod_1.z.object({
    id: zod_1.z.number(),
    fromUserId: zod_1.z.number(),
    toUserId: zod_1.z.number(),
    content: zod_1.z.string(),
    readAt: zod_1.z.date().nullable(),
    createdAt: zod_1.z.date()
});
exports.GetMessagesResSchema = zod_1.z.object({
    messages: zod_1.z.array(exports.MessageSchema),
    totalItems: zod_1.z.number(),
    page: zod_1.z.number(),
    limit: zod_1.z.number(),
    totalPages: zod_1.z.number(),
    receiver: zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
        email: zod_1.z.string(),
        avatar: zod_1.z.string().nullable(),
    }).nullable(),
});
exports.CreateMessageBodySchema = exports.MessageSchema.pick({
    fromUserId: true,
    toUserId: true,
    content: true,
    createdAt: true
});
exports.GetUsersSchema = zod_1.z.object({
    users: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
        email: zod_1.z.string(),
        avatar: zod_1.z.string().nullable(),
    }))
});
//# sourceMappingURL=chat.model.js.map