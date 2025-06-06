import { CreateCategoryBodyType, GetAllCategoriesResType, UpdateCategoryBodyType, CategoryType, CategoryIncludeTranslationType } from 'src/routes/category/category.model';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class CategoryRepo {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll({ parentCategoryId, languageId, }: {
        parentCategoryId?: number | null;
        languageId: string;
    }): Promise<GetAllCategoriesResType>;
    findById({ id, languageId }: {
        id: number;
        languageId: string;
    }): Promise<CategoryIncludeTranslationType | null>;
    create({ createdById, data, }: {
        createdById: number | null;
        data: CreateCategoryBodyType;
    }): Promise<CategoryIncludeTranslationType>;
    update({ id, updatedById, data, }: {
        id: number;
        updatedById: number;
        data: UpdateCategoryBodyType;
    }): Promise<CategoryIncludeTranslationType>;
    delete({ id, deletedById, }: {
        id: number;
        deletedById: number;
    }, isHard?: boolean): Promise<CategoryType>;
}
