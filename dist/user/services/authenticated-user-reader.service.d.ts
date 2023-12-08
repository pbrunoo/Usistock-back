import { UserRepository } from './../repositories/user.repository';
export declare class AuthenticatedUserReaderService {
    private userRepository;
    constructor(userRepository: UserRepository);
    findAuthenticatedUserById(userId: string): Promise<void>;
}
