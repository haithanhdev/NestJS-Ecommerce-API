import { CreateBrandTranslationBodyDTO, GetBrandTranslationParamsDTO, UpdateBrandTranslationBodyDTO } from 'src/routes/brand/brand-translation/brand-translation.dto';
import { BrandTranslationService } from 'src/routes/brand/brand-translation/brand-translation.service';
export declare class BrandTranslationController {
    private readonly brandTranslationService;
    constructor(brandTranslationService: BrandTranslationService);
    findById(params: GetBrandTranslationParamsDTO): Promise<{
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
    create(body: CreateBrandTranslationBodyDTO, userId: number): Promise<{
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
    update(body: UpdateBrandTranslationBodyDTO, params: GetBrandTranslationParamsDTO, userId: number): Promise<{
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
    delete(params: GetBrandTranslationParamsDTO, userId: number): Promise<{
        message: string;
    }>;
}
