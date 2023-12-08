import { ObjectID } from "mongodb";
import { Pedido } from "./abstractions/pedido";
import { ItensPedido } from "./agreggates/itens-pedido";
import { NotaFiscal } from "./agreggates/nota-fiscal";
export declare class PedidoEntity implements Pedido {
    id: Pedido['id'];
    data: Pedido['data'];
    unidadeId: Pedido['unidadeId'];
    pedido: Pedido['pedido'];
    descricao: Pedido['descricao'];
    statusPedido: Pedido['statusPedido'];
    status: Pedido['status'];
    userCreated: Pedido['userCreated'];
    createAt: Pedido['createAt'];
    deletedAt: Date;
    deletedUserId: string;
    itensPedido: ItensPedido[];
    notaFiscal: NotaFiscal[];
    AddItensPedido(itensPedido: ItensPedido): void;
    findItensPedido(pedidoId: string): ItensPedido;
    updateItensPedido(pedidoId: string, itensPedidos: ItensPedido): void;
    getItensPedido(): ItensPedido[];
    deleteItensPedido(pedidoId: string | ObjectID): void;
    AddNotaFiscal(notaFiscal: NotaFiscal): void;
}
