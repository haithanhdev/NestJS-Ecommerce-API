import { ProfileService } from './profile.service';
import { ChangePasswordBodyDTO, UpdateMeBodyDTO } from 'src/routes/profile/profile.dto';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
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
    updateProfile(body: UpdateMeBodyDTO, userId: number): Promise<{
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
    changePassword(body: ChangePasswordBodyDTO, userId: number): Promise<{
        message: string;
    }>;
}
