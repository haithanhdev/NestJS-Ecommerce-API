import { CreateReviewBodyType, CreateReviewResType, GetReviewsType, UpdateReviewBodyType, UpdateReviewResType } from 'src/routes/review/review.model';
import { PaginationQueryType } from 'src/shared/models/request.model';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class ReviewRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    list(productId: number, pagination: PaginationQueryType): Promise<GetReviewsType>;
    private validateOrder;
    private validateUpdateReview;
    create(userId: number, body: CreateReviewBodyType): Promise<CreateReviewResType>;
    update({ userId, reviewId, body, }: {
        userId: number;
        reviewId: number;
        body: UpdateReviewBodyType;
    }): Promise<UpdateReviewResType>;
    getDetail(reviewId: number): Promise<CreateReviewResType | null>;
}
