import { ItensPedido } from "../entities/agreggates/itens-pedido";
import { NewItensPedidosRequest } from "../requets/itens-pedido/new-itens-pedidos.request";
import { UpdateItensPedidosRequest } from "../requets/itens-pedido/update-itens-pedidos.request";
import { ItensPedidoUpdateService } from "../services/itens-pedido-update.service";
import { ItensPedidoCreatorService } from "../services/itens-pedido/itens-pedido-creator.service";
import { ItensPedidoEraserService } from "../services/itens-pedido/itens-pedido-eraser.service";
import { ItensPedidoReaderService } from "../services/itens-pedido/itens-pedido-reader.service";
export declare class ItensPedidoController {
    private itensPedidoCreatorService;
    private itensPedidoReaderService;
    private itensPedidoEraserService;
    private itensPedidoUpdateService;
    constructor(itensPedidoCreatorService: ItensPedidoCreatorService, itensPedidoReaderService: ItensPedidoReaderService, itensPedidoEraserService: ItensPedidoEraserService, itensPedidoUpdateService: ItensPedidoUpdateService);
    create(produtoId: string, newItensPedidosRequest: NewItensPedidosRequest): Promise<import("../entities/pedido.entity").PedidoEntity>;
    update(pedidoId: string, itensId: string, updateItensPedidosRequest: UpdateItensPedidosRequest): Promise<void>;
    getAll(pedidoId: string): Promise<ItensPedido[]>;
    delete(pedidoId: string, itensId: string): Promise<void>;
}
