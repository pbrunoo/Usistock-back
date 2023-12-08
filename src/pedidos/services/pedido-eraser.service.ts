import { PedidoRepository } from "../respositories/pedido.repository";

export class PedidoEraserService {
    constructor(private pedidoRepository: PedidoRepository) {}

    async delete(id: string, userId: string) {
        const pedido = await this.pedidoRepository.findOne(id);
        pedido.status = 0;
        pedido.deletedUserId = userId;
        pedido.deletedAt = new Date();
        await this.pedidoRepository.save(pedido);
    }
}