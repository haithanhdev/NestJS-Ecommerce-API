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
exports.BrandRepo = void 0;
const common_1 = require("@nestjs/common");
const other_constants_1 = require("../../shared/constants/other.constants");
const prisma_service_1 = require("../../shared/services/prisma.service");
let BrandRepo = class BrandRepo {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async list(pagination, languageId) {
        pagination.limit = 100;
        const skip = (pagination.page - 1) * pagination.limit;
        const take = pagination.limit;
        const [totalItems, data] = await Promise.all([
            this.prismaService.brand.count({
                where: {
                    deletedAt: null,
                },
            }),
            this.prismaService.brand.findMany({
                where: {
                    deletedAt: null,
                },
                include: {
                    brandTranslations: {
                        where: languageId === other_constants_1.ALL_LANGUAGE_CODE ? { deletedAt: null } : { deletedAt: null, languageId },
                    },
                },
                orderBy: {
                    createdAt: 'desc',
                },
                skip,
                take,
            }),
        ]);
        return {
            data,
            totalItems,
            page: pagination.page,
            limit: pagination.limit,
            totalPages: Math.ceil(totalItems / pagination.limit),
        };
    }
    findById(id, languageId) {
        return this.prismaService.brand.findUnique({
            where: {
                id,
                deletedAt: null,
            },
            include: {
                brandTranslations: {
                    where: languageId === other_constants_1.ALL_LANGUAGE_CODE ? { deletedAt: null } : { deletedAt: null, languageId },
                },
            },
        });
    }
    create({ createdById, data, }) {
        return this.prismaService.brand.create({
            data: {
                ...data,
                createdById,
            },
            include: {
                brandTranslations: {
                    where: { deletedAt: null },
                },
            },
        });
    }
    async update({ id, updatedById, data, }) {
        return this.prismaService.brand.update({
            where: {
                id,
                deletedAt: null,
            },
            data: {
                ...data,
                updatedById,
            },
            include: {
                brandTranslations: {
                    where: { deletedAt: null },
                },
            },
        });
    }
    delete({ id, deletedById, }, isHard) {
        return isHard
            ? this.prismaService.brand.delete({
                where: {
                    id,
                },
            })
            : this.prismaService.brand.update({
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
exports.BrandRepo = BrandRepo;
exports.BrandRepo = BrandRepo = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BrandRepo);
//# sourceMappingURL=brand.repo.js.map