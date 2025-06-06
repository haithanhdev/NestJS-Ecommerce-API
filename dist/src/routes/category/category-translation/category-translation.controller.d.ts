import { CreateCategoryTranslationBodyDTO, GetCategoryTranslationParamsDTO, UpdateCategoryTranslationBodyDTO } from 'src/routes/category/category-translation/category-translation.dto';
import { CategoryTranslationService } from 'src/routes/category/category-translation/category-translation.service';
export declare class CategoryTranslationController {
    private readonly categoryTranslationService;
    constructor(categoryTranslationService: CategoryTranslationService);
    findById(params: GetCategoryTranslationParamsDTO): Promise<{
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
    create(body: CreateCategoryTranslationBodyDTO, userId: number): Promise<{
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
    update(body: UpdateCategoryTranslationBodyDTO, params: GetCategoryTranslationParamsDTO, userId: number): Promise<{
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
    delete(params: GetCategoryTranslationParamsDTO, userId: number): Promise<{
        message: string;
    }>;
}
