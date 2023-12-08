import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { VeiculoRepository } from "./repositories/veiculo.repository";
import { VeiculoController } from "./controllers/veiculo.controller";
import { CreateVeiculoService } from "./services/create-veiculo.service";
import { UpdateVeiculoService } from "./services/update-veiculo.service";
import { VeiculoEraserService } from "./services/veiculo-eraser.service";
import { VeiculoFinderService } from "./services/veiculo-finder.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
           VeiculoRepository
        ]),
    ],
    controllers: [
       VeiculoController
    ],
    providers: [
       CreateVeiculoService,
       UpdateVeiculoService,
       VeiculoEraserService,
       VeiculoFinderService
    ]
})

export class VeiculoModule {}