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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const auth_constants_1 = require("../constants/auth.constants");
const auth_decorator_1 = require("../decorators/auth.decorator");
const access_token_guard_1 = require("./access-token.guard");
const payment_api_key_guard_1 = require("./payment-api-key.guard");
let AuthenticationGuard = class AuthenticationGuard {
    constructor(reflector, accessTokenGuard, paymentApiKeyGuard) {
        this.reflector = reflector;
        this.accessTokenGuard = accessTokenGuard;
        this.paymentApiKeyGuard = paymentApiKeyGuard;
        this.authTypeGuardMap = {
            [auth_constants_1.AuthType.Bearer]: this.accessTokenGuard,
            [auth_constants_1.AuthType.PaymentAPIKey]: this.paymentApiKeyGuard,
            [auth_constants_1.AuthType.None]: {
                canActivate: () => true,
            },
        };
    }
    async canActivate(context) {
        const authTypeValue = this.getAuthTypeValue(context);
        const guards = authTypeValue.authTypes.map((authType) => this.authTypeGuardMap[authType]);
        return authTypeValue.options.condition === auth_constants_1.ConditionGuard.Or
            ? this.handleOrCondition(guards, context)
            : this.handleAndCondition(guards, context);
    }
    getAuthTypeValue(context) {
        return (this.reflector.getAllAndOverride(auth_decorator_1.AUTH_TYPE_KEY, [
            context.getHandler(),
            context.getClass(),
        ]) ?? { authTypes: [auth_constants_1.AuthType.Bearer], options: { condition: auth_constants_1.ConditionGuard.And } });
    }
    async handleOrCondition(guards, context) {
        let lastError = null;
        for (const guard of guards) {
            try {
                if (await guard.canActivate(context)) {
                    return true;
                }
            }
            catch (error) {
                lastError = error;
            }
        }
        if (lastError instanceof common_1.HttpException) {
            throw lastError;
        }
        throw new common_1.UnauthorizedException();
    }
    async handleAndCondition(guards, context) {
        for (const guard of guards) {
            try {
                if (!(await guard.canActivate(context))) {
                    throw new common_1.UnauthorizedException();
                }
            }
            catch (error) {
                if (error instanceof common_1.HttpException) {
                    throw error;
                }
                throw new common_1.UnauthorizedException();
            }
        }
        return true;
    }
};
exports.AuthenticationGuard = AuthenticationGuard;
exports.AuthenticationGuard = AuthenticationGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        access_token_guard_1.AccessTokenGuard,
        payment_api_key_guard_1.PaymentAPIKeyGuard])
], AuthenticationGuard);
//# sourceMappingURL=authentication.guard.js.map