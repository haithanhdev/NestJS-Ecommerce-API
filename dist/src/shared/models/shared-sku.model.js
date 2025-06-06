"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SKUSchema = void 0;
const zod_1 = require("zod");
exports.SKUSchema = zod_1.z.object({
    id: zod_1.z.number(),
    value: zod_1.z.string().trim(),
    price: zod_1.z.number().min(0),
    stock: zod_1.z.number().min(0),
    image: zod_1.z.string(),
    productId: zod_1.z.number(),
    createdById: zod_1.z.number(),
    updatedById: zod_1.z.number().nullable(),
    deletedById: zod_1.z.number().nullable(),
    deletedAt: zod_1.z.date().nullable(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
//# sourceMappingURL=shared-sku.model.js.map