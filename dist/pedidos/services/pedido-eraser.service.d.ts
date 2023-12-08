import { PedidoRepository } from "../respositories/pedido.repository";
export declare class PedidoEraserService {
    private pedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    delete(id: string, userId: string): Promise<void>;
}
