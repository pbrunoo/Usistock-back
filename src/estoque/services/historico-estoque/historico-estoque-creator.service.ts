import { Injectable } from "@nestjs/common";
import { HistoricoEstoque } from "src/estoque/entities/agreggate/historico-estoque";
import { EstoqueRepository } from "src/estoque/repositories/estoque.repository";
import { NewHitoricoObject } from "src/estoque/value-object/new-historico-estoque";

@Injectable()
export class HistoricoEstoqueCreatorService {
    constructor(private estoqueRepository: EstoqueRepository) { }

    async create(estoqueId: string, newHistoricoEstoque: NewHitoricoObject) {
        const estoque = await this.estoqueRepository.findOne(estoqueId);

        const registre = new HistoricoEstoque ({
            data: newHistoricoEstoque.data,
            quantidade: newHistoricoEstoque.quantidade,
            vlUnitario: newHistoricoEstoque.vlUnitario
        });
        estoque.addHistoricoEstoque(registre);
        await this.estoqueRepository.save(estoque);
        return estoque;
    }
}
