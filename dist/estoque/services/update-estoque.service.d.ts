import { EstoqueRepository } from "../repositories/estoque.repository";
import { UpdateEstoqueRequest } from "../requests/update-estoque-request";
export declare class UpdateEstoqueService {
    private estoqueRepository;
    constructor(estoqueRepository: EstoqueRepository);
    update(estoqueId: string, updateEstoqueRequest: UpdateEstoqueRequest): Promise<import("typeorm").UpdateResult>;
    updateOrcamento(produtoId: string, totalEstoque: number): Promise<void>;
}
