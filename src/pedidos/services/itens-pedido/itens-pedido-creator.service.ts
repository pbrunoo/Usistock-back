import { Injectable } from "@nestjs/common";
import { ItensPedido } from "src/pedidos/entities/agreggates/itens-pedido";
import { NewItensPedidosRequest } from "src/pedidos/requets/itens-pedido/new-itens-pedidos.request";
import { PedidoRepository } from "src/pedidos/respositories/pedido.repository";
import { NewItensPedidosObject } from "src/pedidos/value-object/new-itens-pedido-object";

@Injectable()
export class ItensPedidoCreatorService {
    constructor(private pedidoRepository: PedidoRepository) { }

    async create(pedidoId: string, newItensPedido: NewItensPedidosObject) {
        const pedido = await this.pedidoRepository.findOne(pedidoId);

        const registro = new ItensPedido ({
            produto: newItensPedido.produto,
            fornecedorId: newItensPedido.fornecedorId,
            quantidade: newItensPedido.quantidade,
            vlUnitario: newItensPedido.vlUnitario
        });
        pedido.AddItensPedido(registro);
        await this.pedidoRepository.save(pedido);
        return pedido;

    }
}