import { CreateReviewBodyType, UpdateReviewBodyType } from 'src/routes/review/review.model';
import { ReviewRepository } from 'src/routes/review/review.repo';
import { PaginationQueryType } from 'src/shared/models/request.model';
export declare class ReviewService {
    private readonly reviewRepository;
    constructor(reviewRepository: ReviewRepository);
    list(productId: number, pagination: PaginationQueryType): Promise<{
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
    create(userId: number, body: CreateReviewBodyType): Promise<{
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
    getDetail(reviewId: number): Promise<{
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
    update({ userId, reviewId, body }: {
        userId: number;
        reviewId: number;
        body: UpdateReviewBodyType;
    }): Promise<{
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
