import { Repository } from "typeorm";
import { ItensPedido } from "../entities/agreggates/itens-pedido";
import { PedidoEntity } from "../entities/pedido.entity";
export declare class PedidoRepository extends Repository<PedidoEntity> {
    getAll(): Promise<PedidoEntity[]>;
    getPedidoByUnidadeId(unidadeId: string): Promise<PedidoEntity[]>;
    getPedido(id: string): Promise<PedidoEntity>;
    findByItensPedidoId(pedidoId: string): Promise<PedidoEntity>;
    updateItensPedido(ItensPedido: ItensPedido): Promise<void>;
}
