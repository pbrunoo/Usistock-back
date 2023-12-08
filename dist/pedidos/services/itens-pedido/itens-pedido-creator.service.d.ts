import { PedidoRepository } from "src/pedidos/respositories/pedido.repository";
import { NewItensPedidosObject } from "src/pedidos/value-object/new-itens-pedido-object";
export declare class ItensPedidoCreatorService {
    private pedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    create(pedidoId: string, newItensPedido: NewItensPedidosObject): Promise<import("../../entities/pedido.entity").PedidoEntity>;
}
