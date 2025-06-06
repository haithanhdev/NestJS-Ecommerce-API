import { GetAuthorizationUrlResType, GoogleAuthStateType, LoginResType } from 'src/routes/auth/auth.model';
import { AuthRepository } from 'src/routes/auth/auth.repo';
import { AuthService } from 'src/routes/auth/auth.service';
import { HashingService } from 'src/shared/services/hashing.service';
import { SharedRoleRepository } from 'src/shared/repositories/shared-role.repo';
export declare class GoogleService {
    private readonly authRepository;
    private readonly hashingService;
    private readonly sharedRoleRepository;
    private readonly authService;
    private oauth2Client;
    constructor(authRepository: AuthRepository, hashingService: HashingService, sharedRoleRepository: SharedRoleRepository, authService: AuthService);
    getAuthorizationUrl({ userAgent, ip }: GoogleAuthStateType): GetAuthorizationUrlResType;
    googleCallback({ code, state }: {
        code: string;
        state: string;
    }): Promise<LoginResType>;
}
