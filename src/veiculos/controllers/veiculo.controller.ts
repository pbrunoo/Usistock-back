import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { VeiculoEntity } from "../entities/veiculo.entity";
import { NewVeiculoRequest } from "../requests/new-veiculo";
import { UpdateVeiculoRequest } from "../requests/update-veiculo";
import { CreateVeiculoService } from "../services/create-veiculo.service";
import { UpdateVeiculoService } from "../services/update-veiculo.service";
import { VeiculoEraserService } from "../services/veiculo-eraser.service";
import { VeiculoFinderService } from "../services/veiculo-finder.service";


@Controller('v1/veiculo')
@ApiTags('Veiculo')
export class VeiculoController {
    constructor(
        private createVeiculoService: CreateVeiculoService,
        private updateVeiculoService: UpdateVeiculoService,
        private veiculoEraserService: VeiculoEraserService,
        private veiculoFinderService: VeiculoFinderService
    ){ }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({status: HttpStatus.CREATED, type: VeiculoEntity})
    async create(@Body() NewVeiculoRequest: NewVeiculoRequest) {
        const veiculo = await this
            .createVeiculoService
            .create(NewVeiculoRequest);
        return veiculo;
    }

    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async update(@Param('id') id: string, @Body() updateVeiculoRequest: UpdateVeiculoRequest) {
        await this.updateVeiculoService.update(id, updateVeiculoRequest);
    }

    @Get('all')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: [VeiculoEntity] })
    async getAll() {
        const veiculos = await this.veiculoFinderService.getAll();

        return veiculos;
    }

    @Get('unique/:id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: VeiculoEntity })
    async getByVeiculoId(@Param('id') id: string) {
        const veiculo = await this.veiculoFinderService.getById(id);

        return veiculo;
    }

    @Get('all/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getVeiculoByUnidadeId(@Param('unidadeid') unidadeid: string) {
        const veiculo = await this.veiculoFinderService.getByUnidadeId(unidadeid);

        return veiculo;
    }

    @Get('sch/:search/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getSearch(@Param('search') search: string, @Param('unidadeid') unidadeid: string) {
        const searchs = await this.veiculoFinderService.searchAll(search, unidadeid);
        return searchs;
    }

    @Delete(':id/:userId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async delete(@Param('id') id: string, @Param('userId') userId: string) {
        await this.veiculoEraserService.delete(id, userId);
    }

}