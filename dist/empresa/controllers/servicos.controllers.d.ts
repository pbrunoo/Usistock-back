import { Servicos } from "../entities/agreggate/servicos";
import { EmpresaEntity } from "../entities/empresa.entity";
import { NewServicosRequest } from "../requests/servicos/servicos.request";
import { ServicosCreatorService } from "../services/servicos/servicos-creator.service";
import { ServicosEraserService } from "../services/servicos/servicos-eraser.service";
import { ServicosReaderService } from "../services/servicos/servicos-reader.service";
export declare class ServicosController {
    private servicosCreateServices;
    private servicosReaderService;
    private servicosEraserService;
    constructor(servicosCreateServices: ServicosCreatorService, servicosReaderService: ServicosReaderService, servicosEraserService: ServicosEraserService);
    create(empresaId: string, newServicosRequest: NewServicosRequest): Promise<EmpresaEntity>;
    getAll(empresaId: string): Promise<Servicos[]>;
    delete(empresaId: string, cnae: number): Promise<void>;
}
