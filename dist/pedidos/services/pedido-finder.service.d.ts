import { PedidoRepository } from "../respositories/pedido.repository";
export declare class PedidoFinderService {
    private pedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    getAll(): Promise<import("../entities/pedido.entity").PedidoEntity[]>;
    getByName(pedidoo: string): Promise<import("../entities/pedido.entity").PedidoEntity[]>;
    getByUnidadeId(id: string): Promise<import("../entities/pedido.entity").PedidoEntity[]>;
    getById(id: string): Promise<import("../entities/pedido.entity").PedidoEntity>;
    getPedidoByUnidadeId(unidadeid: string): Promise<import("../entities/pedido.entity").PedidoEntity[]>;
}
