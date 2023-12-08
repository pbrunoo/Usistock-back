import { EmpresaRepository } from "../repositories/empresa.respository";
import { UpdateEmpresaRequest } from "../requests/update-empresa.request";
export declare class UpdateEmpresaService {
    private empresaRepository;
    constructor(empresaRepository: EmpresaRepository);
    update(empresaId: string, updateEmpresaRequest: UpdateEmpresaRequest): Promise<import("typeorm").UpdateResult>;
}
