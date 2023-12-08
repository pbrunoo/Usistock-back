import { User } from '../entities/abstractions/user';
import { UserRepository } from "../repositories/user.repository";
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    findLogin(login: string): Promise<User | undefined>;
}
