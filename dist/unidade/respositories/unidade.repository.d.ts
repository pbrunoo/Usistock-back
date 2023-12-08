import { Repository } from "typeorm";
import { UnidadeEntity } from "../entities/unidade.entity";
export declare class UnidadeRepository extends Repository<UnidadeEntity> {
    getAll(): Promise<UnidadeEntity[]>;
    getUnidadeByUnidadeId(unidadeId: string): Promise<UnidadeEntity[]>;
    findSearch(search: string): Promise<UnidadeEntity[]>;
}
