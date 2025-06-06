"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetReviewDetailParamsSchema = exports.GetReviewsParamsSchema = exports.UpdateReviewBodySchema = exports.GetReviewsSchema = exports.UpdateReviewResSchema = exports.CreateReviewResSchema = exports.CreateReviewBodySchema = exports.ReviewSchema = exports.ReviewMediaSchema = void 0;
const media_constant_1 = require("../../shared/constants/media.constant");
const shared_user_model_1 = require("../../shared/models/shared-user.model");
const zod_1 = require("zod");
exports.ReviewMediaSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    url: zod_1.z.string().max(1000),
    type: zod_1.z.enum([media_constant_1.MediaType.IMAGE, media_constant_1.MediaType.VIDEO]),
    reviewId: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
});
exports.ReviewSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    content: zod_1.z.string(),
    rating: zod_1.z.number().int().min(1).max(5),
    orderId: zod_1.z.number().int(),
    productId: zod_1.z.number().int(),
    userId: zod_1.z.number().int(),
    updateCount: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.CreateReviewBodySchema = exports.ReviewSchema.pick({
    content: true,
    rating: true,
    productId: true,
    orderId: true,
}).extend({
    medias: zod_1.z.array(exports.ReviewMediaSchema.pick({
        url: true,
        type: true,
    })),
});
exports.CreateReviewResSchema = exports.ReviewSchema.extend({
    medias: zod_1.z.array(exports.ReviewMediaSchema),
    user: shared_user_model_1.UserSchema.pick({
        id: true,
        name: true,
        avatar: true,
    }),
});
exports.UpdateReviewResSchema = exports.CreateReviewResSchema;
exports.GetReviewsSchema = zod_1.z.object({
    data: zod_1.z.array(exports.CreateReviewResSchema),
    totalItems: zod_1.z.number(),
    page: zod_1.z.number(),
    limit: zod_1.z.number(),
    totalPages: zod_1.z.number(),
});
exports.UpdateReviewBodySchema = exports.CreateReviewBodySchema;
exports.GetReviewsParamsSchema = zod_1.z.object({
    productId: zod_1.z.coerce.number().int().positive(),
});
exports.GetReviewDetailParamsSchema = zod_1.z.object({
    reviewId: zod_1.z.coerce.number().int().positive(),
});
//# sourceMappingURL=review.model.js.map