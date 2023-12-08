import { Produto } from "../entities/agreggate/produto";
import { NewProdutoRequest } from "../requests/produto/new-produto-request";
import { UpdateProdutoRequest } from "../requests/produto/update-produto-request";
import { ProdutoCreatorService } from "../services/produto/produto-creator.service";
import { ProdutoEraserService } from "../services/produto/produto-eraser.service";
import { ProdutoReaderService } from "../services/produto/produto-reader.service";
import { ProdutoUpdateService } from "../services/produto/produto-update.service";
export declare class ProdutoController {
    private produtoCreatorService;
    private produtoReaderService;
    private produtoEraserService;
    private produtoUpdateService;
    constructor(produtoCreatorService: ProdutoCreatorService, produtoReaderService: ProdutoReaderService, produtoEraserService: ProdutoEraserService, produtoUpdateService: ProdutoUpdateService);
    create(orcamentoId: string, newProdutoRequest: NewProdutoRequest): Promise<import("../entities/orcamento.entity").OrcamentoEntity>;
    update(orcamentoId: string, produtoId: string, updateProdutoRequest: UpdateProdutoRequest): Promise<void>;
    getAll(orcamentoId: string): Promise<Produto[]>;
    delete(orcamentoId: string, produtoId: string): Promise<void>;
}
