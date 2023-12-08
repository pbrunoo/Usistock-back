import { Trabalhista } from './../../funcionario/entities/agreggate/trabalhista';
import { Repository } from "typeorm";
import { EmpresaEntity } from "../entities/empresa.entity";
export declare class EmpresaRepository extends Repository<EmpresaEntity> {
    getAll(): Promise<EmpresaEntity[]>;
    getEmpresa(id: string): Promise<EmpresaEntity>;
    findSearch(search: string): Promise<EmpresaEntity[]>;
    getTrabalhistaByEmpresa(empresaIds: string[]): Promise<Trabalhista[]>;
}
