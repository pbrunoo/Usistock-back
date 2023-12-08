import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UnidadeRepository } from "src/unidade/respositories/unidade.repository";
import { ItensPedidoController } from "./controllers/itens-pedido.controller";
import { PedidoControllers } from "./controllers/pedido.controller";
import { PedidoEntity } from "./entities/pedido.entity";
import { PedidoRepository } from "./respositories/pedido.repository";
import { ItensPedidoUpdateService } from "./services/itens-pedido-update.service";
import { ItensPedidoCreatorService } from "./services/itens-pedido/itens-pedido-creator.service";
import { ItensPedidoEraserService } from "./services/itens-pedido/itens-pedido-eraser.service";
import { ItensPedidoReaderService } from "./services/itens-pedido/itens-pedido-reader.service";
import { CreatePedidoService } from "./services/pedido-create.service";
import { PedidoEraserService } from "./services/pedido-eraser.service";
import { PedidoFinderService } from "./services/pedido-finder.service";
import { UpdatePedidoService } from "./services/update-pedido.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            PedidoRepository,
            UnidadeRepository
        ])
    ],
    controllers: [
        PedidoControllers,
        ItensPedidoController

    ],
    providers: [
        CreatePedidoService,
        UpdatePedidoService,
        PedidoFinderService,
        PedidoEraserService,
        ItensPedidoCreatorService,
        ItensPedidoEraserService,
        ItensPedidoReaderService,
        ItensPedidoUpdateService
    ]
})

export class PedidoModule{}