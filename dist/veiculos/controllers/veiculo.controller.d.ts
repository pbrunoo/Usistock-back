import { VeiculoEntity } from "../entities/veiculo.entity";
import { NewVeiculoRequest } from "../requests/new-veiculo";
import { UpdateVeiculoRequest } from "../requests/update-veiculo";
import { CreateVeiculoService } from "../services/create-veiculo.service";
import { UpdateVeiculoService } from "../services/update-veiculo.service";
import { VeiculoEraserService } from "../services/veiculo-eraser.service";
import { VeiculoFinderService } from "../services/veiculo-finder.service";
export declare class VeiculoController {
    private createVeiculoService;
    private updateVeiculoService;
    private veiculoEraserService;
    private veiculoFinderService;
    constructor(createVeiculoService: CreateVeiculoService, updateVeiculoService: UpdateVeiculoService, veiculoEraserService: VeiculoEraserService, veiculoFinderService: VeiculoFinderService);
    create(NewVeiculoRequest: NewVeiculoRequest): Promise<NewVeiculoRequest & VeiculoEntity>;
    update(id: string, updateVeiculoRequest: UpdateVeiculoRequest): Promise<void>;
    getAll(): Promise<VeiculoEntity[]>;
    getByVeiculoId(id: string): Promise<VeiculoEntity>;
    getVeiculoByUnidadeId(unidadeid: string): Promise<VeiculoEntity[]>;
    getSearch(search: string, unidadeid: string): Promise<VeiculoEntity[]>;
    delete(id: string, userId: string): Promise<void>;
}
