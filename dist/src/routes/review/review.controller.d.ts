import { ReviewService } from './review.service';
import { CreateReviewBodyDTO, GetReviewDetailParamsDTO, GetReviewsParamsDTO, UpdateReviewBodyDTO } from 'src/routes/review/review.dto';
import { PaginationQueryDTO } from 'src/shared/dtos/request.dto';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    getReviews(params: GetReviewsParamsDTO, pagination: PaginationQueryDTO): Promise<{
        data: {
            user: {
                id: number;
                name: string;
                avatar: string | null;
            };
            userId: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            orderId: number;
            productId: number;
            content: string;
            rating: number;
            updateCount: number;
            medias: {
                type: "IMAGE" | "VIDEO";
                id: number;
                createdAt: Date;
                url: string;
                reviewId: number;
            }[];
        }[];
        limit: number;
        page: number;
        totalItems: number;
        totalPages: number;
    }>;
    createReview(body: CreateReviewBodyDTO, userId: number): Promise<{
        user: {
            id: number;
            name: string;
            avatar: string | null;
        };
        userId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderId: number;
        productId: number;
        content: string;
        rating: number;
        updateCount: number;
        medias: {
            type: "IMAGE" | "VIDEO";
            id: number;
            createdAt: Date;
            url: string;
            reviewId: number;
        }[];
    }>;
    getReviewDetail(params: GetReviewDetailParamsDTO): Promise<{
        user: {
            id: number;
            name: string;
            avatar: string | null;
        };
        userId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderId: number;
        productId: number;
        content: string;
        rating: number;
        updateCount: number;
        medias: {
            type: "IMAGE" | "VIDEO";
            id: number;
            createdAt: Date;
            url: string;
            reviewId: number;
        }[];
    } | null>;
    updateReview(body: UpdateReviewBodyDTO, userId: number, params: GetReviewDetailParamsDTO): Promise<{
        user: {
            id: number;
            name: string;
            avatar: string | null;
        };
        userId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderId: number;
        productId: number;
        content: string;
        rating: number;
        updateCount: number;
        medias: {
            type: "IMAGE" | "VIDEO";
            id: number;
            createdAt: Date;
            url: string;
            reviewId: number;
        }[];
    }>;
}
