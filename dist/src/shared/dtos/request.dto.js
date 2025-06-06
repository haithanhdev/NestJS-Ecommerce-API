"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationQueryDTO = exports.EmptyBodyDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const request_model_1 = require("../models/request.model");
class EmptyBodyDTO extends (0, nestjs_zod_1.createZodDto)(request_model_1.EmptyBodySchema) {
}
exports.EmptyBodyDTO = EmptyBodyDTO;
class PaginationQueryDTO extends (0, nestjs_zod_1.createZodDto)(request_model_1.PaginationQuerySchema) {
}
exports.PaginationQueryDTO = PaginationQueryDTO;
//# sourceMappingURL=request.dto.js.map