import { FornecedorRepository } from "src/fornecedor/repositories/fornecedor.repository";
export declare class ValidationControllersReaderService {
    private fornecedorRepository;
    constructor(fornecedorRepository: FornecedorRepository);
    getAllValidationControllers(fornecedorId: string): Promise<import("../../entities/agreggate/validation-controllers").ValidationControllers[]>;
}
