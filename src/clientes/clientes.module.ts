import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClienteController } from "./controllers/cliente.controller";
import { ClienteRepository } from "./repositories/cliente.repository";
import { ClienteEraserService } from "./services/cliente-eraser.service";
import { ClienteFinderService } from "./services/cliente-finder.service";
import { CreateClienteService } from "./services/create-cliente.service";
import { UpdateClienteService } from "./services/update-cliente.service";



@Module({
    imports:[
        TypeOrmModule.forFeature([
            ClienteRepository,
        ])
    ],
    controllers: [
        ClienteController
    ],
    providers: [
        CreateClienteService,
        UpdateClienteService,
        ClienteEraserService,
        ClienteFinderService
    ]
})

export class ClientesModule {}