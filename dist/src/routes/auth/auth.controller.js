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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const auth_dto_1 = require("./auth.dto");
const auth_service_1 = require("./auth.service");
const google_service_1 = require("./google.service");
const config_1 = __importDefault(require("../../shared/config"));
const active_user_decorator_1 = require("../../shared/decorators/active-user.decorator");
const auth_decorator_1 = require("../../shared/decorators/auth.decorator");
const user_agent_decorator_1 = require("../../shared/decorators/user-agent.decorator");
const request_dto_1 = require("../../shared/dtos/request.dto");
const response_dto_1 = require("../../shared/dtos/response.dto");
let AuthController = class AuthController {
    constructor(authService, googleService) {
        this.authService = authService;
        this.googleService = googleService;
    }
    async register(body) {
        const res = await this.authService.register(body);
        return {
            message: 'Register successfully',
            data: res,
        };
    }
    async sendOTP(body) {
        return await this.authService.sendOTP(body);
    }
    async login(body, userAgent, ip) {
        const res = await this.authService.login({
            ...body,
            userAgent,
            ip,
        });
        return {
            message: 'Login successfully',
            data: res,
        };
    }
    async refreshToken(body, userAgent, ip) {
        return await this.authService.refreshToken({
            refreshToken: body.refreshToken,
            userAgent,
            ip,
        });
    }
    async logout(body) {
        return await this.authService.logout(body.refreshToken);
    }
    getGoogleLink(req, userAgent, ip) {
        return this.googleService.getAuthorizationUrl({ userAgent, ip });
    }
    async googleCallback(code, state, res) {
        try {
            const data = await this.googleService.googleCallback({ code, state });
            return res.redirect(`${config_1.default.GOOGLE_CLIENT_REDIRECT_URI}?accessToken=${data.data.accessToken}&refreshToken=${data.data.refreshToken}`);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Login with google failed, please try again';
            return res.redirect(`${config_1.default.GOOGLE_CLIENT_REDIRECT_URI}?errorMessage=${message}`);
        }
    }
    async forgotPassword(body) {
        return await this.authService.forgotPassword(body);
    }
    async setupTwoFactorAuth(_, userId) {
        return await this.authService.setupTwoFactorAuth(userId);
    }
    disableTwoFactorAuth(body, userId) {
        return this.authService.disableTwoFactorAuth({
            ...body,
            userId,
        });
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    (0, auth_decorator_1.IsPublic)(),
    (0, nestjs_zod_1.ZodSerializerDto)(auth_dto_1.RegisterResDTO),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RegisterBodyDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('otp'),
    (0, auth_decorator_1.IsPublic)(),
    (0, nestjs_zod_1.ZodSerializerDto)(response_dto_1.MessageResDTO),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.SendOTPBodyDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendOTP", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, auth_decorator_1.IsPublic)(),
    (0, nestjs_zod_1.ZodSerializerDto)(auth_dto_1.LoginResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_agent_decorator_1.UserAgent)()),
    __param(2, (0, common_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.LoginBodyDTO, String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('refresh-token'),
    (0, auth_decorator_1.IsPublic)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, nestjs_zod_1.ZodSerializerDto)(auth_dto_1.RefreshTokenResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_agent_decorator_1.UserAgent)()),
    __param(2, (0, common_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RefreshTokenBodyDTO, String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, nestjs_zod_1.ZodSerializerDto)(response_dto_1.MessageResDTO),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.LogoutBodyDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('google-link'),
    (0, auth_decorator_1.IsPublic)(),
    (0, nestjs_zod_1.ZodSerializerDto)(auth_dto_1.GetAuthorizationUrlResDTO),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, user_agent_decorator_1.UserAgent)()),
    __param(2, (0, common_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getGoogleLink", null);
__decorate([
    (0, common_1.Get)('google/callback'),
    (0, auth_decorator_1.IsPublic)(),
    __param(0, (0, common_1.Query)('code')),
    __param(1, (0, common_1.Query)('state')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleCallback", null);
__decorate([
    (0, common_1.Post)('forgot-password'),
    (0, auth_decorator_1.IsPublic)(),
    (0, nestjs_zod_1.ZodSerializerDto)(response_dto_1.MessageResDTO),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ForgotPasswordBodyDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('2fa/setup'),
    (0, nestjs_zod_1.ZodSerializerDto)(auth_dto_1.TwoFactorSetupResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.EmptyBodyDTO, Number]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "setupTwoFactorAuth", null);
__decorate([
    (0, common_1.Post)('2fa/disable'),
    (0, nestjs_zod_1.ZodSerializerDto)(response_dto_1.MessageResDTO),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, active_user_decorator_1.ActiveUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.DisableTwoFactorBodyDTO, Number]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "disableTwoFactorAuth", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        google_service_1.GoogleService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map