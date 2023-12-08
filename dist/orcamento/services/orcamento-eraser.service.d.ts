import { OrcamentoRepository } from "../respositories/orcamento.repository";
export declare class OrcamentoEraserService {
    private orcamentoRepository;
    constructor(orcamentoRepository: OrcamentoRepository);
    delete(id: string, userId: string): Promise<void>;
}
