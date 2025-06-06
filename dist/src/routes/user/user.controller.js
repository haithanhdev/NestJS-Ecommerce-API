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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const user_dto_1 = require("./user.dto");
const user_service_1 = require("./user.service");
const active_role_permissions_1 = require("../../shared/decorators/active-role-permissions");
const active_user_decorator_1 = require("../../shared/decorators/active-user.decorator");
const auth_decorator_1 = require("../../shared/decorators/auth.decorator");
const response_dto_1 = require("../../shared/dtos/response.dto");
const shared_user_dto_1 = require("../../shared/dtos/shared-user.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    list(query) {
        return this.userService.list({
            page: query.page,
            limit: query.limit,
        });
    }
    findById(params) {
        return this.userService.findById(params.userId);
    }
    create(body, userId, roleName) {
        return this.userService.create({
            data: body,
            createdById: userId,
            createdByRoleName: roleName,
        });
    }
    update(body, params, userId, roleName) {
        return this.userService.update({
            data: body,
            id: params.userId,
            updatedById: userId,
            updatedByRoleName: roleName,
        });
    }
    delete(params, userId, roleName) {
        return this.userService.delete({
            id: params.userId,
            deletedById: userId,
            deletedByRoleName: roleName,
        });
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    (0, nestjs_zod_1.ZodSerializerDto)(user_dto_1.GetUsersResDTO),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.GetUsersQueryDTO]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "list", null);
__decorate([
    (0, auth_decorator_1.IsPublic)(),
    (0, common_1.Get)(':userId'),
    (0, nestjs_zod_1.ZodSerializerDto)(shared_user_dto_1.GetUserProfileResDTO),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.GetUserParamsDTO]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, nestjs_zod_1.ZodSerializerDto)(user_dto_1.CreateUserResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __param(2, (0, active_role_permissions_1.ActiveRolePermissions)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserBodyDTO, Number, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':userId'),
    (0, nestjs_zod_1.ZodSerializerDto)(shared_user_dto_1.UpdateProfileResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, active_user_decorator_1.ActiveUser)('userId')),
    __param(3, (0, active_role_permissions_1.ActiveRolePermissions)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UpdateUserBodyDTO,
        user_dto_1.GetUserParamsDTO, Number, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':userId'),
    (0, nestjs_zod_1.ZodSerializerDto)(response_dto_1.MessageResDTO),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __param(2, (0, active_role_permissions_1.ActiveRolePermissions)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.GetUserParamsDTO, Number, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "delete", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map