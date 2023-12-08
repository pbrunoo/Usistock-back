import { EmpresaRepository } from "src/empresa/repositories/empresa.respository";
export declare class ValidationControllersReaderService {
    private empresaRepository;
    constructor(empresaRepository: EmpresaRepository);
    getAllValidationControllers(empresaId: string): Promise<any>;
}
