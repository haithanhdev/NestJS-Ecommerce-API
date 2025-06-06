"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBrandBodyDTO = exports.CreateBrandBodyDTO = exports.GetBrandDetailResDTO = exports.GetBrandParamsDTO = exports.GetBrandsResDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const brand_model_1 = require("./brand.model");
class GetBrandsResDTO extends (0, nestjs_zod_1.createZodDto)(brand_model_1.GetBrandsResSchema) {
}
exports.GetBrandsResDTO = GetBrandsResDTO;
class GetBrandParamsDTO extends (0, nestjs_zod_1.createZodDto)(brand_model_1.GetBrandParamsSchema) {
}
exports.GetBrandParamsDTO = GetBrandParamsDTO;
class GetBrandDetailResDTO extends (0, nestjs_zod_1.createZodDto)(brand_model_1.GetBrandDetailResSchema) {
}
exports.GetBrandDetailResDTO = GetBrandDetailResDTO;
class CreateBrandBodyDTO extends (0, nestjs_zod_1.createZodDto)(brand_model_1.CreateBrandBodySchema) {
}
exports.CreateBrandBodyDTO = CreateBrandBodyDTO;
class UpdateBrandBodyDTO extends (0, nestjs_zod_1.createZodDto)(brand_model_1.UpdateBrandBodySchema) {
}
exports.UpdateBrandBodyDTO = UpdateBrandBodyDTO;
//# sourceMappingURL=brand.dto.js.map