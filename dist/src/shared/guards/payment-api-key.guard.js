"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAPIKeyGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = __importDefault(require("../config"));
let PaymentAPIKeyGuard = class PaymentAPIKeyGuard {
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const xAPIKey = request.headers['authorization']?.split(' ')[1];
        if (xAPIKey !== config_1.default.PAYMENT_API_KEY) {
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
};
exports.PaymentAPIKeyGuard = PaymentAPIKeyGuard;
exports.PaymentAPIKeyGuard = PaymentAPIKeyGuard = __decorate([
    (0, common_1.Injectable)()
], PaymentAPIKeyGuard);
//# sourceMappingURL=payment-api-key.guard.js.map