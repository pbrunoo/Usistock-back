import { Trabalhista } from './../entities/agreggate/trabalhista';
import { Repository } from "typeorm";
import { FuncionarioEntity } from "../entities/funcionario.entity";
export declare class FuncionarioRepository extends Repository<FuncionarioEntity> {
    getAll(): Promise<FuncionarioEntity[]>;
    getFuncionarioByUnidadeId(unidadeId: string): Promise<void>;
    findSearch(search: string): Promise<FuncionarioEntity[]>;
    getTrabalhistaByEmpresa(empresaIds: string[]): Promise<Trabalhista[]>;
}
