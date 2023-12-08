import { UserRepository } from "../repositories/user.repository";
import { UpdateUserRequest } from "../requests/update-user";
export declare class UpdateUserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    update(userId: string, updateUserRequest: UpdateUserRequest): Promise<import("typeorm").UpdateResult>;
}
