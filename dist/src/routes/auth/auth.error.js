"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidTOTPAndCodeException = exports.TOTPNotEnabledException = exports.TOTPAlreadyEnabledException = exports.GoogleUserInfoError = exports.UnauthorizedAccessException = exports.RefreshTokenAlreadyUsedException = exports.EmailNotFoundException = exports.EmailAlreadyExistsException = exports.FailedToSendOTPException = exports.OTPExpiredException = exports.InvalidTOTPException = exports.InvalidOTPException = void 0;
const common_1 = require("@nestjs/common");
exports.InvalidOTPException = new common_1.UnprocessableEntityException([
    {
        message: 'Error.InvalidOTP',
        path: 'code',
    },
]);
exports.InvalidTOTPException = new common_1.UnprocessableEntityException([
    {
        message: 'Error.InvalidTOTP',
        path: 'totpCode',
    },
]);
exports.OTPExpiredException = new common_1.UnprocessableEntityException([
    {
        message: 'Error.OTPExpired',
        path: 'code',
    },
]);
exports.FailedToSendOTPException = new common_1.UnprocessableEntityException([
    {
        message: 'Error.FailedToSendOTP',
        path: 'code',
    },
]);
exports.EmailAlreadyExistsException = new common_1.UnprocessableEntityException([
    {
        message: 'Error.EmailAlreadyExists',
        path: 'email',
    },
]);
exports.EmailNotFoundException = new common_1.UnprocessableEntityException([
    {
        message: 'Error.EmailNotFound',
        path: 'email',
    },
]);
exports.RefreshTokenAlreadyUsedException = new common_1.UnauthorizedException('Error.RefreshTokenAlreadyUsed');
exports.UnauthorizedAccessException = new common_1.UnauthorizedException('Error.UnauthorizedAccess');
exports.GoogleUserInfoError = new Error('Error.FailedToGetGoogleUserInfo');
exports.TOTPAlreadyEnabledException = new common_1.UnprocessableEntityException([
    {
        message: 'Error.TOTPAlreadyEnabled',
        path: 'totpSecret',
    },
]);
exports.TOTPNotEnabledException = new common_1.UnprocessableEntityException([
    {
        message: 'Error.TOTPNotEnabled',
        path: 'totpSecret',
    },
]);
exports.InvalidTOTPAndCodeException = new common_1.UnprocessableEntityException([
    {
        message: 'Error.InvalidTOTPAndCode',
        path: 'totpSecret',
    },
    {
        message: 'Error.InvalidTOTPAndCode',
        path: 'code',
    },
]);
//# sourceMappingURL=auth.error.js.map