import { EmpresaRepository } from "src/empresa/repositories/empresa.respository";
export declare class RetencoesReaderService {
    private empresaRepository;
    constructor(empresaRepository: EmpresaRepository);
    getAllRetencoes(empresaId: string): Promise<import("../../entities/agreggate/servicos").Servicos[]>;
}
