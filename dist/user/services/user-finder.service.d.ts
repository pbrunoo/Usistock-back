import { UserRepository } from "../repositories/user.repository";
export declare class UserFinderService {
    private userRepository;
    constructor(userRepository: UserRepository);
    getAll(): Promise<import("../entities/user.entity").UserEntity[]>;
    getById(id: string): Promise<import("../entities/user.entity").UserEntity>;
    getByUnidadeId(id: string): Promise<import("../entities/user.entity").UserEntity[]>;
    searchAll(result: string, unidadeid: string): Promise<import("../entities/user.entity").UserEntity[]>;
    getUsersByUnidadeId(unidadeid: string): Promise<import("../entities/user.entity").UserEntity[]>;
}
