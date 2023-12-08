import { Injectable } from "@nestjs/common";
import { PedidoRepository } from "src/pedidos/respositories/pedido.repository";

@Injectable()
export class ItensPedidoReaderService {
    constructor(private pedidoRepository: PedidoRepository) {}
    async getAllItensPedido(pedidoId: string) {
        const pedido = await this.pedidoRepository.findOne(pedidoId);

        return pedido.itensPedido;
        
    }
}