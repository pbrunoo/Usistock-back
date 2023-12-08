import { UpdatePedidoRequest } from "../requets/update-pedido.resquest";
import { PedidoRepository } from "../respositories/pedido.repository";
export declare class UpdatePedidoService {
    private pedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    update(pedidoId: string, updatePedidoRequest: UpdatePedidoRequest): Promise<import("typeorm").UpdateResult>;
}
