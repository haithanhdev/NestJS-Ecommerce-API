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
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const role_dto_1 = require("./role.dto");
const role_service_1 = require("./role.service");
const active_user_decorator_1 = require("../../shared/decorators/active-user.decorator");
const response_dto_1 = require("../../shared/dtos/response.dto");
let RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    list(query) {
        return this.roleService.list({
            page: query.page,
            limit: query.limit,
        });
    }
    findById(params) {
        return this.roleService.findById(params.roleId);
    }
    create(body, userId) {
        return this.roleService.create({
            data: body,
            createdById: userId,
        });
    }
    update(body, params, userId) {
        return this.roleService.update({
            data: body,
            id: params.roleId,
            updatedById: userId,
        });
    }
    delete(params, userId) {
        return this.roleService.delete({
            id: params.roleId,
            deletedById: userId,
        });
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, common_1.Get)(),
    (0, nestjs_zod_1.ZodSerializerDto)(role_dto_1.GetRolesResDTO),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.GetRolesQueryDTO]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':roleId'),
    (0, nestjs_zod_1.ZodSerializerDto)(role_dto_1.GetRoleDetailResDTO),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.GetRoleParamsDTO]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, nestjs_zod_1.ZodSerializerDto)(role_dto_1.CreateRoleResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.CreateRoleBodyDTO, Number]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':roleId'),
    (0, nestjs_zod_1.ZodSerializerDto)(role_dto_1.GetRoleDetailResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.UpdateRoleBodyDTO, role_dto_1.GetRoleParamsDTO, Number]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':roleId'),
    (0, nestjs_zod_1.ZodSerializerDto)(response_dto_1.MessageResDTO),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.GetRoleParamsDTO, Number]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "delete", null);
exports.RoleController = RoleController = __decorate([
    (0, common_1.Controller)('roles'),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
//# sourceMappingURL=role.controller.js.map