import { EstoqueRepository } from "../repositories/estoque.repository";
import { NewEstoqueRequest } from "../requests/new-estoque.request";
export declare class CreateEstoqueService {
    private estoqueRepository;
    constructor(estoqueRepository: EstoqueRepository);
    create(newEstoqueRequest: NewEstoqueRequest): Promise<NewEstoqueRequest & import("../entities/estoque.entity").EstoqueEntity>;
}
