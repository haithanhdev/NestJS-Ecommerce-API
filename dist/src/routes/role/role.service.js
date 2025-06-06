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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const role_repo_1 = require("./role.repo");
const error_1 = require("../../shared/error");
const helpers_1 = require("../../shared/helpers");
const role_error_1 = require("./role.error");
const role_constants_1 = require("../../shared/constants/role.constants");
let RoleService = class RoleService {
    constructor(roleRepo) {
        this.roleRepo = roleRepo;
    }
    async list(pagination) {
        const data = await this.roleRepo.list(pagination);
        return data;
    }
    async findById(id) {
        const role = await this.roleRepo.findById(id);
        if (!role) {
            throw error_1.NotFoundRecordException;
        }
        return role;
    }
    async create({ data, createdById }) {
        try {
            const role = await this.roleRepo.create({
                createdById,
                data,
            });
            return role;
        }
        catch (error) {
            if ((0, helpers_1.isUniqueConstraintPrismaError)(error)) {
                throw role_error_1.RoleAlreadyExistsException;
            }
            throw error;
        }
    }
    async verifyRole(roleId) {
        const role = await this.roleRepo.findById(roleId);
        if (!role) {
            throw error_1.NotFoundRecordException;
        }
        const baseRoles = [role_constants_1.RoleName.Admin, role_constants_1.RoleName.Client, role_constants_1.RoleName.Seller];
        if (baseRoles.includes(role.name)) {
            throw role_error_1.ProhibitedActionOnBaseRoleException;
        }
    }
    async update({ id, data, updatedById }) {
        try {
            await this.verifyRole(id);
            const updatedRole = await this.roleRepo.update({
                id,
                updatedById,
                data,
            });
            return updatedRole;
        }
        catch (error) {
            if ((0, helpers_1.isNotFoundPrismaError)(error)) {
                throw error_1.NotFoundRecordException;
            }
            if ((0, helpers_1.isUniqueConstraintPrismaError)(error)) {
                throw role_error_1.RoleAlreadyExistsException;
            }
            throw error;
        }
    }
    async delete({ id, deletedById }) {
        try {
            await this.verifyRole(id);
            await this.roleRepo.delete({
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
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [role_repo_1.RoleRepo])
], RoleService);
//# sourceMappingURL=role.service.js.map