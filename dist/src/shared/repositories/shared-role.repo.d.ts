import { PrismaService } from 'src/shared/services/prisma.service';
export declare class SharedRoleRepository {
    private readonly prismaService;
    private clientRoleId;
    private adminRoleId;
    constructor(prismaService: PrismaService);
    private getRole;
    getClientRoleId(): Promise<number>;
    getAdminRoleId(): Promise<number>;
}
