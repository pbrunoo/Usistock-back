import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

import { UnidadeRepository } from "./respositories/unidade.repository";
import { UnidadeController } from "./controllers/unidade.controller";
import { CreateUnidadeService } from "./services/unidade-create.service";
import { UpdateUnidadeService } from "./services/update-unidade.service";
import { UnidadeFinderService } from "./services/unidade-finder.service";
import { UnidadeEraserService } from "./services/unidade-eraser.service";
import { EmpresaModule } from "src/empresa/empresa.module";
import { EmpresaRepository } from "src/empresa/repositories/empresa.respository";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UnidadeRepository,
            EmpresaRepository
        ]),
    ],
    controllers: [
        UnidadeController
    ],
    providers: [
        CreateUnidadeService,
        UpdateUnidadeService,
        UnidadeFinderService,
        UnidadeEraserService
    ]
})

export class UnidadeModule {}