import { OrcamentoRepository } from "src/orcamento/respositories/orcamento.repository";
export declare class ProdutoReaderService {
    private orcamentoRepository;
    constructor(orcamentoRepository: OrcamentoRepository);
    getAllProduto(orcamentoId: string): Promise<import("../../entities/agreggate/produto").Produto[]>;
}
