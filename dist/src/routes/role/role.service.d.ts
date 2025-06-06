import { RoleRepo } from 'src/routes/role/role.repo';
import { CreateRoleBodyType, GetRolesQueryType, UpdateRoleBodyType } from 'src/routes/role/role.model';
export declare class RoleService {
    private roleRepo;
    constructor(roleRepo: RoleRepo);
    list(pagination: GetRolesQueryType): Promise<{
        data: {
            id: number;
            name: string;
            description: string;
            isActive: boolean;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        }[];
        limit: number;
        page: number;
        totalItems: number;
        totalPages: number;
    }>;
    findById(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        isActive: boolean;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        permissions: {
            path: string;
            id: number;
            name: string;
            description: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
            module: string;
        }[];
    }>;
    create({ data, createdById }: {
        data: CreateRoleBodyType;
        createdById: number;
    }): Promise<{
        id: number;
        name: string;
        description: string;
        isActive: boolean;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    private verifyRole;
    update({ id, data, updatedById }: {
        id: number;
        data: UpdateRoleBodyType;
        updatedById: number;
    }): Promise<{
        id: number;
        name: string;
        description: string;
        isActive: boolean;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete({ id, deletedById }: {
        id: number;
        deletedById: number;
    }): Promise<{
        message: string;
    }>;
}
