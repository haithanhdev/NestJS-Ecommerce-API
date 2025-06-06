import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AccessTokenGuard } from 'src/shared/guards/access-token.guard';
import { PaymentAPIKeyGuard } from 'src/shared/guards/payment-api-key.guard';
export declare class AuthenticationGuard implements CanActivate {
    private readonly reflector;
    private readonly accessTokenGuard;
    private readonly paymentApiKeyGuard;
    private readonly authTypeGuardMap;
    constructor(reflector: Reflector, accessTokenGuard: AccessTokenGuard, paymentApiKeyGuard: PaymentAPIKeyGuard);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private getAuthTypeValue;
    private handleOrCondition;
    private handleAndCondition;
}
