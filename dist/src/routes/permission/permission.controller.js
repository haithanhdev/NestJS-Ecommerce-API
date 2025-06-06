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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const permission_dto_1 = require("./permission.dto");
const permission_service_1 = require("./permission.service");
const active_user_decorator_1 = require("../../shared/decorators/active-user.decorator");
const response_dto_1 = require("../../shared/dtos/response.dto");
let PermissionController = class PermissionController {
    constructor(permissionService) {
        this.permissionService = permissionService;
    }
    list(query) {
        return this.permissionService.list({
            page: query.page,
            limit: query.limit,
        });
    }
    findById(params) {
        return this.permissionService.findById(params.permissionId);
    }
    create(body, userId) {
        return this.permissionService.create({
            data: body,
            createdById: userId,
        });
    }
    update(body, params, userId) {
        return this.permissionService.update({
            data: body,
            id: params.permissionId,
            updatedById: userId,
        });
    }
    delete(params, userId) {
        return this.permissionService.delete({
            id: params.permissionId,
            deletedById: userId,
        });
    }
};
exports.PermissionController = PermissionController;
__decorate([
    (0, common_1.Get)(),
    (0, nestjs_zod_1.ZodSerializerDto)(permission_dto_1.GetPermissionsResDTO),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [permission_dto_1.GetPermissionsQueryDTO]),
    __metadata("design:returntype", void 0)
], PermissionController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':permissionId'),
    (0, nestjs_zod_1.ZodSerializerDto)(permission_dto_1.GetPermissionDetailResDTO),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [permission_dto_1.GetPermissionParamsDTO]),
    __metadata("design:returntype", void 0)
], PermissionController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, nestjs_zod_1.ZodSerializerDto)(permission_dto_1.GetPermissionDetailResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [permission_dto_1.CreatePermissionBodyDTO, Number]),
    __metadata("design:returntype", void 0)
], PermissionController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':permissionId'),
    (0, nestjs_zod_1.ZodSerializerDto)(permission_dto_1.GetPermissionDetailResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [permission_dto_1.UpdatePermissionBodyDTO,
        permission_dto_1.GetPermissionParamsDTO, Number]),
    __metadata("design:returntype", void 0)
], PermissionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':permissionId'),
    (0, nestjs_zod_1.ZodSerializerDto)(response_dto_1.MessageResDTO),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [permission_dto_1.GetPermissionParamsDTO, Number]),
    __metadata("design:returntype", void 0)
], PermissionController.prototype, "delete", null);
exports.PermissionController = PermissionController = __decorate([
    (0, common_1.Controller)('permissions'),
    __metadata("design:paramtypes", [permission_service_1.PermissionService])
], PermissionController);
//# sourceMappingURL=permission.controller.js.map