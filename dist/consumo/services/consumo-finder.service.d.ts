import { FornecedorRepository } from "src/fornecedor/repositories/fornecedor.repository";
import { UnityConsumo } from "../dto/unity-consumo.dto";
import { ConsumoRepository } from "../repositories/consumo.repository";
export declare class ConsumoFinderService {
    private consumoRepository;
    private fornecedorRepository;
    constructor(consumoRepository: ConsumoRepository, fornecedorRepository: FornecedorRepository);
    getAll(): Promise<import("../entities/consumo.entity").ConsumoEntity[]>;
    getByName(produto: string): Promise<string>;
    getById(id: string): Promise<import("../entities/consumo.entity").ConsumoEntity>;
    getByUnidadeId(id: string): Promise<import("../entities/consumo.entity").ConsumoEntity[]>;
    searchAll(search: string, unidadeId: string): Promise<import("../entities/consumo.entity").ConsumoEntity[]>;
    getFornecedor(unidadeId: string): Promise<UnityConsumo[]>;
}
