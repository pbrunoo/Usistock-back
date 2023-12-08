import { NewUnidadeRequest } from 'src/unidade/requests/new-unidade.request';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
export declare class AuthRepository extends Repository<UserEntity> {
    newUnidadeRequest: typeof NewUnidadeRequest;
    getAll(): Promise<UserEntity[]>;
    getUserByUnidadeId(unidadeId: string): Promise<UserEntity[]>;
    findByLogin(login: string): Promise<UserEntity>;
}
