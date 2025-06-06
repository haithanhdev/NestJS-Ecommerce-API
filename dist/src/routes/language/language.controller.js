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
exports.LanguageController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const language_dto_1 = require("./language.dto");
const language_service_1 = require("./language.service");
const active_user_decorator_1 = require("../../shared/decorators/active-user.decorator");
const response_dto_1 = require("../../shared/dtos/response.dto");
let LanguageController = class LanguageController {
    constructor(languageService) {
        this.languageService = languageService;
    }
    findAll() {
        return this.languageService.findAll();
    }
    findById(params) {
        return this.languageService.findById(params.languageId);
    }
    create(body, userId) {
        return this.languageService.create({
            data: body,
            createdById: userId,
        });
    }
    update(body, params, userId) {
        return this.languageService.update({
            data: body,
            id: params.languageId,
            updatedById: userId,
        });
    }
    delete(params) {
        return this.languageService.delete(params.languageId);
    }
};
exports.LanguageController = LanguageController;
__decorate([
    (0, common_1.Get)(),
    (0, nestjs_zod_1.ZodSerializerDto)(language_dto_1.GetLanguagesResDTO),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LanguageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':languageId'),
    (0, nestjs_zod_1.ZodSerializerDto)(language_dto_1.GetLanguageDetailResDTO),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [language_dto_1.GetLanguageParamsDTO]),
    __metadata("design:returntype", void 0)
], LanguageController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, nestjs_zod_1.ZodSerializerDto)(language_dto_1.GetLanguageDetailResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [language_dto_1.CreateLanguageBodyDTO, Number]),
    __metadata("design:returntype", void 0)
], LanguageController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':languageId'),
    (0, nestjs_zod_1.ZodSerializerDto)(language_dto_1.GetLanguageDetailResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [language_dto_1.UpdateLanguageBodyDTO,
        language_dto_1.GetLanguageParamsDTO, Number]),
    __metadata("design:returntype", void 0)
], LanguageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':languageId'),
    (0, nestjs_zod_1.ZodSerializerDto)(response_dto_1.MessageResDTO),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [language_dto_1.GetLanguageParamsDTO]),
    __metadata("design:returntype", void 0)
], LanguageController.prototype, "delete", null);
exports.LanguageController = LanguageController = __decorate([
    (0, common_1.Controller)('languages'),
    __metadata("design:paramtypes", [language_service_1.LanguageService])
], LanguageController);
//# sourceMappingURL=language.controller.js.map