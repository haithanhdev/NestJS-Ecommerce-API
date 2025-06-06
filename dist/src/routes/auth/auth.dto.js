"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisableTwoFactorBodyDTO = exports.TwoFactorSetupResDTO = exports.ForgotPasswordBodyDTO = exports.GetAuthorizationUrlResDTO = exports.LogoutBodyDTO = exports.RefreshTokenResDTO = exports.RefreshTokenBodyDTO = exports.LoginResDTO = exports.LoginBodyDTO = exports.SendOTPBodyDTO = exports.RegisterResDTO = exports.RegisterBodyDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const auth_model_1 = require("./auth.model");
class RegisterBodyDTO extends (0, nestjs_zod_1.createZodDto)(auth_model_1.RegisterBodySchema) {
}
exports.RegisterBodyDTO = RegisterBodyDTO;
class RegisterResDTO extends (0, nestjs_zod_1.createZodDto)(auth_model_1.RegisterResSchema) {
}
exports.RegisterResDTO = RegisterResDTO;
class SendOTPBodyDTO extends (0, nestjs_zod_1.createZodDto)(auth_model_1.SendOTPBodySchema) {
}
exports.SendOTPBodyDTO = SendOTPBodyDTO;
class LoginBodyDTO extends (0, nestjs_zod_1.createZodDto)(auth_model_1.LoginBodySchema) {
}
exports.LoginBodyDTO = LoginBodyDTO;
class LoginResDTO extends (0, nestjs_zod_1.createZodDto)(auth_model_1.LoginResSchema) {
}
exports.LoginResDTO = LoginResDTO;
class RefreshTokenBodyDTO extends (0, nestjs_zod_1.createZodDto)(auth_model_1.RefreshTokenBodySchema) {
}
exports.RefreshTokenBodyDTO = RefreshTokenBodyDTO;
class RefreshTokenResDTO extends (0, nestjs_zod_1.createZodDto)(auth_model_1.RefreshTokenResSchema) {
}
exports.RefreshTokenResDTO = RefreshTokenResDTO;
class LogoutBodyDTO extends (0, nestjs_zod_1.createZodDto)(auth_model_1.LogoutBodySchema) {
}
exports.LogoutBodyDTO = LogoutBodyDTO;
class GetAuthorizationUrlResDTO extends (0, nestjs_zod_1.createZodDto)(auth_model_1.GetAuthorizationUrlResSchema) {
}
exports.GetAuthorizationUrlResDTO = GetAuthorizationUrlResDTO;
class ForgotPasswordBodyDTO extends (0, nestjs_zod_1.createZodDto)(auth_model_1.ForgotPasswordBodySchema) {
}
exports.ForgotPasswordBodyDTO = ForgotPasswordBodyDTO;
class TwoFactorSetupResDTO extends (0, nestjs_zod_1.createZodDto)(auth_model_1.TwoFactorSetupResSchema) {
}
exports.TwoFactorSetupResDTO = TwoFactorSetupResDTO;
class DisableTwoFactorBodyDTO extends (0, nestjs_zod_1.createZodDto)(auth_model_1.DisableTwoFactorBodySchema) {
}
exports.DisableTwoFactorBodyDTO = DisableTwoFactorBodyDTO;
//# sourceMappingURL=auth.dto.js.map