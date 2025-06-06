import { CartService } from './cart.service';
import { AddToCartBodyDTO, DeleteCartBodyDTO, GetCartItemParamsDTO, UpdateCartItemBodyDTO } from 'src/routes/cart/cart.dto';
import { PaginationQueryDTO } from 'src/shared/dtos/request.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    getCart(userId: number, query: PaginationQueryDTO): Promise<{
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
    addToCart(body: AddToCartBodyDTO, userId: number): Promise<{
        userId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        skuId: number;
        quantity: number;
    }>;
    updateCartItem(param: GetCartItemParamsDTO, userId: number, body: UpdateCartItemBodyDTO): Promise<{
        userId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        skuId: number;
        quantity: number;
    }>;
    deleteCart(body: DeleteCartBodyDTO, userId: number): Promise<{
        message: string;
    }>;
}
