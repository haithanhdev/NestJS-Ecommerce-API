import { PermissionRepo } from 'src/routes/permission/permission.repo';
import { CreatePermissionBodyType, GetPermissionsQueryType, UpdatePermissionBodyType } from 'src/routes/permission/permission.model';
export declare class PermissionService {
    private permissionRepo;
    constructor(permissionRepo: PermissionRepo);
    list(pagination: GetPermissionsQueryType): Promise<{
        data: {
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
        limit: number;
        page: number;
        totalItems: number;
        totalPages: number;
    }>;
    findById(id: number): Promise<{
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
    }>;
    create({ data, createdById }: {
        data: CreatePermissionBodyType;
        createdById: number;
    }): Promise<{
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
    }>;
    update({ id, data, updatedById }: {
        id: number;
        data: UpdatePermissionBodyType;
        updatedById: number;
    }): Promise<{
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
    }>;
    delete({ id, deletedById }: {
        id: number;
        deletedById: number;
    }): Promise<{
        message: string;
    }>;
}
