import { Pedido } from "../entities/abstractions/pedido";
export declare class NewPedidoRequest {
    data: Pedido['data'];
    unidadeId: Pedido['unidadeId'];
    pedido: Pedido['pedido'];
    descricao: Pedido['descricao'];
    statusPedido: Pedido['statusPedido'];
    status: Pedido['status'];
    userCreated: Pedido['userCreated'];
    createAt: Pedido['createAt'];
}
