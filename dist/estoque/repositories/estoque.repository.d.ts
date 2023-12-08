import { Repository } from "typeorm";
import { HistoricoEstoque } from "../entities/agreggate/historico-estoque";
import { EstoqueEntity } from "../entities/estoque.entity";
export declare class EstoqueRepository extends Repository<EstoqueEntity> {
    getAll(): Promise<EstoqueEntity[]>;
    getEstoqueByUnidadeId(unidadeId: string): Promise<EstoqueEntity[]>;
    getEstoque(id: string): Promise<EstoqueEntity>;
    findByHistoricoId(historicoId: string): Promise<EstoqueEntity>;
    findSearch(search: string, unidadeid: string): Promise<EstoqueEntity[]>;
    updateHistoricoEstoque(historicoEstoque: HistoricoEstoque): Promise<void>;
}
