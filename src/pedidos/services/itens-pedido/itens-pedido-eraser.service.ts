import { Injectable } from "@nestjs/common";
import { PedidoRepository } from "src/pedidos/respositories/pedido.repository";
import { ObjectID } from "typeorm";

@Injectable()
export class ItensPedidoEraserService {
    constructor(private pedidoRepository: PedidoRepository) {}

    async erase(pedidoId: string, itensId: string | ObjectID) {
        const pedido = await this.pedidoRepository.findOne(pedidoId);
        pedido.deleteItensPedido(itensId);
        await this.pedidoRepository.save(pedido);

        return pedido;
    }
}