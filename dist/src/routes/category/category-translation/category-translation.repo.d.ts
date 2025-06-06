import { GetCategoryTranslationDetailResType, CreateCategoryTranslationBodyType, CategoryTranslationType, UpdateCategoryTranslationBodyType } from 'src/routes/category/category-translation/category-translation.model';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class CategoryTranslationRepo {
    private prismaService;
    constructor(prismaService: PrismaService);
    findById(id: number): Promise<GetCategoryTranslationDetailResType | null>;
    create({ createdById, data, }: {
        createdById: number | null;
        data: CreateCategoryTranslationBodyType;
    }): Promise<CategoryTranslationType>;
    update({ id, updatedById, data, }: {
        id: number;
        updatedById: number;
        data: UpdateCategoryTranslationBodyType;
    }): Promise<CategoryTranslationType>;
    delete({ id, deletedById, }: {
        id: number;
        deletedById: number;
    }, isHard?: boolean): Promise<CategoryTranslationType>;
}
