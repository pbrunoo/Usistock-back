import { EmpresaRepository } from 'src/empresa/repositories/empresa.respository';
import { FuncionarioRepository } from "../repositories/funcionario.repository";
export declare class FuncionarioFinderService {
    private funcionarioRepository;
    private empresaRepository;
    constructor(funcionarioRepository: FuncionarioRepository, empresaRepository: EmpresaRepository);
    getAll(): Promise<import("../entities/funcionario.entity").FuncionarioEntity[]>;
    getByName(nomeCompleto: string): Promise<import("../entities/funcionario.entity").FuncionarioEntity[]>;
    getById(id: string): Promise<import("../entities/funcionario.entity").FuncionarioEntity>;
    getByUnidadeId(id: string): Promise<void>;
    getFuncionarioByUnidadeId(unidadeid: string): any;
    searchAll(result: string): Promise<import("../entities/funcionario.entity").FuncionarioEntity[]>;
    getFuncionarioEmpresa(idFuncionario: string): Promise<any[]>;
}
