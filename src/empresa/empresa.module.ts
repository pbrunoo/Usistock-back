import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { EmpresaRepository } from "./repositories/empresa.respository";
import { EmpresaController } from "./controllers/empresa.controller";
import { CreateEmpresaService } from "./services/empresa-create.service";
import { UpdateEmpresaService } from "./services/update-empresa.service";
import { EmpresaFinderService } from "./services/empresa-finder.service";
import { EmpresaEraserService } from "./services/empresa-eraser.service";
import { ServicosController } from "./controllers/servicos.controllers";
import { ServicosCreatorService } from "./services/servicos/servicos-creator.service";
import { ServicosEraserService } from "./services/servicos/servicos-eraser.service";
import { ServicosReaderService } from "./services/servicos/servicos-reader.service";


@Module({
    imports: [
        TypeOrmModule.forFeature([
            EmpresaRepository,
        ])
    ],
    controllers: [
        EmpresaController,
        ServicosController
    ],
    providers: [
        CreateEmpresaService,
        UpdateEmpresaService,
        EmpresaFinderService,
        EmpresaEraserService,
        ServicosCreatorService,
        ServicosEraserService,
        ServicosReaderService
    ],
    exports: [
    ]
})

export class EmpresaModule {}