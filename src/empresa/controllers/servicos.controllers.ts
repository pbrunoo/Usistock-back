import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Servicos } from "../entities/agreggate/servicos";
import { EmpresaEntity } from "../entities/empresa.entity";
import { NewEmpresaRequest } from "../requests/new-empresa.request";
import { NewServicosRequest } from "../requests/servicos/servicos.request";
import { UpdateEmpresaRequest } from "../requests/update-empresa.request";
import { CreateEmpresaService } from "../services/empresa-create.service";
import { EmpresaEraserService } from "../services/empresa-eraser.service";
import { EmpresaFinderService } from "../services/empresa-finder.service";
import { ServicosCreatorService } from "../services/servicos/servicos-creator.service";
import { ServicosEraserService } from "../services/servicos/servicos-eraser.service";
import { ServicosReaderService } from "../services/servicos/servicos-reader.service";
import { UpdateEmpresaService } from "../services/update-empresa.service";


@Controller('v1/empresa/servicos')
@ApiTags('Empresa')

export class ServicosController {
    constructor(
        private servicosCreateServices: ServicosCreatorService,
        private servicosReaderService: ServicosReaderService,
        private servicosEraserService: ServicosEraserService,
        
    ){ }

    @Post(':empresaId')
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({status: HttpStatus.CREATED, type: Servicos})
    async create(@Param('empresaId') empresaId: string, @Body() newServicosRequest: NewServicosRequest) {
        const servicos = await this
            .servicosCreateServices
            .create(empresaId, newServicosRequest);
            console.log(servicos);
        return servicos;
    }

    @Get(':empresaId')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: [Servicos] })
    async getAll(@Param('empresaId') empresaId: string) {
        const servicos = await this.servicosReaderService.getAllServicos(empresaId);
        return servicos;
    }

    @Delete(':empresaId/:cnae')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async delete(@Param('empresaId') empresaId: string, @Param('cnae') cnae: number) {
        await this.servicosEraserService.erase(empresaId, cnae);
    }
    
}