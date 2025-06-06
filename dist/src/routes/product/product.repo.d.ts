import { CreateProductBodyType, GetProductDetailResType, GetProductsResType, UpdateProductBodyType } from 'src/routes/product/product.model';
import { OrderByType, SortByType } from 'src/shared/constants/other.constants';
import { ProductType } from 'src/shared/models/shared-product.model';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class ProductRepo {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    list({ limit, page, name, brandIds, categories, minPrice, maxPrice, createdById, isPublic, languageId, orderBy, sortBy, }: {
        limit: number;
        page: number;
        name?: string;
        brandIds?: number[];
        categories?: number[];
        minPrice?: number;
        maxPrice?: number;
        createdById?: number;
        isPublic?: boolean;
        languageId: string;
        orderBy: OrderByType;
        sortBy: SortByType;
    }): Promise<GetProductsResType>;
    findById(productId: number): Promise<ProductType | null>;
    getDetail({ productId, languageId, isPublic, }: {
        productId: number;
        languageId: string;
        isPublic?: boolean;
    }): Promise<GetProductDetailResType | null>;
    create({ createdById, data, }: {
        createdById: number;
        data: CreateProductBodyType;
    }): Promise<Omit<GetProductDetailResType, 'productSKUSnapshots'>>;
    update({ id, updatedById, data, }: {
        id: number;
        updatedById: number;
        data: UpdateProductBodyType;
    }): Promise<ProductType>;
    delete({ id, deletedById, }: {
        id: number;
        deletedById: number;
    }, isHard?: boolean): Promise<ProductType>;
}
