import { CreateRoleBodyType, GetRolesQueryType, GetRolesResType, RoleWithPermissionsType, UpdateRoleBodyType } from 'src/routes/role/role.model';
import { RoleType } from 'src/shared/models/shared-role.model';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class RoleRepo {
    private prismaService;
    constructor(prismaService: PrismaService);
    list(pagination: GetRolesQueryType): Promise<GetRolesResType>;
    findById(id: number): Promise<RoleWithPermissionsType | null>;
    create({ createdById, data }: {
        createdById: number | null;
        data: CreateRoleBodyType;
    }): Promise<RoleType>;
    update({ id, updatedById, data, }: {
        id: number;
        updatedById: number;
        data: UpdateRoleBodyType;
    }): Promise<RoleType>;
    delete({ id, deletedById, }: {
        id: number;
        deletedById: number;
    }, isHard?: boolean): Promise<RoleType>;
}
