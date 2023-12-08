import { PedidoRepository } from "src/pedidos/respositories/pedido.repository";
import { ObjectID } from "typeorm";
export declare class ItensPedidoEraserService {
    private pedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    erase(pedidoId: string, itensId: string | ObjectID): Promise<import("../../entities/pedido.entity").PedidoEntity>;
}
