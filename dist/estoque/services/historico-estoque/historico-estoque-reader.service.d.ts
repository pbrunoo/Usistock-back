import { EstoqueRepository } from "src/estoque/repositories/estoque.repository";
export declare class HistoricoEstoqueReaderService {
    private estoqueRepository;
    constructor(estoqueRepository: EstoqueRepository);
    getAllHistoricoEstoque(estoqueId: string): Promise<import("../../entities/agreggate/historico-estoque").HistoricoEstoque[]>;
}
