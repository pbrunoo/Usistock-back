import { NewPedidoRequest } from "../requets/new-pedido.request";
import { PedidoRepository } from "../respositories/pedido.repository";
export declare class CreatePedidoService {
    private pedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    create(newPedidoRequest: NewPedidoRequest): Promise<NewPedidoRequest & import("../entities/pedido.entity").PedidoEntity>;
}
