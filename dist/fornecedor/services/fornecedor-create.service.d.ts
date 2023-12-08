import { FornecedorRepository } from "../repositories/fornecedor.repository";
import { NewFornecedorRequest } from "../requests/new-fornecedor";
export declare class CreateFornecedorService {
    private fornecedorRepository;
    constructor(fornecedorRepository: FornecedorRepository);
    create(newFornecedorRequest: NewFornecedorRequest): Promise<NewFornecedorRequest & import("../entities/fornecedor.entity").FornecedorEntity>;
}
