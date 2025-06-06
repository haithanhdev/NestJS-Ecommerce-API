import { CreateCategoryBodyDTO, GetCategoryParamsDTO, UpdateCategoryBodyDTO, GetAllCategoriesQueryDTO } from 'src/routes/category/category.dto';
import { CategoryService } from 'src/routes/category/category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    findAll(query: GetAllCategoriesQueryDTO): Promise<{
        data: {
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
        totalItems: number;
    }>;
    findById(params: GetCategoryParamsDTO): Promise<{
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
    }>;
    create(body: CreateCategoryBodyDTO, userId: number): Promise<{
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
    }>;
    update(body: UpdateCategoryBodyDTO, params: GetCategoryParamsDTO, userId: number): Promise<{
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
    }>;
    delete(params: GetCategoryParamsDTO, userId: number): Promise<{
        message: string;
    }>;
}
