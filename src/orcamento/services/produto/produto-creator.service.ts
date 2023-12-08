import { Injectable } from "@nestjs/common";
import { Produto } from "src/orcamento/entities/agreggate/produto";
import { OrcamentoRepository } from "src/orcamento/respositories/orcamento.repository";
import { NewProdutoObject } from "src/orcamento/values-object/new-produto-object";

@Injectable()
export class ProdutoCreatorService {
    constructor(private orcamentoRepostiry: OrcamentoRepository) { }

    async create(orcamentoId: string, newProdutoEstoque: NewProdutoObject) {
        const orcamento = await this.orcamentoRepostiry.findOne(orcamentoId);

        const register = new Produto ({
            produto: newProdutoEstoque.produto,
            volume: newProdutoEstoque.volume,
            vlUnitario: newProdutoEstoque.vlUnitario
        });
        orcamento.addProduto(register);
        await this.orcamentoRepostiry.save(orcamento);
        return orcamento;

       
    }
}

