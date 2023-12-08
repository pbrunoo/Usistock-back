import { NewOrcamentoRequest } from "../requests/new-orcamento-request";
import { OrcamentoRepository } from "../respositories/orcamento.repository";
export declare class CreateOrcamentoService {
    private orcamentoRepository;
    constructor(orcamentoRepository: OrcamentoRepository);
    create(newOrcamentoRequest: NewOrcamentoRequest): Promise<NewOrcamentoRequest & import("../entities/orcamento.entity").OrcamentoEntity>;
}
