import { VeiculoRepository } from "../repositories/veiculo.repository";
export declare class VeiculoFinderService {
    private veiculoRepository;
    find(arg0: {
        where: {
            status: number;
        };
    }): void;
    constructor(veiculoRepository: VeiculoRepository);
    getAll(): Promise<import("../entities/veiculo.entity").VeiculoEntity[]>;
    getById(id: string): Promise<import("../entities/veiculo.entity").VeiculoEntity>;
    getByUnidadeId(id: string): Promise<import("../entities/veiculo.entity").VeiculoEntity[]>;
    searchAll(result: string, unidadeid: string): Promise<import("../entities/veiculo.entity").VeiculoEntity[]>;
    getByName(placa: string): Promise<import("../entities/veiculo.entity").VeiculoEntity[]>;
}
