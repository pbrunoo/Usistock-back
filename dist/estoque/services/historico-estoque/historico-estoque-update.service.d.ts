import { EstoqueRepository } from "src/estoque/repositories/estoque.repository";
import { UpdateHitoricoObject } from "src/estoque/value-object/update-historico-estoque";
export declare class HistoricoEstoqueUpdateService {
    private estoqueRespository;
    constructor(estoqueRespository: EstoqueRepository);
    update(estoqueId: string, historicoId: string, updateHitoricoObject: UpdateHitoricoObject): Promise<void>;
}
