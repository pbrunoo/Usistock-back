import { FornecedorRepository } from "src/fornecedor/repositories/fornecedor.repository";
import { UpdateFornecedorRequest } from "../requests/update-request";
export declare class UpdateFornecedorService {
    private fornecedorRepository;
    constructor(fornecedorRepository: FornecedorRepository);
    update(fornecedorId: string, updateFornecedorRequest: UpdateFornecedorRequest): Promise<import("typeorm").UpdateResult>;
}
