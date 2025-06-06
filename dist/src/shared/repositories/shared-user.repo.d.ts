import { PermissionType } from 'src/shared/models/shared-permission.model';
import { RoleType } from 'src/shared/models/shared-role.model';
import { UserType } from 'src/shared/models/shared-user.model';
import { PrismaService } from 'src/shared/services/prisma.service';
type UserIncludeRolePermissionsType = UserType & {
    role: RoleType & {
        permissions: PermissionType[];
    };
};
export type WhereUniqueUserType = {
    id: number;
} | {
    email: string;
};
export declare class SharedUserRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findUnique(where: WhereUniqueUserType): Promise<UserType | null>;
    findUniqueIncludeRolePermissions(where: WhereUniqueUserType): Promise<UserIncludeRolePermissionsType | null>;
    update(where: {
        id: number;
    }, data: Partial<UserType>): Promise<UserType | null>;
}
export {};
