import { EstoqueRepository } from "../repositories/estoque.repository";
export declare class EstoqueEraserService {
    private estoqueRepository;
    constructor(estoqueRepository: EstoqueRepository);
    delete(id: string, userId: string): Promise<void>;
}
