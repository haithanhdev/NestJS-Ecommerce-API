"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const review_service_1 = require("./review.service");
const active_user_decorator_1 = require("../../shared/decorators/active-user.decorator");
const review_dto_1 = require("./review.dto");
const request_dto_1 = require("../../shared/dtos/request.dto");
const auth_decorator_1 = require("../../shared/decorators/auth.decorator");
let ReviewController = class ReviewController {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    getReviews(params, pagination) {
        return this.reviewService.list(params.productId, pagination);
    }
    createReview(body, userId) {
        return this.reviewService.create(userId, body);
    }
    getReviewDetail(params) {
        return this.reviewService.getDetail(params.reviewId);
    }
    updateReview(body, userId, params) {
        return this.reviewService.update({
            userId,
            body,
            reviewId: params.reviewId,
        });
    }
};
exports.ReviewController = ReviewController;
__decorate([
    (0, auth_decorator_1.IsPublic)(),
    (0, common_1.Get)('/products/:productId'),
    (0, nestjs_zod_1.ZodSerializerDto)(review_dto_1.GetReviewsDTO),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_dto_1.GetReviewsParamsDTO, request_dto_1.PaginationQueryDTO]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "getReviews", null);
__decorate([
    (0, common_1.Post)(),
    (0, nestjs_zod_1.ZodSerializerDto)(review_dto_1.CreateReviewResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_dto_1.CreateReviewBodyDTO, Number]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "createReview", null);
__decorate([
    (0, auth_decorator_1.IsPublic)(),
    (0, common_1.Get)(':reviewId'),
    (0, nestjs_zod_1.ZodSerializerDto)(review_dto_1.CreateReviewResDTO),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_dto_1.GetReviewDetailParamsDTO]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "getReviewDetail", null);
__decorate([
    (0, common_1.Put)(':reviewId'),
    (0, nestjs_zod_1.ZodSerializerDto)(review_dto_1.UpdateReviewResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __param(2, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [review_dto_1.UpdateReviewBodyDTO, Number, review_dto_1.GetReviewDetailParamsDTO]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "updateReview", null);
exports.ReviewController = ReviewController = __decorate([
    (0, common_1.Controller)('reviews'),
    __metadata("design:paramtypes", [review_service_1.ReviewService])
], ReviewController);
//# sourceMappingURL=review.controller.js.map