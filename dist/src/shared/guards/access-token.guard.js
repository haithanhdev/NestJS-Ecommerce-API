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
exports.AccessTokenGuard = void 0;
const common_1 = require("@nestjs/common");
const auth_constants_1 = require("../constants/auth.constants");
const prisma_service_1 = require("../services/prisma.service");
const token_service_1 = require("../services/token.service");
let AccessTokenGuard = class AccessTokenGuard {
    constructor(tokenService, prismaService) {
        this.tokenService = tokenService;
        this.prismaService = prismaService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const decodedAccessToken = await this.extractAndValidateToken(request);
        await this.validateUserPermission(decodedAccessToken, request);
        return true;
    }
    extractAccessTokenFromHeader(request) {
        const accessToken = request.headers.authorization?.split(' ')[1];
        if (!accessToken) {
            throw new common_1.UnauthorizedException('Error.MissingAccessToken');
        }
        return accessToken;
    }
    async extractAndValidateToken(request) {
        const accessToken = this.extractAccessTokenFromHeader(request);
        try {
            const decodedAccessToken = await this.tokenService.verifyAccessToken(accessToken);
            request[auth_constants_1.REQUEST_USER_KEY] = decodedAccessToken;
            return decodedAccessToken;
        }
        catch {
            throw new common_1.UnauthorizedException('Error.InvalidAccessToken');
        }
    }
    async validateUserPermission(decodedAccessToken, request) {
        const roleId = decodedAccessToken.roleId;
        const path = request.route.path;
        const method = request.method;
        const role = await this.prismaService.role
            .findUniqueOrThrow({
            where: {
                id: roleId,
                deletedAt: null,
                isActive: true,
            },
            include: {
                permissions: {
                    where: {
                        deletedAt: null,
                        path,
                        method,
                    },
                },
            },
        })
            .catch(() => {
            throw new common_1.ForbiddenException();
        });
        const canAccess = role.permissions.length > 0;
        if (!canAccess) {
            throw new common_1.ForbiddenException();
        }
        request[auth_constants_1.REQUEST_ROLE_PERMISSIONS] = role;
    }
};
exports.AccessTokenGuard = AccessTokenGuard;
exports.AccessTokenGuard = AccessTokenGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [token_service_1.TokenService,
        prisma_service_1.PrismaService])
], AccessTokenGuard);
//# sourceMappingURL=access-token.guard.js.map