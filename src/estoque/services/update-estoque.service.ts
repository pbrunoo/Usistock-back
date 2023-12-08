import { Injectable } from "@nestjs/common";
import { EstoqueRepository } from "../repositories/estoque.repository";
import { UpdateEstoqueRequest } from "../requests/update-estoque-request";
import { UpdateValueRequest } from "../requests/update-value.request";

@Injectable()
export class UpdateEstoqueService {
    constructor(private estoqueRepository: EstoqueRepository) {}

    async update(estoqueId: string, updateEstoqueRequest: UpdateEstoqueRequest) {
        try {
            return await this.estoqueRepository.update(estoqueId, updateEstoqueRequest);
        }catch (e) {
            throw e;
        }
    }

    async updateOrcamento(produtoId: string, totalEstoque: number) {
        const estoque = await this.estoqueRepository.getEstoque(produtoId);
        estoque.estoqueDisponivel = estoque.estoqueDisponivel - totalEstoque;
        await this.estoqueRepository.save(estoque);
    }

}