import { Repository } from "typeorm";
import { ConsumoEntity } from "../entities/consumo.entity";
export declare class ConsumoRepository extends Repository<ConsumoEntity> {
    getAll(): Promise<ConsumoEntity[]>;
    getConsumoByUnidadeId(unidadeId: string): Promise<ConsumoEntity[]>;
    searchFind(search: string, unidadeId: string): Promise<ConsumoEntity[]>;
}
