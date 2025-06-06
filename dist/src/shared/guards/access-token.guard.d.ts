import { CanActivate, ExecutionContext } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { TokenService } from 'src/shared/services/token.service';
export declare class AccessTokenGuard implements CanActivate {
    private readonly tokenService;
    private readonly prismaService;
    constructor(tokenService: TokenService, prismaService: PrismaService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractAccessTokenFromHeader;
    private extractAndValidateToken;
    private validateUserPermission;
}
