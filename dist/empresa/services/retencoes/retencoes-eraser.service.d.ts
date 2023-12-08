import { EmpresaRepository } from "src/empresa/repositories/empresa.respository";
export declare class RetencoesEraserService {
    private empresaRepository;
    constructor(empresaRepository: EmpresaRepository);
    erase(empresaId: string, pis: number): Promise<void>;
}
