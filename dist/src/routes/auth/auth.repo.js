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
exports.AuthRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma.service");
let AuthRepository = class AuthRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createUser(user) {
        return await this.prismaService.user.create({
            data: user,
            omit: {
                password: true,
                totpSecret: true,
            },
        });
    }
    async createUserIncludeRole(user) {
        return await this.prismaService.user.create({
            data: user,
            include: {
                role: true,
            },
        });
    }
    async createVerificationCode(payload) {
        return await this.prismaService.verificationCode.upsert({
            where: {
                email_type: {
                    email: payload.email,
                    type: payload.type,
                },
            },
            create: payload,
            update: {
                code: payload.code,
                expiresAt: payload.expiresAt,
            },
        });
    }
    async findUniqueVerificationCode(where) {
        return await this.prismaService.verificationCode.findUnique({
            where,
        });
    }
    async createRefreshToken(data) {
        return await this.prismaService.refreshToken.create({
            data,
        });
    }
    async createDevice(data) {
        return await this.prismaService.device.create({
            data,
        });
    }
    async findUniqueUserIncludeRole(where) {
        return await this.prismaService.user.findFirst({
            where: {
                ...where,
                deletedAt: null,
            },
            include: {
                role: true,
            },
        });
    }
    async findUniqueRefreshTokenIncludeUserRole(where) {
        return this.prismaService.refreshToken.findUnique({
            where,
            include: {
                user: {
                    include: {
                        role: true,
                    },
                },
            },
        });
    }
    updateDevice(deviceId, data) {
        return this.prismaService.device.update({
            where: {
                id: deviceId,
            },
            data,
        });
    }
    deleteRefreshToken(where) {
        return this.prismaService.refreshToken.delete({
            where,
        });
    }
    deleteVerificationCode(where) {
        return this.prismaService.verificationCode.delete({
            where,
        });
    }
};
exports.AuthRepository = AuthRepository;
exports.AuthRepository = AuthRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthRepository);
//# sourceMappingURL=auth.repo.js.map