import { OrcamentoRepository } from "src/orcamento/respositories/orcamento.repository";
import { UpdateProdutoObject } from "src/orcamento/values-object/update-produto-object";
export declare class ProdutoUpdateService {
    private orcamentoRepository;
    constructor(orcamentoRepository: OrcamentoRepository);
    update(orcamentoId: string, produtoId: string, updateProdutoObject: UpdateProdutoObject): Promise<void>;
}
