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
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const error_1 = require("../../shared/error");
const shared_user_repo_1 = require("../../shared/repositories/shared-user.repo");
const hashing_service_1 = require("../../shared/services/hashing.service");
const helpers_1 = require("../../shared/helpers");
let ProfileService = class ProfileService {
    constructor(sharedUserRepository, hashingService) {
        this.sharedUserRepository = sharedUserRepository;
        this.hashingService = hashingService;
    }
    async getProfile(userId) {
        const user = await this.sharedUserRepository.findUniqueIncludeRolePermissions({
            id: userId,
        });
        if (!user) {
            throw error_1.NotFoundRecordException;
        }
        return user;
    }
    async updateProfile({ userId, body }) {
        try {
            return await this.sharedUserRepository.update({ id: userId }, {
                ...body,
                updatedById: userId,
            });
        }
        catch (error) {
            if ((0, helpers_1.isUniqueConstraintPrismaError)(error)) {
                throw error_1.NotFoundRecordException;
            }
            throw error;
        }
    }
    async changePassword({ userId, body }) {
        try {
            const { password, newPassword } = body;
            const user = await this.sharedUserRepository.findUnique({
                id: userId,
            });
            if (!user) {
                throw error_1.NotFoundRecordException;
            }
            const isPasswordMatch = await this.hashingService.compare(password, user.password);
            if (!isPasswordMatch) {
                throw error_1.InvalidPasswordException;
            }
            const hashedPassword = await this.hashingService.hash(newPassword);
            await this.sharedUserRepository.update({ id: userId }, {
                password: hashedPassword,
                updatedById: userId,
            });
            return {
                message: 'Password changed successfully',
            };
        }
        catch (error) {
            if ((0, helpers_1.isUniqueConstraintPrismaError)(error)) {
                throw error_1.NotFoundRecordException;
            }
            throw error;
        }
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [shared_user_repo_1.SharedUserRepository,
        hashing_service_1.HashingService])
], ProfileService);
//# sourceMappingURL=profile.service.js.map