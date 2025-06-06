import { LanguageRepo } from 'src/routes/language/language.repo';
import { CreateLanguageBodyType, UpdateLanguageBodyType } from 'src/routes/language/language.model';
export declare class LanguageService {
    private languageRepo;
    constructor(languageRepo: LanguageRepo);
    findAll(): Promise<{
        data: {
            id: string;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        }[];
        totalItems: number;
    }>;
    findById(id: string): Promise<{
        id: string;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create({ data, createdById }: {
        data: CreateLanguageBodyType;
        createdById: number;
    }): Promise<{
        id: string;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update({ id, data, updatedById }: {
        id: string;
        data: UpdateLanguageBodyType;
        updatedById: number;
    }): Promise<{
        id: string;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
