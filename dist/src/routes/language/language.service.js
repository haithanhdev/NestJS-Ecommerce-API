"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageService = void 0;
const common_1 = require("@nestjs/common");
const language_repo_1 = require("./language.repo");
const error_1 = require("../../shared/error");
const helpers_1 = require("../../shared/helpers");
const language_error_1 = require("./language.error");
let LanguageService = class LanguageService {
    constructor(languageRepo) {
        this.languageRepo = languageRepo;
    }
    async findAll() {
        const data = await this.languageRepo.findAll();
        return {
            data,
            totalItems: data.length,
        };
    }
    async findById(id) {
        const language = await this.languageRepo.findById(id);
        if (!language) {
            throw error_1.NotFoundRecordException;
        }
        return language;
    }
    async create({ data, createdById }) {
        try {
            return await this.languageRepo.create({
                createdById,
                data,
            });
        }
        catch (error) {
            if ((0, helpers_1.isUniqueConstraintPrismaError)(error)) {
                throw language_error_1.LanguageAlreadyExistsException;
            }
            throw error;
        }
    }
    async update({ id, data, updatedById }) {
        try {
            const language = await this.languageRepo.update({
                id,
                updatedById,
                data,
            });
            return language;
        }
        catch (error) {
            if ((0, helpers_1.isNotFoundPrismaError)(error)) {
                throw error_1.NotFoundRecordException;
            }
            throw error;
        }
    }
    async delete(id) {
        try {
            await this.languageRepo.delete(id, true);
            return {
                message: 'Delete successfully',
            };
        }
        catch (error) {
            if ((0, helpers_1.isNotFoundPrismaError)(error)) {
                throw error_1.NotFoundRecordException;
            }
            throw error;
        }
    }
};
exports.LanguageService = LanguageService;
exports.LanguageService = LanguageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [language_repo_1.LanguageRepo])
], LanguageService);
//# sourceMappingURL=language.service.js.map