"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSKUBodySchema = void 0;
const shared_sku_model_1 = require("../../shared/models/shared-sku.model");
const zod_1 = require("zod");
exports.UpsertSKUBodySchema = shared_sku_model_1.SKUSchema.pick({
    value: true,
    price: true,
    stock: true,
    image: true,
}).extend({
    id: zod_1.z.number().optional(),
});
//# sourceMappingURL=sku.model.js.map