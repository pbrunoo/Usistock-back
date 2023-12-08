import { PedidoEntity } from "../entities/pedido.entity";
import { NewPedidoRequest } from "../requets/new-pedido.request";
import { UpdatePedidoRequest } from "../requets/update-pedido.resquest";
import { CreatePedidoService } from "../services/pedido-create.service";
import { PedidoEraserService } from "../services/pedido-eraser.service";
import { PedidoFinderService } from "../services/pedido-finder.service";
import { UpdatePedidoService } from "../services/update-pedido.service";
export declare class PedidoControllers {
    private createPedidoService;
    private updatePedidoService;
    private pedidoEraserService;
    private pedidoFinderService;
    constructor(createPedidoService: CreatePedidoService, updatePedidoService: UpdatePedidoService, pedidoEraserService: PedidoEraserService, pedidoFinderService: PedidoFinderService);
    create(newPedidoRequest: NewPedidoRequest): Promise<NewPedidoRequest & PedidoEntity>;
    update(id: string, updatePedidoRequest: UpdatePedidoRequest): Promise<void>;
    getAll(): Promise<PedidoEntity[]>;
    getByPedidoId(id: string): Promise<PedidoEntity>;
    getPedidoByUnidadeId(unidadeid: string): Promise<PedidoEntity[]>;
    delete(id: string, userId: string): Promise<void>;
}
