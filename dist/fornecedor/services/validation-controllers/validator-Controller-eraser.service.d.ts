import { FornecedorRepository } from "src/fornecedor/repositories/fornecedor.repository";
export declare class ValidationControllersEraserService {
    private fornecedorRepository;
    constructor(fornecedorRepository: FornecedorRepository);
    erase(fornecedorId: string, userCreated: number): Promise<void>;
}
