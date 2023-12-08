import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { FornecedorController } from "./controllers/fornecedor.controller";
import { FornecedorRepository } from "./repositories/fornecedor.repository";
import { CreateFornecedorService } from "./services/fornecedor-create.service";
import { FornecedorEraserService } from "./services/fornecedor-eraser.service";
import { FornecedorFinderService } from "./services/fornecedor-finder.service";
import { UpdateFornecedorService } from "./services/update-fornecedor.service";


@Module({
    imports: [
        TypeOrmModule.forFeature([
            FornecedorRepository,
        ])
    ],
    controllers: [
        FornecedorController
    ],
    providers: [
        CreateFornecedorService,
        UpdateFornecedorService,
        FornecedorFinderService,
        FornecedorEraserService
    ]
})

export class FornecedoresModule {}