import { EmpresaRepository } from "../repositories/empresa.respository";
export declare class EmpresaFinderService {
    private empresaRepository;
    constructor(empresaRepository: EmpresaRepository);
    getAll(): Promise<import("../entities/empresa.entity").EmpresaEntity[]>;
    getByName(razaoSocial: string): Promise<string>;
    getById(id: string): Promise<import("../entities/empresa.entity").EmpresaEntity>;
    searchAllEmpresa(result: string): Promise<import("../entities/empresa.entity").EmpresaEntity[]>;
}
