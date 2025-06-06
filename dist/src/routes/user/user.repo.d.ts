import { CreateUserBodyType, GetUsersQueryType, GetUsersResType } from 'src/routes/user/user.model';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UserType } from 'src/shared/models/shared-user.model';
export declare class UserRepo {
    private prismaService;
    constructor(prismaService: PrismaService);
    list(pagination: GetUsersQueryType): Promise<GetUsersResType>;
    create({ createdById, data }: {
        createdById: number | null;
        data: CreateUserBodyType;
    }): Promise<UserType>;
    delete({ id, deletedById, }: {
        id: number;
        deletedById: number;
    }, isHard?: boolean): Promise<UserType>;
}
