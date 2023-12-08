import { NewUnidadeRequest } from 'src/unidade/requests/new-unidade.request';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
export declare class UserRepository extends Repository<UserEntity> {
    newUnidadeRequest: typeof NewUnidadeRequest;
    getAll(): Promise<UserEntity[]>;
    getUserByUnidadeId(unidadeId: string): Promise<UserEntity[]>;
    findByLogin(login: string): Promise<UserEntity>;
    findSearch(search: string, unidadeId: string): Promise<UserEntity[]>;
}
