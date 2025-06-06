import { UserRepo } from 'src/routes/user/user.repo';
import { CreateUserBodyType, GetUsersQueryType, UpdateUserBodyType } from 'src/routes/user/user.model';
import { SharedUserRepository } from 'src/shared/repositories/shared-user.repo';
import { HashingService } from 'src/shared/services/hashing.service';
import { SharedRoleRepository } from 'src/shared/repositories/shared-role.repo';
export declare class UserService {
    private userRepo;
    private hashingService;
    private sharedUserRepository;
    private sharedRoleRepository;
    constructor(userRepo: UserRepo, hashingService: HashingService, sharedUserRepository: SharedUserRepository, sharedRoleRepository: SharedRoleRepository);
    list(pagination: GetUsersQueryType): Promise<{
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
    findById(id: number): Promise<{
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
    create({ data, createdById, createdByRoleName, }: {
        data: CreateUserBodyType;
        createdById: number;
        createdByRoleName: string;
    }): Promise<{
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
    private verifyRole;
    update({ id, data, updatedById, updatedByRoleName, }: {
        id: number;
        data: UpdateUserBodyType;
        updatedById: number;
        updatedByRoleName: string;
    }): Promise<{
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
    private getRoleIdByUserId;
    private verifyYourself;
    delete({ id, deletedById, deletedByRoleName }: {
        id: number;
        deletedById: number;
        deletedByRoleName: string;
    }): Promise<{
        message: string;
    }>;
}
