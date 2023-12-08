import { EntityRepository, Repository } from "typeorm";
import { ClienteEntity } from '../entities/cliente.entity';

@EntityRepository(ClienteEntity)
export class ClienteRepository extends Repository<ClienteEntity> {
    async getAll() {
        const clientes = await this.find({});
        
        return clientes;
    }

    async getClienteByUnidadeId(unidadeId: string) {
        const cliente = await this.find({
            where: {
                unidadeId: unidadeId.toString(),
                status: 1
            }
        });
        
        return cliente;
    }

    async findSearch(search: string, unidadeId: string) {
        const result = await this.find({
            where: {
                $or: [
                    { id: {$regex: search, $options: 'i'} },
                    { inscEstadual: {$regex: search, $options: 'i'} },
                    { cpfCnpj: {$regex: search, $options: 'i'} },
                    { razaoSocial: {$regex: search, $options: 'i'} },
                    { telefone: {$regex: search, $options: 'i'} },
                    { email: {$regex: search, $options: 'i'} },
                    { cidade: {$regex: search, $options: 'i'} },
                ],
                unidadeId: unidadeId,
                status: 1
            }
        });

        return result;
    }
}