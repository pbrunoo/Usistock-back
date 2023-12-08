import { Repository } from "typeorm";
import { VeiculoEntity } from "../entities/veiculo.entity";
export declare class VeiculoRepository extends Repository<VeiculoEntity> {
    getAll(): Promise<VeiculoEntity[]>;
    getVeiculoByUnidadeId(unidadeId: string): Promise<VeiculoEntity[]>;
    findSearch(search: string, unidadeId: string): Promise<VeiculoEntity[]>;
}
