import { EmpresaEntity } from "../entities/empresa.entity";
import { NewEmpresaRequest } from "../requests/new-empresa.request";
import { UpdateEmpresaRequest } from "../requests/update-empresa.request";
import { CreateEmpresaService } from "../services/empresa-create.service";
import { EmpresaEraserService } from "../services/empresa-eraser.service";
import { EmpresaFinderService } from "../services/empresa-finder.service";
import { UpdateEmpresaService } from "../services/update-empresa.service";
export declare class EmpresaController {
    private createEmpresaService;
    private updateEmpesaService;
    private EmpresaEraserService;
    private EmpresaFinderService;
    constructor(createEmpresaService: CreateEmpresaService, updateEmpesaService: UpdateEmpresaService, EmpresaEraserService: EmpresaEraserService, EmpresaFinderService: EmpresaFinderService);
    create(NewEmpresaRequest: NewEmpresaRequest): Promise<NewEmpresaRequest & EmpresaEntity>;
    update(id: string, UpdateEmpresaRequest: UpdateEmpresaRequest): Promise<import("typeorm").UpdateResult>;
    getAll(): Promise<EmpresaEntity[]>;
    getByCostumerName(razaoSocial: string): Promise<string>;
    getByEmpresaId(id: string): Promise<EmpresaEntity>;
    getSearch(search: string): Promise<EmpresaEntity[]>;
    delete(id: string, userId: string): Promise<void>;
}
