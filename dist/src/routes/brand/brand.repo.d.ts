import { CreateBrandBodyType, GetBrandsResType, UpdateBrandBodyType, BrandType, BrandIncludeTranslationType } from 'src/routes/brand/brand.model';
import { PaginationQueryType } from 'src/shared/models/request.model';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class BrandRepo {
    private prismaService;
    constructor(prismaService: PrismaService);
    list(pagination: PaginationQueryType, languageId: string): Promise<GetBrandsResType>;
    findById(id: number, languageId: string): Promise<BrandIncludeTranslationType | null>;
    create({ createdById, data, }: {
        createdById: number | null;
        data: CreateBrandBodyType;
    }): Promise<BrandIncludeTranslationType>;
    update({ id, updatedById, data, }: {
        id: number;
        updatedById: number;
        data: UpdateBrandBodyType;
    }): Promise<BrandIncludeTranslationType>;
    delete({ id, deletedById, }: {
        id: number;
        deletedById: number;
    }, isHard?: boolean): Promise<BrandType>;
}
