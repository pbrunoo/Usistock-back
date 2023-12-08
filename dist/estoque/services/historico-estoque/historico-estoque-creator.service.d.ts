import { EstoqueRepository } from "src/estoque/repositories/estoque.repository";
import { NewHitoricoObject } from "src/estoque/value-object/new-historico-estoque";
export declare class HistoricoEstoqueCreatorService {
    private estoqueRepository;
    constructor(estoqueRepository: EstoqueRepository);
    create(estoqueId: string, newHistoricoEstoque: NewHitoricoObject): Promise<import("../../entities/estoque.entity").EstoqueEntity>;
}
