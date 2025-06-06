import { CreateLanguageBodyType, LanguageType, UpdateLanguageBodyType } from 'src/routes/language/language.model';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class LanguageRepo {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<LanguageType[]>;
    findById(id: string): Promise<LanguageType | null>;
    create({ createdById, data }: {
        createdById: number;
        data: CreateLanguageBodyType;
    }): Promise<LanguageType>;
    update({ id, updatedById, data, }: {
        id: string;
        updatedById: number;
        data: UpdateLanguageBodyType;
    }): Promise<LanguageType>;
    delete(id: string, isHard?: boolean): Promise<LanguageType>;
}
