import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class PaymentAPIKeyGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
