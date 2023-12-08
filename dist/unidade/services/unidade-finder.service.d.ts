import { EmpresaRepository } from "src/empresa/repositories/empresa.respository";
import { UnityEmpresa } from "../dto/unity-empresa.dto";
import { UnidadeRepository } from "../respositories/unidade.repository";
export declare class UnidadeFinderService {
    private unidadeRepository;
    private empresaRepository;
    constructor(unidadeRepository: UnidadeRepository, empresaRepository: EmpresaRepository);
    getAll(): Promise<import("../entities/unidade.entity").UnidadeEntity[]>;
    getByName(nomeUnidade: string): Promise<import("../entities/unidade.entity").UnidadeEntity[]>;
    getByUnidadeId(id: string): Promise<import("../entities/unidade.entity").UnidadeEntity[]>;
    getUnidadeEmpresa(): Promise<UnityEmpresa[]>;
    getById(id: string): Promise<import("../entities/unidade.entity").UnidadeEntity>;
    searchAll(result: string): Promise<UnityEmpresa[]>;
}
