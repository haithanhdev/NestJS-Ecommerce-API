"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetReviewDetailParamsDTO = exports.GetReviewsParamsDTO = exports.UpdateReviewResDTO = exports.UpdateReviewBodyDTO = exports.CreateReviewResDTO = exports.CreateReviewBodyDTO = exports.GetReviewsDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const review_model_1 = require("./review.model");
class GetReviewsDTO extends (0, nestjs_zod_1.createZodDto)(review_model_1.GetReviewsSchema) {
}
exports.GetReviewsDTO = GetReviewsDTO;
class CreateReviewBodyDTO extends (0, nestjs_zod_1.createZodDto)(review_model_1.CreateReviewBodySchema) {
}
exports.CreateReviewBodyDTO = CreateReviewBodyDTO;
class CreateReviewResDTO extends (0, nestjs_zod_1.createZodDto)(review_model_1.CreateReviewResSchema) {
}
exports.CreateReviewResDTO = CreateReviewResDTO;
class UpdateReviewBodyDTO extends (0, nestjs_zod_1.createZodDto)(review_model_1.UpdateReviewBodySchema) {
}
exports.UpdateReviewBodyDTO = UpdateReviewBodyDTO;
class UpdateReviewResDTO extends (0, nestjs_zod_1.createZodDto)(review_model_1.UpdateReviewResSchema) {
}
exports.UpdateReviewResDTO = UpdateReviewResDTO;
class GetReviewsParamsDTO extends (0, nestjs_zod_1.createZodDto)(review_model_1.GetReviewsParamsSchema) {
}
exports.GetReviewsParamsDTO = GetReviewsParamsDTO;
class GetReviewDetailParamsDTO extends (0, nestjs_zod_1.createZodDto)(review_model_1.GetReviewDetailParamsSchema) {
}
exports.GetReviewDetailParamsDTO = GetReviewDetailParamsDTO;
//# sourceMappingURL=review.dto.js.map