import { ProductTranslationRepo } from 'src/routes/product/product-translation/product-translation.repo';
import { CreateProductTranslationBodyType, UpdateProductTranslationBodyType } from 'src/routes/product/product-translation/product-translation.model';
export declare class ProductTranslationService {
    private productTranslationRepo;
    constructor(productTranslationRepo: ProductTranslationRepo);
    findById(id: number): Promise<{
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
    }>;
    create({ data, createdById }: {
        data: CreateProductTranslationBodyType;
        createdById: number;
    }): Promise<{
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
    }>;
    update({ id, data, updatedById }: {
        id: number;
        data: UpdateProductTranslationBodyType;
        updatedById: number;
    }): Promise<{
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
    }>;
    delete({ id, deletedById }: {
        id: number;
        deletedById: number;
    }): Promise<{
        message: string;
    }>;
}
