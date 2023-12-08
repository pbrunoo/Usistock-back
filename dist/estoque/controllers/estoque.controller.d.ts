import { EstoqueEntity } from "../entities/estoque.entity";
import { NewEstoqueRequest } from "../requests/new-estoque.request";
import { UpdateEstoqueRequest } from "../requests/update-estoque-request";
import { CreateEstoqueService } from "../services/estoque-create.service";
import { EstoqueFinderService } from "../services/estoque-finder.service";
import { EstoqueEraserService } from "../services/estoque-eraser.service";
import { UpdateEstoqueService } from "../services/update-estoque.service";
export declare class EstoqueController {
    private createEstoqueService;
    private updateEstoqueService;
    private estoqueEraserService;
    private estoqueFinderService;
    constructor(createEstoqueService: CreateEstoqueService, updateEstoqueService: UpdateEstoqueService, estoqueEraserService: EstoqueEraserService, estoqueFinderService: EstoqueFinderService);
    create(NewEstoqueRequest: NewEstoqueRequest): Promise<NewEstoqueRequest & EstoqueEntity>;
    update(id: string, updateEstoqueRequest: UpdateEstoqueRequest): Promise<void>;
    getAll(): Promise<EstoqueEntity[]>;
    getByEstoqueId(id: string): Promise<EstoqueEntity>;
    getEstoqueByUnidadeId(unidadeid: string): Promise<EstoqueEntity[]>;
    getSearch(search: string, unidadeid: string): Promise<EstoqueEntity[]>;
    delete(id: string, userId: string): Promise<void>;
    updateOrcamento(produtoId: string, total: number): Promise<void>;
}
