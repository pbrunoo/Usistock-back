import { EmpresaRepository } from 'src/empresa/repositories/empresa.respository';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FuncionarioController } from "./controllers/funcionario.controller";
import { FuncionarioRepository } from "./repositories/funcionario.repository";
import { CreateFuncionarioService } from "./services/funcionario-create.service";
import { FuncionarioEraserService } from "./services/funcionario-erase.service";
import { FuncionarioFinderService } from "./services/funcionario-finder.service";
import { UpdateFuncionarioService } from "./services/update-funcionario.service";

@Module({
    imports: [
       TypeOrmModule.forFeature([
           FuncionarioRepository,
           EmpresaRepository
       ])
    ],
    controllers: [
        FuncionarioController
    ],
    providers: [
        CreateFuncionarioService,
        UpdateFuncionarioService,
        FuncionarioFinderService,
        FuncionarioEraserService
    ]
})

export class FuncionariosModule{}