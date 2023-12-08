import { Injectable } from "@nestjs/common";
import { EstoqueRepository } from "src/estoque/repositories/estoque.repository";
import {UpdateHitoricoObject} from "src/estoque/value-object/update-historico-estoque";

@Injectable()
export class HistoricoEstoqueUpdateService {
    constructor(private estoqueRespository: EstoqueRepository) {}

    async update(estoqueId: string, historicoId: string, updateHitoricoObject: UpdateHitoricoObject) {
        const estoque = await this.estoqueRespository.findOne(estoqueId);
        const historicoEstoque = estoque.findHistorico(historicoId);
        historicoEstoque.data = updateHitoricoObject.data;
        historicoEstoque.quantidade = updateHitoricoObject.quantidade;
        historicoEstoque.vlUnitario = updateHitoricoObject.vlUnitario;

        estoque.updateHistoricoEstoque(historicoId, historicoEstoque);
        await this.estoqueRespository.save(estoque);
    }
}