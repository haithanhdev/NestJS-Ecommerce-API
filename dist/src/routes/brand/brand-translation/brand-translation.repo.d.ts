import { GetBrandTranslationDetailResType, CreateBrandTranslationBodyType, BrandTranslationType, UpdateBrandTranslationBodyType } from 'src/routes/brand/brand-translation/brand-translation.model';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class BrandTranslationRepo {
    private prismaService;
    constructor(prismaService: PrismaService);
    findById(id: number): Promise<GetBrandTranslationDetailResType | null>;
    create({ createdById, data, }: {
        createdById: number | null;
        data: CreateBrandTranslationBodyType;
    }): Promise<BrandTranslationType>;
    update({ id, updatedById, data, }: {
        id: number;
        updatedById: number;
        data: UpdateBrandTranslationBodyType;
    }): Promise<BrandTranslationType>;
    delete({ id, deletedById, }: {
        id: number;
        deletedById: number;
    }, isHard?: boolean): Promise<BrandTranslationType>;
}
