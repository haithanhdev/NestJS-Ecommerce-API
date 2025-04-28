import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, HttpException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AuthType, ConditionGuard } from 'src/shared/constants/auth.constants'
import { AUTH_TYPE_KEY, AuthTypeDecoratorPayload } from 'src/shared/decorators/auth.decorator'
import { AccessTokenGuard } from 'src/shared/guards/access-token.guard'
import { PaymentAPIKeyGuard } from 'src/shared/guards/payment-api-key.guard'
@Injectable()
export class AuthenticationGuard implements CanActivate {
  private readonly authTypeGuardMap: Record<string, CanActivate>
  constructor(
    private readonly reflector: Reflector,
    private readonly accessTokenGuard: AccessTokenGuard,
    private readonly paymentApiKeyGuard: PaymentAPIKeyGuard,
  ) {
    this.authTypeGuardMap = {
      [AuthType.Bearer]: this.accessTokenGuard,
      [AuthType.PaymentAPIKey]: this.paymentApiKeyGuard,
      [AuthType.None]: {
        canActivate: () => true,
      },
    }
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const authTypeValue = this.getAuthTypeValue(context)

    // console.log('authTypeValue', authTypeValue)
    // console.log('authTypeGuardMap', this.authTypeGuardMap)
    const guards = authTypeValue.authTypes.map((authType) => this.authTypeGuardMap[authType])
    // console.log('guards', guards)
    return authTypeValue.options.condition === ConditionGuard.Or
      ? this.handleOrCondition(guards, context)
      : this.handleAndCondition(guards, context)
  }

  //Lấy authTypeValue từ Setmetadata của auth decorator @Auth
  private getAuthTypeValue(context: ExecutionContext): AuthTypeDecoratorPayload {
    return (
      this.reflector.getAllAndOverride<AuthTypeDecoratorPayload | undefined>(AUTH_TYPE_KEY, [
        context.getHandler(),
        context.getClass(),
      ]) ?? { authTypes: [AuthType.Bearer], options: { condition: ConditionGuard.And } }
    )
  }
  private async handleOrCondition(guards: CanActivate[], context: ExecutionContext): Promise<boolean> {
    let lastError: any = null
    // Duyet qua het cac Guard, neu co 1 guard pass thi return true
    for (const guard of guards) {
      try {
        if (await guard.canActivate(context)) {
          return true
        }
      } catch (error) {
        lastError = error
      }
    }
    if (lastError instanceof HttpException) {
      throw lastError
    }
    throw new UnauthorizedException()
  }

  private async handleAndCondition(guards: CanActivate[], context: ExecutionContext): Promise<boolean> {
    // Duyet qua het cac Guard, neu moi guard pass thi return true
    for (const guard of guards) {
      try {
        if (!(await guard.canActivate(context))) {
          throw new UnauthorizedException()
        }
      } catch (error) {
        if (error instanceof HttpException) {
          throw error
        }
        throw new UnauthorizedException()
      }
    }
    return true
  }
}
