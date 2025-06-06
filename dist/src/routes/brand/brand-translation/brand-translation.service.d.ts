import { BrandTranslationRepo } from 'src/routes/brand/brand-translation/brand-translation.repo';
import { CreateBrandTranslationBodyType, UpdateBrandTranslationBodyType } from 'src/routes/brand/brand-translation/brand-translation.model';
export declare class BrandTranslationService {
    private brandTranslationRepo;
    constructor(brandTranslationRepo: BrandTranslationRepo);
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
        brandId: number;
    }>;
    create({ data, createdById }: {
        data: CreateBrandTranslationBodyType;
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
        brandId: number;
    }>;
    update({ id, data, updatedById }: {
        id: number;
        data: UpdateBrandTranslationBodyType;
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
        brandId: number;
    }>;
    delete({ id, deletedById }: {
        id: number;
        deletedById: number;
    }): Promise<{
        message: string;
    }>;
}
