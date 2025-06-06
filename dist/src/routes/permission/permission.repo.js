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
exports.PermissionRepo = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma.service");
let PermissionRepo = class PermissionRepo {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async list(pagination) {
        const skip = (pagination.page - 1) * pagination.limit;
        const take = pagination.limit;
        const [totalItems, data] = await Promise.all([
            this.prismaService.permission.count({
                where: {
                    deletedAt: null,
                },
            }),
            this.prismaService.permission.findMany({
                where: {
                    deletedAt: null,
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
    findById(id) {
        return this.prismaService.permission.findUnique({
            where: {
                id,
                deletedAt: null,
            },
        });
    }
    create({ createdById, data, }) {
        return this.prismaService.permission.create({
            data: {
                ...data,
                createdById,
            },
        });
    }
    update({ id, updatedById, data, }) {
        return this.prismaService.permission.update({
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
            ? this.prismaService.permission.delete({
                where: {
                    id,
                },
            })
            : this.prismaService.permission.update({
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
exports.PermissionRepo = PermissionRepo;
exports.PermissionRepo = PermissionRepo = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PermissionRepo);
//# sourceMappingURL=permission.repo.js.map