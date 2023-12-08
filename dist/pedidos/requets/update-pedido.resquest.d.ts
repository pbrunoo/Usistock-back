import { Pedido } from "../entities/abstractions/pedido";
export declare class UpdatePedidoRequest {
    data: Pedido['data'];
    unidadeId: Pedido['unidadeId'];
    pedido: Pedido['pedido'];
    descricao: Pedido['descricao'];
    statusPedido: Pedido['statusPedido'];
    status: Pedido['status'];
    userUpdated: string;
    updatedAt: string;
}
