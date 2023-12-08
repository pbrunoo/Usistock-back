import { EmpresaRepository } from "src/empresa/repositories/empresa.respository";
export declare class ServicosEraserService {
    private empresaRepository;
    constructor(empresaRepository: EmpresaRepository);
    erase(empresaId: string, cnae: number): Promise<void>;
}
