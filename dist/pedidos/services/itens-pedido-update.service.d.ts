import { PedidoRepository } from "../respositories/pedido.repository";
import { UpdateItensPedidosObject } from "src/pedidos/value-object/update-itens-pedido-object";
export declare class ItensPedidoUpdateService {
    private pedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    update(pedidoId: string, itensId: string, updateItensPedidosObject: UpdateItensPedidosObject): Promise<void>;
}
