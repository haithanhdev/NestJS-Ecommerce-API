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
exports.SharedUserRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../services/prisma.service");
let SharedUserRepository = class SharedUserRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findUnique(where) {
        return this.prismaService.user.findFirst({
            where: {
                ...where,
                deletedAt: null,
            },
        });
    }
    findUniqueIncludeRolePermissions(where) {
        return this.prismaService.user.findFirst({
            where: {
                ...where,
                deletedAt: null,
            },
            include: {
                role: {
                    include: {
                        permissions: {
                            where: {
                                deletedAt: null,
                            },
                        },
                    },
                },
            },
        });
    }
    update(where, data) {
        return this.prismaService.user.update({
            where: {
                ...where,
                deletedAt: null,
            },
            data,
        });
    }
};
exports.SharedUserRepository = SharedUserRepository;
exports.SharedUserRepository = SharedUserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SharedUserRepository);
//# sourceMappingURL=shared-user.repo.js.map