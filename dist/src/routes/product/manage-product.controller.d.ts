import { ManageProductService } from 'src/routes/product/manage-product.service';
import { CreateProductBodyDTO, GetManageProductsQueryDTO, GetProductParamsDTO, UpdateProductBodyDTO } from 'src/routes/product/product.dto';
import { AccessTokenPayload } from 'src/shared/types/jwt.type';
export declare class ManageProductController {
    private readonly manageProductService;
    constructor(manageProductService: ManageProductService);
    list(query: GetManageProductsQueryDTO, user: AccessTokenPayload): Promise<{
        data: {
            brand: {
                id: number;
                name: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                brandTranslations: {
                    id: number;
                    name: string;
                    description: string;
                    createdById: number | null;
                    updatedById: number | null;
                    deletedById: number | null;
                    deletedAt: Date | null;
                    createdAt: Date;
                    updatedAt: Date;
                    languageId: string;
                    brandId: number;
                }[];
                logo: string;
            };
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            orders: {
                status: "PENDING_PAYMENT" | "PENDING_PICKUP" | "PENDING_DELIVERY" | "DELIVERED" | "RETURNED" | "CANCELLED";
                userId: number;
                id: number;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                receiver: {
                    name: string;
                    phone: string;
                    address: string;
                };
                shopId: number | null;
                paymentId: number;
            }[];
            productTranslations: {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                productId: number;
                languageId: string;
            }[];
            productSKUSnapshots: {
                id: number;
                quantity: number;
                productId: number | null;
            }[];
            brandId: number;
            categories: {
                id: number;
                name: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                categoryTranslations: {
                    id: number;
                    name: string;
                    description: string;
                    createdById: number | null;
                    updatedById: number | null;
                    deletedById: number | null;
                    deletedAt: Date | null;
                    createdAt: Date;
                    updatedAt: Date;
                    languageId: string;
                    categoryId: number;
                }[];
                logo: string | null;
                parentCategoryId: number | null;
            }[];
            variants: {
                value: string;
                options: string[];
            }[];
            publishedAt: Date | null;
            basePrice: number;
            virtualPrice: number;
            images: string[];
            skus: {
                value: string;
                id: number;
                createdById: number;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                image: string;
                productId: number;
                price: number;
                stock: number;
            }[];
        }[];
        limit: number;
        page: number;
        totalItems: number;
        totalPages: number;
    }>;
    findById(params: GetProductParamsDTO, user: AccessTokenPayload): Promise<{
        brand: {
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            brandTranslations: {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                brandId: number;
            }[];
            logo: string;
        };
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        productTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            productId: number;
            languageId: string;
        }[];
        brandId: number;
        categories: {
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            categoryTranslations: {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                categoryId: number;
            }[];
            logo: string | null;
            parentCategoryId: number | null;
        }[];
        variants: {
            value: string;
            options: string[];
        }[];
        publishedAt: Date | null;
        basePrice: number;
        virtualPrice: number;
        images: string[];
        skus: {
            value: string;
            id: number;
            createdById: number;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            image: string;
            productId: number;
            price: number;
            stock: number;
        }[];
        productSKUSnapshots?: {
            id: number;
            quantity: number;
            productId: number | null;
        }[] | undefined;
    }>;
    create(body: CreateProductBodyDTO, userId: number): Promise<Omit<{
        brand: {
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            brandTranslations: {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                brandId: number;
            }[];
            logo: string;
        };
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        productTranslations: {
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            productId: number;
            languageId: string;
        }[];
        brandId: number;
        categories: {
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            categoryTranslations: {
                id: number;
                name: string;
                description: string;
                createdById: number | null;
                updatedById: number | null;
                deletedById: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                languageId: string;
                categoryId: number;
            }[];
            logo: string | null;
            parentCategoryId: number | null;
        }[];
        variants: {
            value: string;
            options: string[];
        }[];
        publishedAt: Date | null;
        basePrice: number;
        virtualPrice: number;
        images: string[];
        skus: {
            value: string;
            id: number;
            createdById: number;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            image: string;
            productId: number;
            price: number;
            stock: number;
        }[];
        productSKUSnapshots?: {
            id: number;
            quantity: number;
            productId: number | null;
        }[] | undefined;
    }, "productSKUSnapshots">>;
    update(body: UpdateProductBodyDTO, params: GetProductParamsDTO, user: AccessTokenPayload): Promise<{
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        brandId: number;
        variants: {
            value: string;
            options: string[];
        }[];
        publishedAt: Date | null;
        basePrice: number;
        virtualPrice: number;
        images: string[];
    }>;
    delete(params: GetProductParamsDTO, user: AccessTokenPayload): Promise<{
        message: string;
    }>;
}
