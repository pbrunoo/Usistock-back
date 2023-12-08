import { FuncionarioEntity } from "../entities/funcionario.entity";
import { NewFuncionarioRequest } from "../requests/new-funcionario.request";
import { UpdateFuncionarioRequest } from "../requests/update-funcionario.request";
import { CreateFuncionarioService } from "../services/funcionario-create.service";
import { FuncionarioEraserService } from "../services/funcionario-erase.service";
import { FuncionarioFinderService } from "../services/funcionario-finder.service";
import { UpdateFuncionarioService } from "../services/update-funcionario.service";
export declare class FuncionarioController {
    private createFuncionarioService;
    private updateFuncionarioService;
    private funcionarioEraserService;
    private funcionarioFinderService;
    constructor(createFuncionarioService: CreateFuncionarioService, updateFuncionarioService: UpdateFuncionarioService, funcionarioEraserService: FuncionarioEraserService, funcionarioFinderService: FuncionarioFinderService);
    create(newFuncionarioRequest: NewFuncionarioRequest): Promise<NewFuncionarioRequest & FuncionarioEntity>;
    update(id: string, updateFuncionarioRequest: UpdateFuncionarioRequest): Promise<void>;
    getAll(): Promise<FuncionarioEntity[]>;
    getByCostumerName(nomeCompleto: string): Promise<FuncionarioEntity[]>;
    getByFuncionarioId(id: string): Promise<FuncionarioEntity>;
    getFuncionarioByUnidadeId(unidadeid: string): Promise<void>;
    getUnidadeEmpresa(idFuncionario: string): Promise<any[]>;
    getSearch(search: string): Promise<FuncionarioEntity[]>;
    delete(id: string, userId: string): Promise<void>;
}
