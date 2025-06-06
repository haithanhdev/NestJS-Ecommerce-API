import { CategoryTranslationRepo } from 'src/routes/category/category-translation/category-translation.repo';
import { CreateCategoryTranslationBodyType, UpdateCategoryTranslationBodyType } from 'src/routes/category/category-translation/category-translation.model';
export declare class CategoryTranslationService {
    private categoryTranslationRepo;
    constructor(categoryTranslationRepo: CategoryTranslationRepo);
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
        languageId: string;
        categoryId: number;
    }>;
    create({ data, createdById }: {
        data: CreateCategoryTranslationBodyType;
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
        languageId: string;
        categoryId: number;
    }>;
    update({ id, data, updatedById, }: {
        id: number;
        data: UpdateCategoryTranslationBodyType;
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
        languageId: string;
        categoryId: number;
    }>;
    delete({ id, deletedById }: {
        id: number;
        deletedById: number;
    }): Promise<{
        message: string;
    }>;
}
