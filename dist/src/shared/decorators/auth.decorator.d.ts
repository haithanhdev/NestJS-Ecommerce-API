import { AuthTypeType, ConditionGuardType } from 'src/shared/constants/auth.constants';
export declare const AUTH_TYPE_KEY = "authType";
export type AuthTypeDecoratorPayload = {
    authTypes: AuthTypeType[];
    options: {
        condition: ConditionGuardType;
    };
};
export declare const Auth: (authTypes: AuthTypeType[], options?: {
    condition: ConditionGuardType;
}) => import("@nestjs/common").CustomDecorator<string>;
export declare const IsPublic: () => import("@nestjs/common").CustomDecorator<string>;
