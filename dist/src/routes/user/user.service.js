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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repo_1 = require("./user.repo");
const error_1 = require("../../shared/error");
const helpers_1 = require("../../shared/helpers");
const user_error_1 = require("./user.error");
const shared_user_repo_1 = require("../../shared/repositories/shared-user.repo");
const hashing_service_1 = require("../../shared/services/hashing.service");
const shared_role_repo_1 = require("../../shared/repositories/shared-role.repo");
const role_constants_1 = require("../../shared/constants/role.constants");
let UserService = class UserService {
    constructor(userRepo, hashingService, sharedUserRepository, sharedRoleRepository) {
        this.userRepo = userRepo;
        this.hashingService = hashingService;
        this.sharedUserRepository = sharedUserRepository;
        this.sharedRoleRepository = sharedRoleRepository;
    }
    list(pagination) {
        return this.userRepo.list(pagination);
    }
    async findById(id) {
        const user = await this.sharedUserRepository.findUniqueIncludeRolePermissions({
            id,
        });
        if (!user) {
            throw error_1.NotFoundRecordException;
        }
        return user;
    }
    async create({ data, createdById, createdByRoleName, }) {
        try {
            await this.verifyRole({
                roleNameAgent: createdByRoleName,
                roleIdTarget: data.roleId,
            });
            const hashedPassword = await this.hashingService.hash(data.password);
            const user = await this.userRepo.create({
                createdById,
                data: {
                    ...data,
                    password: hashedPassword,
                },
            });
            return user;
        }
        catch (error) {
            if ((0, helpers_1.isForeignKeyConstraintPrismaError)(error)) {
                throw user_error_1.RoleNotFoundException;
            }
            if ((0, helpers_1.isUniqueConstraintPrismaError)(error)) {
                throw user_error_1.UserAlreadyExistsException;
            }
            throw error;
        }
    }
    async verifyRole({ roleNameAgent, roleIdTarget }) {
        if (roleNameAgent === role_constants_1.RoleName.Admin) {
            return true;
        }
        else {
            const adminRoleId = await this.sharedRoleRepository.getAdminRoleId();
            if (roleIdTarget === adminRoleId) {
                throw new common_1.ForbiddenException();
            }
            return true;
        }
    }
    async update({ id, data, updatedById, updatedByRoleName, }) {
        try {
            this.verifyYourself({
                userAgentId: updatedById,
                userTargetId: id,
            });
            const roleIdTarget = await this.getRoleIdByUserId(id);
            await this.verifyRole({
                roleNameAgent: updatedByRoleName,
                roleIdTarget,
            });
            const updatedUser = await this.sharedUserRepository.update({ id }, {
                ...data,
                updatedById,
            });
            return updatedUser;
        }
        catch (error) {
            if ((0, helpers_1.isNotFoundPrismaError)(error)) {
                throw error_1.NotFoundRecordException;
            }
            if ((0, helpers_1.isUniqueConstraintPrismaError)(error)) {
                throw user_error_1.UserAlreadyExistsException;
            }
            if ((0, helpers_1.isForeignKeyConstraintPrismaError)(error)) {
                throw user_error_1.RoleNotFoundException;
            }
            throw error;
        }
    }
    async getRoleIdByUserId(userId) {
        const currentUser = await this.sharedUserRepository.findUnique({
            id: userId,
        });
        if (!currentUser) {
            throw error_1.NotFoundRecordException;
        }
        return currentUser.roleId;
    }
    verifyYourself({ userAgentId, userTargetId }) {
        if (userAgentId === userTargetId) {
            throw user_error_1.CannotUpdateOrDeleteYourselfException;
        }
    }
    async delete({ id, deletedById, deletedByRoleName }) {
        try {
            this.verifyYourself({
                userAgentId: deletedById,
                userTargetId: id,
            });
            const roleIdTarget = await this.getRoleIdByUserId(id);
            await this.verifyRole({
                roleNameAgent: deletedByRoleName,
                roleIdTarget,
            });
            await this.userRepo.delete({
                id,
                deletedById,
            });
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
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repo_1.UserRepo,
        hashing_service_1.HashingService,
        shared_user_repo_1.SharedUserRepository,
        shared_role_repo_1.SharedRoleRepository])
], UserService);
//# sourceMappingURL=user.service.js.map