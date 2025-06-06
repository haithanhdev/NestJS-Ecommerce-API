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
var RemoveRefreshTokenCronjob_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveRefreshTokenCronjob = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../shared/services/prisma.service");
let RemoveRefreshTokenCronjob = RemoveRefreshTokenCronjob_1 = class RemoveRefreshTokenCronjob {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.logger = new common_1.Logger(RemoveRefreshTokenCronjob_1.name);
    }
    async handleCron() {
        const refreshTokens = await this.prismaService.refreshToken.deleteMany({
            where: {
                expiresAt: {
                    lt: new Date(),
                },
            },
        });
        this.logger.debug(`Removed ${refreshTokens.count} expired refresh tokens.`);
    }
};
exports.RemoveRefreshTokenCronjob = RemoveRefreshTokenCronjob;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_5_MINUTES),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RemoveRefreshTokenCronjob.prototype, "handleCron", null);
exports.RemoveRefreshTokenCronjob = RemoveRefreshTokenCronjob = RemoveRefreshTokenCronjob_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RemoveRefreshTokenCronjob);
//# sourceMappingURL=remove-refresh-token.cronjob.js.map