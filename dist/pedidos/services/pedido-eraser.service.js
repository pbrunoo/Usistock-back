"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoEraserService = void 0;
class PedidoEraserService {
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }
    async delete(id, userId) {
        const pedido = await this.pedidoRepository.findOne(id);
        pedido.status = 0;
        pedido.deletedUserId = userId;
        pedido.deletedAt = new Date();
        await this.pedidoRepository.save(pedido);
    }
}
exports.PedidoEraserService = PedidoEraserService;
//# sourceMappingURL=pedido-eraser.service.js.map