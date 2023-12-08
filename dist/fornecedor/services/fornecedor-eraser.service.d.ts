import { FornecedorRepository } from "../repositories/fornecedor.repository";
export declare class FornecedorEraserService {
    private fornecedorRepository;
    constructor(fornecedorRepository: FornecedorRepository);
    delete(id: string, userId: string): Promise<void>;
}
