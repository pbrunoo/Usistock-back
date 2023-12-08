import { UserEntity } from './../user/entities/user.entity';
import { AuthRepository } from './repositories/auth.repository';
export declare class UserAutenticationService {
    private authRepository;
    constructor(authRepository: AuthRepository);
    findAuth(username: string): Promise<UserEntity>;
}
