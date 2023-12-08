import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { UnidadeRepository } from "src/unidade/respositories/unidade.repository";
import { OrcamentoController } from "./controllers/orcamento.controller";
import { ProdutoController } from "./controllers/produto.controllers";
import { OrcamentoRepository } from "./respositories/orcamento.repository";
import { CreateOrcamentoService } from "./services/orcamento-create.service";
import { OrcamentoEraserService } from "./services/orcamento-eraser.service";
import { OrcamentoFinderService } from "./services/orcamento-finder.service";
import { ProdutoCreatorService } from "./services/produto/produto-creator.service";
import { ProdutoEraserService } from "./services/produto/produto-eraser.service";
import { ProdutoReaderService } from "./services/produto/produto-reader.service";
import { ProdutoUpdateService } from "./services/produto/produto-update.service";
import { UpdateOrcamentoService } from "./services/update-orcamento.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            OrcamentoRepository,
            UnidadeRepository
        ])
    ],
    controllers: [
        OrcamentoController,
        ProdutoController
    ],
    providers: [
        CreateOrcamentoService,
        UpdateOrcamentoService,
        OrcamentoFinderService,
        OrcamentoEraserService,
        ProdutoCreatorService,
        ProdutoEraserService,
        ProdutoUpdateService,
        ProdutoReaderService
    ]
})

export class OrcamentoModule{ }