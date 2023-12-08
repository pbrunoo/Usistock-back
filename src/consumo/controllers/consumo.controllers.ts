import { UnityConsumo } from './../dto/unity-consumo.dto';
import { Controller, HttpCode, HttpStatus, Post, Body, Get, Put, Param, Delete } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ConsumoEntity } from "../entities/consumo.entity";
import { NewConsumoRequest } from "../requests/new-consumo";
import { UpdateConsumoRequest } from "../requests/update-request";
import { CreateConsumoService } from "../services/consumo-create.service";
import { ConsumoEraserService } from "../services/consumo-eraser.service";
import { ConsumoFinderService } from "../services/consumo-finder.service";
import { UpdateConsumoService } from "../services/update-consumo.service";


@Controller('v1/consumo')
@ApiTags('Consumo')

export class ConsumoController {
    constructor(
        private createconsumoService: CreateConsumoService,
        private updateConsumoService: UpdateConsumoService,
        private consumoEraserService : ConsumoEraserService,
        private consumoFinderService: ConsumoFinderService
    ) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({status: HttpStatus.CREATED, type: ConsumoEntity})
    async create(@Body() NewConsumoRequest: NewConsumoRequest) {
        const consumo = await this
            .createconsumoService
            .create(NewConsumoRequest);
        return consumo;
    }

    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async update(@Param('id') id: string, @Body() UpdateConsumoRequest: UpdateConsumoRequest) {
        await this.updateConsumoService.update(id, UpdateConsumoRequest);
    }

    @Get('all')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: [ConsumoEntity] })
    async getAll() {
        const consumo = await this.consumoFinderService.getAll();
        return consumo;
    }

    @Get('all/consumoFornecedor/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: UnityConsumo })
    async getFornecedor(@Param('unidadeid') unidadeid: string) {
        const consumoFornecedor = await this.consumoFinderService.getFornecedor(unidadeid);
        return consumoFornecedor;
    }

    @Get(':produto')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: ConsumoEntity })
    async getByCostumerName(@Param('produto') produto: string) {
        const consumo = await this.consumoFinderService.getByName(produto);
        return consumo;
    }

    @Get('unique/:id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({status: HttpStatus.OK, type: ConsumoEntity})
    async getByConsumoId(@Param('id') id: string) {
        const consumo = await this.consumoFinderService.getById(id);

        return consumo;
    }

    @Get('all/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getUsersByUnidadeId(@Param('unidadeid') unidadeid: string) {
        const consumo = await this.consumoFinderService.getByUnidadeId(unidadeid);
        return consumo;
    }

    @Get('sch/:search/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getSearch(@Param('search') search: string, @Param('unidadeid') unidadeid: string) {
        const searchs = await this.consumoFinderService.searchAll(search, unidadeid);
        return searchs;
    }

    @Delete(':id/:userId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async delete(@Param('id') id: string, @Param('userId') userId: string) {
        await this.consumoEraserService.delete(id, userId);
    }

}