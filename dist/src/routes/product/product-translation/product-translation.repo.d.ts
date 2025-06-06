import { GetProductTranslationDetailResType, CreateProductTranslationBodyType, UpdateProductTranslationBodyType } from 'src/routes/product/product-translation/product-translation.model';
import { ProductTranslationType } from 'src/shared/models/shared-product-translation-model';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class ProductTranslationRepo {
    private prismaService;
    constructor(prismaService: PrismaService);
    findById(id: number): Promise<GetProductTranslationDetailResType | null>;
    create({ createdById, data, }: {
        createdById: number | null;
        data: CreateProductTranslationBodyType;
    }): Promise<ProductTranslationType>;
    update({ id, updatedById, data, }: {
        id: number;
        updatedById: number;
        data: UpdateProductTranslationBodyType;
    }): Promise<ProductTranslationType>;
    delete({ id, deletedById, }: {
        id: number;
        deletedById: number;
    }, isHard?: boolean): Promise<ProductTranslationType>;
}
