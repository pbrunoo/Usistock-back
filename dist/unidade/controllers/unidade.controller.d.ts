import { UnityEmpresa } from "../dto/unity-empresa.dto";
import { UnidadeEntity } from "../entities/unidade.entity";
import { NewUnidadeRequest } from "../requests/new-unidade.request";
import { UpdateUnidadeRequest } from "../requests/update-unidade.request";
import { CreateUnidadeService } from "../services/unidade-create.service";
import { UnidadeEraserService } from "../services/unidade-eraser.service";
import { UnidadeFinderService } from "../services/unidade-finder.service";
import { UpdateUnidadeService } from "../services/update-unidade.service";
export declare class UnidadeController {
    private createUnidadeService;
    private updateUnidadeService;
    private UnidadeEraserService;
    private UnidadeFinderService;
    constructor(createUnidadeService: CreateUnidadeService, updateUnidadeService: UpdateUnidadeService, UnidadeEraserService: UnidadeEraserService, UnidadeFinderService: UnidadeFinderService);
    create(NewUnidadeRequest: NewUnidadeRequest): Promise<NewUnidadeRequest & UnidadeEntity>;
    update(id: string, UpdateUnidadeRequest: UpdateUnidadeRequest): Promise<void>;
    getAll(): Promise<UnidadeEntity[]>;
    getByCostumerName(nomeUnidade: string): Promise<UnidadeEntity[]>;
    getUnidadeEmpresa(): Promise<UnityEmpresa[]>;
    getSearch(search: string): Promise<UnityEmpresa[]>;
    delete(id: string, userId: string): Promise<void>;
    getByUserId(id: string): Promise<UnidadeEntity>;
}
