import { EmpresaRepository } from "../repositories/empresa.respository";
import { NewEmpresaRequest } from "../requests/new-empresa.request";
export declare class CreateEmpresaService {
    private empresaRepository;
    constructor(empresaRepository: EmpresaRepository);
    create(newEmpresaRequest: NewEmpresaRequest): Promise<NewEmpresaRequest & import("../entities/empresa.entity").EmpresaEntity>;
}
