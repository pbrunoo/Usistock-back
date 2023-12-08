import { NewFornecedorRequest } from "../requests/new-fornecedor";
import { CreateFornecedorService } from "../services/fornecedor-create.service";
import { FornecedorEraserService } from "../services/fornecedor-eraser.service";
import { FornecedorFinderService } from "../services/fornecedor-finder.service";
import { UpdateFornecedorService } from "../services/update-fornecedor.service";
import { FornecedorEntity } from "../entities/fornecedor.entity";
import { UpdateFornecedorRequest } from "../requests/update-request";
export declare class FornecedorController {
    private createFornecedorService;
    private updateFornecedorService;
    private fornecedorEraserService;
    private fornecedorFinderService;
    constructor(createFornecedorService: CreateFornecedorService, updateFornecedorService: UpdateFornecedorService, fornecedorEraserService: FornecedorEraserService, fornecedorFinderService: FornecedorFinderService);
    create(NewFornecedorRequest: NewFornecedorRequest): Promise<NewFornecedorRequest & FornecedorEntity>;
    update(id: string, UpdateFornecedorRequest: UpdateFornecedorRequest): Promise<void>;
    getAll(): Promise<FornecedorEntity[]>;
    getByCostumerName(razaoSocial: string): Promise<FornecedorEntity[]>;
    getByClienteId(id: string): Promise<FornecedorEntity>;
    getFornecedorByUnidadeId(unidadeid: string): Promise<FornecedorEntity[]>;
    getSearch(search: string, unidadeid: string): Promise<FornecedorEntity[]>;
    delete(id: string, userId: string): Promise<void>;
}
