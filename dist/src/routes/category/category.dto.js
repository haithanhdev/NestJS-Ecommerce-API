"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryBodyDTO = exports.CreateCategoryBodyDTO = exports.GetCategoryDetailResDTO = exports.GetCategoryParamsDTO = exports.GetAllCategoriesQueryDTO = exports.GetAllCategoriesResDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const category_model_1 = require("./category.model");
class GetAllCategoriesResDTO extends (0, nestjs_zod_1.createZodDto)(category_model_1.GetAllCategoriesResSchema) {
}
exports.GetAllCategoriesResDTO = GetAllCategoriesResDTO;
class GetAllCategoriesQueryDTO extends (0, nestjs_zod_1.createZodDto)(category_model_1.GetAllCategoriesQuerySchema) {
}
exports.GetAllCategoriesQueryDTO = GetAllCategoriesQueryDTO;
class GetCategoryParamsDTO extends (0, nestjs_zod_1.createZodDto)(category_model_1.GetCategoryParamsSchema) {
}
exports.GetCategoryParamsDTO = GetCategoryParamsDTO;
class GetCategoryDetailResDTO extends (0, nestjs_zod_1.createZodDto)(category_model_1.GetCategoryDetailResSchema) {
}
exports.GetCategoryDetailResDTO = GetCategoryDetailResDTO;
class CreateCategoryBodyDTO extends (0, nestjs_zod_1.createZodDto)(category_model_1.CreateCategoryBodySchema) {
}
exports.CreateCategoryBodyDTO = CreateCategoryBodyDTO;
class UpdateCategoryBodyDTO extends (0, nestjs_zod_1.createZodDto)(category_model_1.UpdateCategoryBodySchema) {
}
exports.UpdateCategoryBodyDTO = UpdateCategoryBodyDTO;
//# sourceMappingURL=category.dto.js.map