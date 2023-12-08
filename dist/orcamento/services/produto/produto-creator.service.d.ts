import { OrcamentoRepository } from "src/orcamento/respositories/orcamento.repository";
import { NewProdutoObject } from "src/orcamento/values-object/new-produto-object";
export declare class ProdutoCreatorService {
    private orcamentoRepostiry;
    constructor(orcamentoRepostiry: OrcamentoRepository);
    create(orcamentoId: string, newProdutoEstoque: NewProdutoObject): Promise<import("../../entities/orcamento.entity").OrcamentoEntity>;
}
