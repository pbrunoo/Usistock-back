import { Injectable } from "@nestjs/common";
import { OrcamentoRepository } from "src/orcamento/respositories/orcamento.repository";

@Injectable()
export class ProdutoReaderService {
    constructor(private orcamentoRepository: OrcamentoRepository) { }
    async getAllProduto(orcamentoId: string) {
        const orcamento = await this.orcamentoRepository.findOne(orcamentoId);

        return orcamento.produtos;
    }
}