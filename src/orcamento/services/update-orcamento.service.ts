import { Injectable } from "@nestjs/common";
import { UpdateOrcamentoRequest } from "../requests/update-orcamento.request";
import { OrcamentoRepository } from "../respositories/orcamento.repository";

@Injectable()
export class UpdateOrcamentoService {
    constructor(private orcamentoRepository: OrcamentoRepository) { }

    async update(orcamentoId: string, updateOrcamentoRequest: UpdateOrcamentoRequest) {
        try {
            return await this.orcamentoRepository.update(orcamentoId, updateOrcamentoRequest);
        }catch (e) {
            throw e;
        }
    }
}