import { AddToCartBodyType, CartItemType, DeleteCartBodyType, GetCartResType, UpdateCartItemBodyType } from 'src/routes/cart/cart.model';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class CartRepo {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    private validateSKU;
    list({ userId, languageId, page, limit, }: {
        userId: number;
        languageId: string;
        limit: number;
        page: number;
    }): Promise<GetCartResType>;
    list2({ userId, languageId, page, limit, }: {
        userId: number;
        languageId: string;
        limit: number;
        page: number;
    }): Promise<GetCartResType>;
    create(userId: number, body: AddToCartBodyType): Promise<CartItemType>;
    update({ userId, cartItemId, body, }: {
        userId: number;
        cartItemId: number;
        body: UpdateCartItemBodyType;
    }): Promise<CartItemType>;
    delete(userId: number, body: DeleteCartBodyType): Promise<{
        count: number;
    }>;
}
