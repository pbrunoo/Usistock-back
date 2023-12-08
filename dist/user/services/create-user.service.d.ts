import { UserRepository } from "../repositories/user.repository";
import { NewUserRequest } from "../requests/new-user";
export declare class CreateUserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    create(newUserRequest: NewUserRequest): Promise<NewUserRequest & import("../entities/user.entity").UserEntity>;
}
