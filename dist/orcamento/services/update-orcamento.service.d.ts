import { UpdateOrcamentoRequest } from "../requests/update-orcamento.request";
import { OrcamentoRepository } from "../respositories/orcamento.repository";
export declare class UpdateOrcamentoService {
    private orcamentoRepository;
    constructor(orcamentoRepository: OrcamentoRepository);
    update(orcamentoId: string, updateOrcamentoRequest: UpdateOrcamentoRequest): Promise<import("typeorm").UpdateResult>;
}
