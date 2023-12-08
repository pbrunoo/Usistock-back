import { EmpresaRepository } from "../../repositories/empresa.respository";
export declare class ServicosReaderService {
    private empresaRepository;
    constructor(empresaRepository: EmpresaRepository);
    getAllServicos(empresaId: string): Promise<import("../../entities/agreggate/servicos").Servicos[]>;
}
