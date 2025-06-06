import { CartRepo } from './cart.repo';
import { AddToCartBodyType, DeleteCartBodyType, UpdateCartItemBodyType } from 'src/routes/cart/cart.model';
import { PaginationQueryType } from 'src/shared/models/request.model';
export declare class CartService {
    private readonly cartRepo;
    constructor(cartRepo: CartRepo);
    getCart(userId: number, query: PaginationQueryType): Promise<{
        data: {
            shop: {
                id: number;
                name: string;
                avatar: string | null;
            };
            cartItems: {
                userId: number;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                skuId: number;
                quantity: number;
                sku: {
                    product: {
                        id: number;
                        name: string;
                        productTranslations: {
                            id: number;
                            name: string;
                            description: string;
                            productId: number;
                            languageId: string;
                        }[];
                        brandId: number;
                        variants: {
                            value: string;
                            options: string[];
                        }[];
                        publishedAt: Date | null;
                        basePrice: number;
                        virtualPrice: number;
                        images: string[];
                    };
                    value: string;
                    id: number;
                    image: string;
                    productId: number;
                    price: number;
                    stock: number;
                };
            }[];
        }[];
        limit: number;
        page: number;
        totalItems: number;
        totalPages: number;
    }>;
    addToCart(userId: number, body: AddToCartBodyType): Promise<{
        userId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        skuId: number;
        quantity: number;
    }>;
    updateCartItem({ userId, cartItemId, body }: {
        userId: number;
        cartItemId: number;
        body: UpdateCartItemBodyType;
    }): Promise<{
        userId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        skuId: number;
        quantity: number;
    }>;
    deleteCart(userId: number, body: DeleteCartBodyType): Promise<{
        message: string;
    }>;
}
