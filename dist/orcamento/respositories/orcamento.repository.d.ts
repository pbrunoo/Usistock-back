import { Repository } from "typeorm";
import { Produto } from "../entities/agreggate/produto";
import { OrcamentoEntity } from "../entities/orcamento.entity";
export declare class OrcamentoRepository extends Repository<OrcamentoEntity> {
    getAll(): Promise<OrcamentoEntity[]>;
    getOrcamentoByUnidadeId(unidadeId: string): Promise<OrcamentoEntity[]>;
    getOrcamento(id: string): Promise<OrcamentoEntity>;
    findByProdutoId(produtoId: string): Promise<OrcamentoEntity>;
    updateProduto(produto: Produto): Promise<void>;
    findSearch(search: string, unidadeid: string): Promise<OrcamentoEntity[]>;
}
