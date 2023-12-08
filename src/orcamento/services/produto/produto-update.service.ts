import { Injectable } from "@nestjs/common";
import { OrcamentoRepository } from "src/orcamento/respositories/orcamento.repository";
import { UpdateProdutoObject } from "src/orcamento/values-object/update-produto-object";

@Injectable()
export class ProdutoUpdateService {
    constructor(private orcamentoRepository: OrcamentoRepository) { }

    async update(orcamentoId: string, produtoId: string, updateProdutoObject: UpdateProdutoObject) {
        const orcamento = await this.orcamentoRepository.findOne(orcamentoId);
        const produto = orcamento.findProduto(produtoId);
        produto.produto = updateProdutoObject.produto;
        produto.vlUnitario = updateProdutoObject.vlUnitario;
        produto.volume = updateProdutoObject.volume;

        orcamento.updateProduto(produtoId, produto);
        await this.orcamentoRepository.save(orcamento);
        
    }
}