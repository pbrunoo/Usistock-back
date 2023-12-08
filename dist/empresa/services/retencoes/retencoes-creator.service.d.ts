import { EmpresaRepository } from "src/empresa/repositories/empresa.respository";
import { NewRetencoesRequest } from "src/empresa/requests/retencoes/retencoes.request";
export declare class RetencoesCreatorservice {
    private empresaRepository;
    constructor(empresaRepository: EmpresaRepository);
    create(empresaId: string, newRetencoesRequest: NewRetencoesRequest): Promise<import("../../entities/empresa.entity").EmpresaEntity>;
}
