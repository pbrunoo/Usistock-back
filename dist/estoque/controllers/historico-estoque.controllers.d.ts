import { HistoricoEstoque } from "../entities/agreggate/historico-estoque";
import { NewHistoricoEstoqueRequest } from "../requests/historico-estoque/new-historico-estoque.request";
import { UpdateHistoricoEstoqueRequest } from "../requests/historico-estoque/update-historico-estoque.resquest";
import { HistoricoEstoqueCreatorService } from "../services/historico-estoque/historico-estoque-creator.service";
import { HistoricoEstoqueEraserService } from "../services/historico-estoque/historico-estoque-eraser.service";
import { HistoricoEstoqueReaderService } from "../services/historico-estoque/historico-estoque-reader.service";
import { HistoricoEstoqueUpdateService } from "../services/historico-estoque/historico-estoque-update.service";
export declare class HistoricoEstoqueController {
    private historicoEstoqueCreatorService;
    private historicoEstoqueReaderService;
    private historicoEstoqueEraserService;
    private historicoEstoqueUpdateService;
    constructor(historicoEstoqueCreatorService: HistoricoEstoqueCreatorService, historicoEstoqueReaderService: HistoricoEstoqueReaderService, historicoEstoqueEraserService: HistoricoEstoqueEraserService, historicoEstoqueUpdateService: HistoricoEstoqueUpdateService);
    create(estoqueId: string, newHistoricoEstoqueRequest: NewHistoricoEstoqueRequest): Promise<import("../entities/estoque.entity").EstoqueEntity>;
    update(estoqueId: string, historicoId: string, updateHistoricoEstoqueRequest: UpdateHistoricoEstoqueRequest): Promise<void>;
    getAll(estoqueId: string): Promise<HistoricoEstoque[]>;
    delete(estoqueId: string, historicoId: string): Promise<void>;
}
