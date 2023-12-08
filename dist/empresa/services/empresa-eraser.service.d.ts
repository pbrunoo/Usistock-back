import { EmpresaRepository } from "../repositories/empresa.respository";
export declare class EmpresaEraserService {
    private empresaRepository;
    constructor(empresaRepository: EmpresaRepository);
    delete(id: string, userId: string): Promise<void>;
}
