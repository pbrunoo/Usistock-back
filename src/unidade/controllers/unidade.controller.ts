import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { UnityEmpresa } from "../dto/unity-empresa.dto";
import { UnidadeEntity } from "../entities/unidade.entity";
import { NewUnidadeRequest } from "../requests/new-unidade.request";
import { UpdateUnidadeRequest } from "../requests/update-unidade.request";
import { CreateUnidadeService } from "../services/unidade-create.service";
import { UnidadeEraserService } from "../services/unidade-eraser.service";
import { UnidadeFinderService } from "../services/unidade-finder.service";
import { UpdateUnidadeService } from "../services/update-unidade.service";

@Controller('v1/unidade')
@ApiTags('Unidade')

export class UnidadeController {
    constructor(
        private createUnidadeService: CreateUnidadeService,
        private updateUnidadeService: UpdateUnidadeService,
        private UnidadeEraserService: UnidadeEraserService,
        private UnidadeFinderService: UnidadeFinderService
    ){ }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({status: HttpStatus.CREATED, type: UnidadeEntity})
    async create(@Body() NewUnidadeRequest: NewUnidadeRequest) {
        const unidade = await this
            .createUnidadeService
            .create(NewUnidadeRequest);
        return unidade;
    }

    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async update(@Param('id') id: string, @Body() UpdateUnidadeRequest: UpdateUnidadeRequest) {
        await this.updateUnidadeService.update(id, UpdateUnidadeRequest);
    }

    @Get('all')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: [UnidadeEntity] })
    async getAll() {
        const unidade = await this.UnidadeFinderService.getAll();
        return unidade;
    }

    @Get(':nomeUnidade')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: UnidadeEntity })
    async getByCostumerName(@Param('nomeUnidade') nomeUnidade: string) {
        const unidade = await this.UnidadeFinderService.getByName(nomeUnidade);
        return unidade;
    }

   @Get('all/unidadeEmpresa')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: UnityEmpresa })
    async getUnidadeEmpresa() {
        const unidadeEmpresa = await this.UnidadeFinderService.getUnidadeEmpresa();
        return unidadeEmpresa;
    }

    @Get('sch/:search')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getSearch(@Param('search') search: string) {
        const searchs = await this.UnidadeFinderService.searchAll(search);
        return searchs;
    }

    @Delete(':id/:userId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async delete(@Param('id') id: string, @Param('userId') userId: string ) {
        await this.UnidadeEraserService.delete(id, userId);
    }

    @Get('unique/:id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: UnidadeEntity })
    async getByUserId(@Param('id') id: string) {
        const unidade = await this.UnidadeFinderService.getById(id);

        return unidade;
    }

    
}