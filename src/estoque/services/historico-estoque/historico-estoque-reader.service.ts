import { Injectable } from "@nestjs/common";
import { EstoqueRepository } from "src/estoque/repositories/estoque.repository";

@Injectable()
export class HistoricoEstoqueReaderService {
    constructor(private estoqueRepository: EstoqueRepository) {}
    async getAllHistoricoEstoque(estoqueId: string) {
        const estoque = await this.estoqueRepository.findOne(estoqueId);

        return estoque.historicoEstoque;
    }
}