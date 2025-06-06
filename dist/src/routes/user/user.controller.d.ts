import { CreateUserBodyDTO, GetUserParamsDTO, GetUsersQueryDTO, UpdateUserBodyDTO } from 'src/routes/user/user.dto';
import { UserService } from 'src/routes/user/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    list(query: GetUsersQueryDTO): Promise<{
        data: {
            role: {
                id: number;
                name: string;
            };
            status: "ACTIVE" | "INACTIVE" | "BLOCKED";
            roleId: number;
            id: number;
            name: string;
            createdById: number | null;
            updatedById: number | null;
            deletedById: number | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            phoneNumber: string;
            avatar: string | null;
        }[];
        limit: number;
        page: number;
        totalItems: number;
        totalPages: number;
    }>;
    findById(params: GetUserParamsDTO): Promise<{
        status: "ACTIVE" | "INACTIVE" | "BLOCKED";
        roleId: number;
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        phoneNumber: string;
        avatar: string | null;
        totpSecret: string | null;
    } & {
        role: import("../../shared/models/shared-role.model").RoleType & {
            permissions: import("../../shared/models/shared-permission.model").PermissionType[];
        };
    }>;
    create(body: CreateUserBodyDTO, userId: number, roleName: string): Promise<{
        status: "ACTIVE" | "INACTIVE" | "BLOCKED";
        roleId: number;
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        phoneNumber: string;
        avatar: string | null;
        totpSecret: string | null;
    }>;
    update(body: UpdateUserBodyDTO, params: GetUserParamsDTO, userId: number, roleName: string): Promise<{
        status: "ACTIVE" | "INACTIVE" | "BLOCKED";
        roleId: number;
        id: number;
        name: string;
        createdById: number | null;
        updatedById: number | null;
        deletedById: number | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        phoneNumber: string;
        avatar: string | null;
        totpSecret: string | null;
    } | null>;
    delete(params: GetUserParamsDTO, userId: number, roleName: string): Promise<{
        message: string;
    }>;
}
