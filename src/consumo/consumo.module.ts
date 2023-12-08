import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { ConsumoRepository } from "./repositories/consumo.repository";
import { ConsumoController } from "./controllers/consumo.controllers"
import { CreateConsumoService } from "./services/consumo-create.service";
import { UpdateConsumoService } from "./services/update-consumo.service";
import { ConsumoFinderService } from "./services/consumo-finder.service";
import { ConsumoEraserService } from "./services/consumo-eraser.service";
import { FornecedorRepository } from "src/fornecedor/repositories/fornecedor.repository";


@Module({
    imports: [
        TypeOrmModule.forFeature([
            ConsumoRepository,
            FornecedorRepository
        ])
    ],
    controllers: [
        ConsumoController
    ],
    providers: [
        CreateConsumoService,
        UpdateConsumoService,
        ConsumoFinderService,
        ConsumoEraserService
    ]
})

export class ConsumoModule {}