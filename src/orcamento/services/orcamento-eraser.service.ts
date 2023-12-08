import { Injectable } from "@nestjs/common";
import { OrcamentoRepository } from "../respositories/orcamento.repository";

@Injectable()
export class OrcamentoEraserService {
    constructor(private orcamentoRepository: OrcamentoRepository) { }

    async delete(id: string, userId: string) {
        const orcamento = await this.orcamentoRepository.findOne(id);
        orcamento.status = 0;
        orcamento.deletedUserId = userId;
        orcamento.statusPedido = "Cancelado";
        orcamento.deletedAt = new Date();

        await this.orcamentoRepository.save(orcamento);
    }
}