import { CreatePermissionBodyType, GetPermissionsQueryType, GetPermissionsResType, PermissionType, UpdatePermissionBodyType } from 'src/routes/permission/permission.model';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class PermissionRepo {
    private prismaService;
    constructor(prismaService: PrismaService);
    list(pagination: GetPermissionsQueryType): Promise<GetPermissionsResType>;
    findById(id: number): Promise<PermissionType | null>;
    create({ createdById, data, }: {
        createdById: number | null;
        data: CreatePermissionBodyType;
    }): Promise<PermissionType>;
    update({ id, updatedById, data, }: {
        id: number;
        updatedById: number;
        data: UpdatePermissionBodyType;
    }): Promise<PermissionType>;
    delete({ id, deletedById, }: {
        id: number;
        deletedById: number;
    }, isHard?: boolean): Promise<PermissionType>;
}
