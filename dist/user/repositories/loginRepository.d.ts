import { NewUnidadeRequest } from 'src/unidade/requests/new-unidade.request';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
export declare class LoginRepository extends Repository<UserEntity> {
    newUnidadeRequest: typeof NewUnidadeRequest;
    getAll(): Promise<UserEntity>;
}
