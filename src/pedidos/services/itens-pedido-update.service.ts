import { Injectable } from "@nestjs/common";
import { PedidoRepository } from "../respositories/pedido.repository";
import { UpdateItensPedidosObject } from "src/pedidos/value-object/update-itens-pedido-object"

@Injectable()
export class ItensPedidoUpdateService {
    constructor(private pedidoRepository: PedidoRepository) { }

    async update(pedidoId: string, itensId: string, updateItensPedidosObject: UpdateItensPedidosObject) {
        const pedido = await this.pedidoRepository.findOne(pedidoId);
        const itensPedido = pedido.findItensPedido(itensId);
        itensPedido.produto = updateItensPedidosObject.produto;
        itensPedido.fornecedorId = updateItensPedidosObject.fornecedorId;
        itensPedido.quantidade  = updateItensPedidosObject.quantidade;
        itensPedido.vlUnitario = updateItensPedidosObject.vlUnitario;

        pedido.updateItensPedido(itensId, itensPedido);
        await this.pedidoRepository.save(pedido);
        
    }
}