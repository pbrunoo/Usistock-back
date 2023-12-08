import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { EmpresaEntity } from "../entities/empresa.entity";
import { NewEmpresaRequest } from "../requests/new-empresa.request";
import { UpdateEmpresaRequest } from "../requests/update-empresa.request";
import { CreateEmpresaService } from "../services/empresa-create.service";
import { EmpresaEraserService } from "../services/empresa-eraser.service";
import { EmpresaFinderService } from "../services/empresa-finder.service";
import { UpdateEmpresaService } from "../services/update-empresa.service";


@Controller('v1/empresa')
@ApiTags('Empresa')

export class EmpresaController {
    constructor(
        private createEmpresaService: CreateEmpresaService,
        private updateEmpesaService: UpdateEmpresaService,
        private EmpresaEraserService: EmpresaEraserService,
        private EmpresaFinderService: EmpresaFinderService
    ){ }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({status: HttpStatus.CREATED, type: EmpresaEntity})
    async create(@Body() NewEmpresaRequest: NewEmpresaRequest) {
        const empresa = await this
            .createEmpresaService
            .create(NewEmpresaRequest);
        return empresa;
    }

    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async update(@Param('id') id: string, @Body() UpdateEmpresaRequest: UpdateEmpresaRequest) {
       const empresa = await this.updateEmpesaService.update(id, UpdateEmpresaRequest);
       return empresa;
    }

    @Get('all')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: [EmpresaEntity] })
    async getAll() {
        const empresa = await this.EmpresaFinderService.getAll();
        return empresa;
    }

    @Get(':razaoSocial')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: EmpresaEntity })
    async getByCostumerName(@Param('razaoSocial') razaoSocial: string) {
        const empresa = await this.EmpresaFinderService.getByName(razaoSocial);
        return empresa;
    }

    @Get('unique/:id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: EmpresaEntity })
    async getByEmpresaId(@Param('id') id: string) {
        const empresa = await this.EmpresaFinderService.getById(id);

        return empresa;
    }

    @Get('sch/:search')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getSearch(@Param('search') search: string) {
        const searchs = await this.EmpresaFinderService.searchAllEmpresa(search);
        return searchs
    }


    @Delete(':id/:userId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async delete(@Param('id') id: string, @Param('userId') userId: string) {
        await this.EmpresaEraserService.delete(id, userId);
    }
    
}