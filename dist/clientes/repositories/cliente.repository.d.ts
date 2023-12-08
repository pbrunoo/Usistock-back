import { Repository } from "typeorm";
import { ClienteEntity } from '../entities/cliente.entity';
export declare class ClienteRepository extends Repository<ClienteEntity> {
    getAll(): Promise<ClienteEntity[]>;
    getClienteByUnidadeId(unidadeId: string): Promise<ClienteEntity[]>;
    findSearch(search: string, unidadeId: string): Promise<ClienteEntity[]>;
}
