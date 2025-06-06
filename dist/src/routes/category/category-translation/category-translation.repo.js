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
exports.CategoryTranslationRepo = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../shared/services/prisma.service");
let CategoryTranslationRepo = class CategoryTranslationRepo {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findById(id) {
        return this.prismaService.categoryTranslation.findUnique({
            where: {
                id,
                deletedAt: null,
            },
        });
    }
    create({ createdById, data, }) {
        return this.prismaService.categoryTranslation.create({
            data: {
                ...data,
                createdById,
            },
        });
    }
    async update({ id, updatedById, data, }) {
        return this.prismaService.categoryTranslation.update({
            where: {
                id,
                deletedAt: null,
            },
            data: {
                ...data,
                updatedById,
            },
        });
    }
    delete({ id, deletedById, }, isHard) {
        return isHard
            ? this.prismaService.categoryTranslation.delete({
                where: {
                    id,
                },
            })
            : this.prismaService.categoryTranslation.update({
                where: {
                    id,
                    deletedAt: null,
                },
                data: {
                    deletedAt: new Date(),
                    deletedById,
                },
            });
    }
};
exports.CategoryTranslationRepo = CategoryTranslationRepo;
exports.CategoryTranslationRepo = CategoryTranslationRepo = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoryTranslationRepo);
//# sourceMappingURL=category-translation.repo.js.map