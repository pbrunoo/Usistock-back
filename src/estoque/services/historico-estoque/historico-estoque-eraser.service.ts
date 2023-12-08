import { Injectable } from "@nestjs/common";
import { ObjectID } from "bson";
import { EstoqueRepository } from "src/estoque/repositories/estoque.repository";

@Injectable()
export class HistoricoEstoqueEraserService {
    constructor(private estoqueRepository: EstoqueRepository) {}

    async erase(estoqueId: string, historicoId: string  | ObjectID) {
        const estoque = await this.estoqueRepository.findOne(estoqueId);
        estoque.deleteHistoricoEstoque(historicoId);
        await this.estoqueRepository.save(estoque);

        return estoque;
    }
}