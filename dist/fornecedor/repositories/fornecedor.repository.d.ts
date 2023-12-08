import { Repository } from "typeorm";
import { FornecedorEntity } from "../entities/fornecedor.entity";
export declare class FornecedorRepository extends Repository<FornecedorEntity> {
    getAll(): Promise<FornecedorEntity[]>;
    getFornecedorByUnidadeId(unidadeId: string): Promise<FornecedorEntity[]>;
    getFornecedor(id: string): Promise<FornecedorEntity>;
    findSearch(search: string, unidadeId: string): Promise<FornecedorEntity[]>;
}
