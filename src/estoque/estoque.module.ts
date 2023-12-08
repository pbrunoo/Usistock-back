import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

import { UnidadeRepository } from "src/unidade/respositories/unidade.repository";
import { EstoqueController } from "./controllers/estoque.controller";
import { EstoqueRepository } from "./repositories/estoque.repository";
import { CreateEstoqueService } from "./services/estoque-create.service";
import { EstoqueEraserService } from "./services/estoque-eraser.service";
import { EstoqueFinderService } from "./services/estoque-finder.service";
import { UpdateEstoqueService } from "./services/update-estoque.service";
import { HistoricoEstoqueController } from "./controllers/historico-estoque.controllers";
import { HistoricoEstoqueCreatorService } from "./services/historico-estoque/historico-estoque-creator.service";
import { HistoricoEstoqueEraserService } from "./services/historico-estoque/historico-estoque-eraser.service";
import { HistoricoEstoqueReaderService } from "./services/historico-estoque/historico-estoque-reader.service";
import { HistoricoEstoqueUpdateService } from "./services/historico-estoque/historico-estoque-update.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            EstoqueRepository,
            UnidadeRepository,
        ])
    ],
    controllers: [
        EstoqueController,
        HistoricoEstoqueController
    ],
    providers: [
        CreateEstoqueService,
        UpdateEstoqueService,
        EstoqueFinderService,
        EstoqueEraserService,
        HistoricoEstoqueCreatorService,
        HistoricoEstoqueEraserService,
        HistoricoEstoqueReaderService,
        HistoricoEstoqueUpdateService
    ]
})

export class EstoqueModule{}