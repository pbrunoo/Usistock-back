import { EmpresaRepository } from "src/empresa/repositories/empresa.respository";
export declare class ValidationControllersEraserService {
    private empresaRepository;
    constructor(empresaRepository: EmpresaRepository);
    erase(empresaId: string, userCreated: number): Promise<void>;
}
