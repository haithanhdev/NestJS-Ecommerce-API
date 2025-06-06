"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOfVerificationCode = exports.UserStatus = exports.ConditionGuard = exports.AuthType = exports.REQUEST_ROLE_PERMISSIONS = exports.REQUEST_USER_KEY = void 0;
exports.REQUEST_USER_KEY = 'user';
exports.REQUEST_ROLE_PERMISSIONS = 'role_permissions';
exports.AuthType = {
    Bearer: 'Bearer',
    None: 'None',
    PaymentAPIKey: 'PaymentApiKey',
};
exports.ConditionGuard = {
    And: 'and',
    Or: 'or',
};
exports.UserStatus = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
    BLOCKED: 'BLOCKED',
};
exports.TypeOfVerificationCode = {
    REGISTER: 'REGISTER',
    FORGOT_PASSWORD: 'FORGOT_PASSWORD',
    LOGIN: 'LOGIN',
    DISABLE_2FA: 'DISABLE_2FA',
};
//# sourceMappingURL=auth.constants.js.map