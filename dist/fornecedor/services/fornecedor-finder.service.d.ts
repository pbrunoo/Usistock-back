import { FornecedorRepository } from "src/fornecedor/repositories/fornecedor.repository";
export declare class FornecedorFinderService {
    private fornecedorRepository;
    constructor(fornecedorRepository: FornecedorRepository);
    getAll(): Promise<import("../entities/fornecedor.entity").FornecedorEntity[]>;
    getByName(razaoSocial: string): Promise<import("../entities/fornecedor.entity").FornecedorEntity[]>;
    getById(id: string): Promise<import("../entities/fornecedor.entity").FornecedorEntity>;
    getByUnidadeId(id: string): Promise<import("../entities/fornecedor.entity").FornecedorEntity[]>;
    getFornecedorByUnidadeId(unidadeid: string): Promise<import("../entities/fornecedor.entity").FornecedorEntity[]>;
    searchAll(result: string, unidadeid: string): Promise<import("../entities/fornecedor.entity").FornecedorEntity[]>;
}
