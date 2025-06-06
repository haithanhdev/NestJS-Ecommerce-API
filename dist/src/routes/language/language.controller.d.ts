import { CreateLanguageBodyDTO, GetLanguageParamsDTO, UpdateLanguageBodyDTO } from 'src/routes/language/language.dto';
import { LanguageService } from 'src/routes/language/language.service';
export declare class LanguageController {
    private readonly languageService;
    constructor(languageService: LanguageService);
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
    findById(params: GetLanguageParamsDTO): Promise<{
        id: string;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(body: CreateLanguageBodyDTO, userId: number): Promise<{
        id: string;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(body: UpdateLanguageBodyDTO, params: GetLanguageParamsDTO, userId: number): Promise<{
        id: string;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(params: GetLanguageParamsDTO): Promise<{
        message: string;
    }>;
}
