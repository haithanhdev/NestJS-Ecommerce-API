export declare const REQUEST_USER_KEY = "user";
export declare const REQUEST_ROLE_PERMISSIONS = "role_permissions";
export declare const AuthType: {
    readonly Bearer: "Bearer";
    readonly None: "None";
    readonly PaymentAPIKey: "PaymentApiKey";
};
export type AuthTypeType = (typeof AuthType)[keyof typeof AuthType];
export declare const ConditionGuard: {
    readonly And: "and";
    readonly Or: "or";
};
export type ConditionGuardType = (typeof ConditionGuard)[keyof typeof ConditionGuard];
export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly BLOCKED: "BLOCKED";
};
export declare const TypeOfVerificationCode: {
    readonly REGISTER: "REGISTER";
    readonly FORGOT_PASSWORD: "FORGOT_PASSWORD";
    readonly LOGIN: "LOGIN";
    readonly DISABLE_2FA: "DISABLE_2FA";
};
export type TypeOfVerificationCodeType = (typeof TypeOfVerificationCode)[keyof typeof TypeOfVerificationCode];
