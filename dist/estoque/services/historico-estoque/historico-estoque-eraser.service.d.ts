import { ObjectID } from "bson";
import { EstoqueRepository } from "src/estoque/repositories/estoque.repository";
export declare class HistoricoEstoqueEraserService {
    private estoqueRepository;
    constructor(estoqueRepository: EstoqueRepository);
    erase(estoqueId: string, historicoId: string | ObjectID): Promise<import("../../entities/estoque.entity").EstoqueEntity>;
}
