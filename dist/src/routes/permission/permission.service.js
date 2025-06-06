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
exports.PermissionService = void 0;
const common_1 = require("@nestjs/common");
const permission_repo_1 = require("./permission.repo");
const error_1 = require("../../shared/error");
const helpers_1 = require("../../shared/helpers");
const permission_error_1 = require("./permission.error");
let PermissionService = class PermissionService {
    constructor(permissionRepo) {
        this.permissionRepo = permissionRepo;
    }
    async list(pagination) {
        const data = await this.permissionRepo.list(pagination);
        return data;
    }
    async findById(id) {
        const permission = await this.permissionRepo.findById(id);
        if (!permission) {
            throw error_1.NotFoundRecordException;
        }
        return permission;
    }
    async create({ data, createdById }) {
        try {
            return await this.permissionRepo.create({
                createdById,
                data,
            });
        }
        catch (error) {
            if ((0, helpers_1.isUniqueConstraintPrismaError)(error)) {
                throw permission_error_1.PermissionAlreadyExistsException;
            }
            throw error;
        }
    }
    async update({ id, data, updatedById }) {
        try {
            const permission = await this.permissionRepo.update({
                id,
                updatedById,
                data,
            });
            return permission;
        }
        catch (error) {
            if ((0, helpers_1.isNotFoundPrismaError)(error)) {
                throw error_1.NotFoundRecordException;
            }
            if ((0, helpers_1.isUniqueConstraintPrismaError)(error)) {
                throw permission_error_1.PermissionAlreadyExistsException;
            }
            throw error;
        }
    }
    async delete({ id, deletedById }) {
        try {
            await this.permissionRepo.delete({
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
exports.PermissionService = PermissionService;
exports.PermissionService = PermissionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [permission_repo_1.PermissionRepo])
], PermissionService);
//# sourceMappingURL=permission.service.js.map