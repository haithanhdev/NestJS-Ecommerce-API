"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductBodyDTO = exports.CreateProductBodyDTO = exports.GetProductDetailResDTO = exports.GetProductParamsDTO = exports.GetManageProductsQueryDTO = exports.GetProductsQueryDTO = exports.GetProductsResDTO = exports.ProductDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const product_model_1 = require("./product.model");
const shared_product_model_1 = require("../../shared/models/shared-product.model");
class ProductDTO extends (0, nestjs_zod_1.createZodDto)(shared_product_model_1.ProductSchema) {
}
exports.ProductDTO = ProductDTO;
class GetProductsResDTO extends (0, nestjs_zod_1.createZodDto)(product_model_1.GetProductsResSchema) {
}
exports.GetProductsResDTO = GetProductsResDTO;
class GetProductsQueryDTO extends (0, nestjs_zod_1.createZodDto)(product_model_1.GetProductsQuerySchema) {
}
exports.GetProductsQueryDTO = GetProductsQueryDTO;
class GetManageProductsQueryDTO extends (0, nestjs_zod_1.createZodDto)(product_model_1.GetManageProductsQuerySchema) {
}
exports.GetManageProductsQueryDTO = GetManageProductsQueryDTO;
class GetProductParamsDTO extends (0, nestjs_zod_1.createZodDto)(product_model_1.GetProductParamsSchema) {
}
exports.GetProductParamsDTO = GetProductParamsDTO;
class GetProductDetailResDTO extends (0, nestjs_zod_1.createZodDto)(product_model_1.GetProductDetailResSchema) {
}
exports.GetProductDetailResDTO = GetProductDetailResDTO;
class CreateProductBodyDTO extends (0, nestjs_zod_1.createZodDto)(product_model_1.CreateProductBodySchema) {
}
exports.CreateProductBodyDTO = CreateProductBodyDTO;
class UpdateProductBodyDTO extends (0, nestjs_zod_1.createZodDto)(product_model_1.UpdateProductBodySchema) {
}
exports.UpdateProductBodyDTO = UpdateProductBodyDTO;
//# sourceMappingURL=product.dto.js.map