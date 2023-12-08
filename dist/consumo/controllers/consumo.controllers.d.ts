import { UnityConsumo } from './../dto/unity-consumo.dto';
import { ConsumoEntity } from "../entities/consumo.entity";
import { NewConsumoRequest } from "../requests/new-consumo";
import { UpdateConsumoRequest } from "../requests/update-request";
import { CreateConsumoService } from "../services/consumo-create.service";
import { ConsumoEraserService } from "../services/consumo-eraser.service";
import { ConsumoFinderService } from "../services/consumo-finder.service";
import { UpdateConsumoService } from "../services/update-consumo.service";
export declare class ConsumoController {
    private createconsumoService;
    private updateConsumoService;
    private consumoEraserService;
    private consumoFinderService;
    constructor(createconsumoService: CreateConsumoService, updateConsumoService: UpdateConsumoService, consumoEraserService: ConsumoEraserService, consumoFinderService: ConsumoFinderService);
    create(NewConsumoRequest: NewConsumoRequest): Promise<NewConsumoRequest & ConsumoEntity>;
    update(id: string, UpdateConsumoRequest: UpdateConsumoRequest): Promise<void>;
    getAll(): Promise<ConsumoEntity[]>;
    getFornecedor(unidadeid: string): Promise<UnityConsumo[]>;
    getByCostumerName(produto: string): Promise<string>;
    getByConsumoId(id: string): Promise<ConsumoEntity>;
    getUsersByUnidadeId(unidadeid: string): Promise<ConsumoEntity[]>;
    getSearch(search: string, unidadeid: string): Promise<ConsumoEntity[]>;
    delete(id: string, userId: string): Promise<void>;
}
