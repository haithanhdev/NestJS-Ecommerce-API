"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationQuerySchema = exports.EmptyBodySchema = void 0;
const zod_1 = require("zod");
exports.EmptyBodySchema = zod_1.z.object({}).strict();
exports.PaginationQuerySchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().positive().default(1),
    limit: zod_1.z.coerce.number().int().positive().default(10),
});
//# sourceMappingURL=request.model.js.map