import { CreateProductTranslationBodyDTO, GetProductTranslationParamsDTO, UpdateProductTranslationBodyDTO } from 'src/routes/product/product-translation/product-translation.dto';
import { ProductTranslationService } from 'src/routes/product/product-translation/product-translation.service';
export declare class ProductTranslationController {
    private readonly productTranslationService;
    constructor(productTranslationService: ProductTranslationService);
    findById(params: GetProductTranslationParamsDTO): Promise<{
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
    create(body: CreateProductTranslationBodyDTO, userId: number): Promise<{
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
    update(body: UpdateProductTranslationBodyDTO, params: GetProductTranslationParamsDTO, userId: number): Promise<{
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
    delete(params: GetProductTranslationParamsDTO, userId: number): Promise<{
        message: string;
    }>;
}
