import { ChangePasswordBodyType, UpdateMeBodyType } from './profile.model';
import { SharedUserRepository } from 'src/shared/repositories/shared-user.repo';
import { HashingService } from 'src/shared/services/hashing.service';
export declare class ProfileService {
    private readonly sharedUserRepository;
    private readonly hashingService;
    constructor(sharedUserRepository: SharedUserRepository, hashingService: HashingService);
    getProfile(userId: number): Promise<{
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
    updateProfile({ userId, body }: {
        userId: number;
        body: UpdateMeBodyType;
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
    changePassword({ userId, body }: {
        userId: number;
        body: Omit<ChangePasswordBodyType, 'confirmNewPassword'>;
    }): Promise<{
        message: string;
    }>;
}
