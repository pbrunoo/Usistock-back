import { UserRepository } from '../repositories/user.repository';
export declare class UserEraserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    delete(id: string): Promise<void>;
}
