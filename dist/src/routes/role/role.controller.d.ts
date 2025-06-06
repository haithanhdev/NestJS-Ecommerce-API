import { CreateRoleBodyDTO, GetRoleParamsDTO, GetRolesQueryDTO, UpdateRoleBodyDTO } from 'src/routes/role/role.dto';
import { RoleService } from 'src/routes/role/role.service';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    list(query: GetRolesQueryDTO): Promise<{
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
    findById(params: GetRoleParamsDTO): Promise<{
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
    create(body: CreateRoleBodyDTO, userId: number): Promise<{
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
    update(body: UpdateRoleBodyDTO, params: GetRoleParamsDTO, userId: number): Promise<{
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
    delete(params: GetRoleParamsDTO, userId: number): Promise<{
        message: string;
    }>;
}
