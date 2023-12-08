import { Injectable } from "@nestjs/common";
import { ObjectID } from "bson";
import { OrcamentoRepository } from "src/orcamento/respositories/orcamento.repository";

@Injectable()
export class ProdutoEraserService {
    constructor(private orcamentoRepository: OrcamentoRepository) { }

    async eraser(orcamentoId: string, produtoId: string | ObjectID) {
        const orcamento = await this.orcamentoRepository.findOne(orcamentoId);
        orcamento.deleteProduto(produtoId);
        await this.orcamentoRepository.save(orcamento);

        return orcamento;
    }
}