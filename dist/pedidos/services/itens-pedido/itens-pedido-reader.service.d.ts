import { PedidoRepository } from "src/pedidos/respositories/pedido.repository";
export declare class ItensPedidoReaderService {
    private pedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    getAllItensPedido(pedidoId: string): Promise<import("../../entities/agreggates/itens-pedido").ItensPedido[]>;
}
