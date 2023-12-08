import { EmpresaRepository } from "src/empresa/repositories/empresa.respository";
import { NewServicosRequest } from "src/empresa/requests/servicos/servicos.request";
export declare class ServicosCreatorService {
    private empresaRepository;
    constructor(empresaRepository: EmpresaRepository);
    create(empresaId: string, newServicosRequest: NewServicosRequest): Promise<import("../../entities/empresa.entity").EmpresaEntity>;
}
