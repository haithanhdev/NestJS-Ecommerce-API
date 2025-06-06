import { BrandRepo } from 'src/routes/brand/brand.repo';
import { CreateBrandBodyType, UpdateBrandBodyType } from 'src/routes/brand/brand.model';
import { PaginationQueryType } from 'src/shared/models/request.model';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from 'src/generated/i18n.generated';
export declare class BrandService {
    private brandRepo;
    private readonly i18n;
    constructor(brandRepo: BrandRepo, i18n: I18nService<I18nTranslations>);
    list(pagination: PaginationQueryType): Promise<{
        data: {
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            brandTranslations: {
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
            }[];
            logo: string;
        }[];
        limit: number;
        page: number;
        totalItems: number;
        totalPages: number;
    }>;
    findById(id: number): Promise<{
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        brandTranslations: {
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
        }[];
        logo: string;
    }>;
    create({ data, createdById }: {
        data: CreateBrandBodyType;
        createdById: number;
    }): Promise<{
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        brandTranslations: {
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
        }[];
        logo: string;
    }>;
    update({ id, data, updatedById }: {
        id: number;
        data: UpdateBrandBodyType;
        updatedById: number;
    }): Promise<{
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        brandTranslations: {
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
        }[];
        logo: string;
    }>;
    delete({ id, deletedById }: {
        id: number;
        deletedById: number;
    }): Promise<{
        message: string;
    }>;
}
