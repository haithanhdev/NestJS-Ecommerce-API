import { DeviceType, RefreshTokenType, VerificationCodeType } from 'src/routes/auth/auth.model';
import { TypeOfVerificationCodeType } from 'src/shared/constants/auth.constants';
import { RoleType } from 'src/shared/models/shared-role.model';
import { UserType } from 'src/shared/models/shared-user.model';
import { WhereUniqueUserType } from 'src/shared/repositories/shared-user.repo';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class AuthRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createUser(user: Pick<UserType, 'email' | 'name' | 'password' | 'phoneNumber' | 'roleId'>): Promise<Omit<UserType, 'password' | 'totpSecret'>>;
    createUserIncludeRole(user: Pick<UserType, 'email' | 'name' | 'password' | 'phoneNumber' | 'avatar' | 'roleId'>): Promise<UserType & {
        role: RoleType;
    }>;
    createVerificationCode(payload: Pick<VerificationCodeType, 'email' | 'type' | 'code' | 'expiresAt'>): Promise<VerificationCodeType>;
    findUniqueVerificationCode(where: {
        id: number;
    } | {
        email_type: {
            email: string;
            type: TypeOfVerificationCodeType;
        };
    }): Promise<VerificationCodeType | null>;
    createRefreshToken(data: {
        userId: number;
        token: string;
        expiresAt: Date;
        deviceId: number;
    }): Promise<RefreshTokenType>;
    createDevice(data: Pick<DeviceType, 'userId' | 'userAgent' | 'ip'> & Partial<Pick<DeviceType, 'lastActive' | 'isActive'>>): Promise<DeviceType>;
    findUniqueUserIncludeRole(where: WhereUniqueUserType): Promise<(UserType & {
        role: RoleType;
    }) | null>;
    findUniqueRefreshTokenIncludeUserRole(where: {
        token: string;
    }): Promise<(RefreshTokenType & {
        user: UserType & {
            role: RoleType;
        };
    }) | null>;
    updateDevice(deviceId: number, data: Partial<DeviceType>): Promise<DeviceType>;
    deleteRefreshToken(where: {
        token: string;
    }): Promise<RefreshTokenType>;
    deleteVerificationCode(where: {
        id: number;
    } | {
        email_type: {
            email: string;
            type: TypeOfVerificationCodeType;
        };
    }): Promise<VerificationCodeType>;
}
