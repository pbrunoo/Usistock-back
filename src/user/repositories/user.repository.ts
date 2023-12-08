import { NewUnidadeRequest } from 'src/unidade/requests/new-unidade.request';
import { EntityRepository, getMongoManager, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {

    newUnidadeRequest = NewUnidadeRequest;

    async getAll() {
        const users = await this.find({});
    
        return users;
    }

    async getUserByUnidadeId(unidadeId: string) {
        const users = await this.find({
            where: {
                unidadeId: unidadeId.toString(),
                status: 1
            }

        });
        

        return users;
    }

    findByLogin(login: string) {
        return this.findOne({ 
            where: {
                login: login,
                status: 1
            }
         });
    }

    async findSearch(search: string, unidadeId: string) {
        const result = await this.find({
            where: {
                $or: [
                    { id: {$regex: search, $options: 'i'} },
                    { login: {$regex: search, $options: 'i'} },
                    { nome: {$regex: search, $options: 'i'} },
                    { email: {$regex: search, $options: 'i'} },
                    { telefone: {$regex: search, $options: 'i'} },
                    { cidade: {$regex: search, $options: 'i'} }
                ],
                unidadeId: unidadeId,
                status: 1
                
            }
        })
        return result;
    }


}