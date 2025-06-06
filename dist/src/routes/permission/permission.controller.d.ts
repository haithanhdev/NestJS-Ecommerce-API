import { CreatePermissionBodyDTO, GetPermissionParamsDTO, GetPermissionsQueryDTO, UpdatePermissionBodyDTO } from 'src/routes/permission/permission.dto';
import { PermissionService } from 'src/routes/permission/permission.service';
export declare class PermissionController {
    private readonly permissionService;
    constructor(permissionService: PermissionService);
    list(query: GetPermissionsQueryDTO): Promise<{
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
    findById(params: GetPermissionParamsDTO): Promise<{
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
    create(body: CreatePermissionBodyDTO, userId: number): Promise<{
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
    update(body: UpdatePermissionBodyDTO, params: GetPermissionParamsDTO, userId: number): Promise<{
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
    delete(params: GetPermissionParamsDTO, userId: number): Promise<{
        message: string;
    }>;
}
