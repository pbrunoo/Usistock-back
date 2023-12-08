import { OrcamentoEntity } from "../entities/orcamento.entity";
import { NewOrcamentoRequest } from "../requests/new-orcamento-request";
import { UpdateOrcamentoRequest } from "../requests/update-orcamento.request";
import { CreateOrcamentoService } from "../services/orcamento-create.service";
import { OrcamentoEraserService } from "../services/orcamento-eraser.service";
import { OrcamentoFinderService } from "../services/orcamento-finder.service";
import { UpdateOrcamentoService } from "../services/update-orcamento.service";
export declare class OrcamentoController {
    private createOrcamentoService;
    private updateOrcamentoService;
    private orcamentoEraserService;
    private orcamentoFinderService;
    constructor(createOrcamentoService: CreateOrcamentoService, updateOrcamentoService: UpdateOrcamentoService, orcamentoEraserService: OrcamentoEraserService, orcamentoFinderService: OrcamentoFinderService);
    create(newOrcamentoRequest: NewOrcamentoRequest): Promise<NewOrcamentoRequest & OrcamentoEntity>;
    update(id: string, updateOrcamentoRequest: UpdateOrcamentoRequest): Promise<void>;
    getAll(): Promise<OrcamentoEntity[]>;
    getByOrcamentoId(id: string): Promise<OrcamentoEntity>;
    getOrcamentoByUnidadeId(unidadeid: string): Promise<OrcamentoEntity[]>;
    getSearch(search: string, unidadeid: string): Promise<OrcamentoEntity[]>;
    delete(id: string, userId: string): Promise<void>;
}
