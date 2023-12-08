import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { OrcamentoEntity } from "../entities/orcamento.entity";
import { NewOrcamentoRequest } from "../requests/new-orcamento-request";
import { UpdateOrcamentoRequest } from "../requests/update-orcamento.request";
import { CreateOrcamentoService } from "../services/orcamento-create.service";
import { OrcamentoEraserService } from "../services/orcamento-eraser.service";
import { OrcamentoFinderService } from "../services/orcamento-finder.service";
import { UpdateOrcamentoService } from "../services/update-orcamento.service";

@Controller('v1/orcamento')
@ApiTags('Orcamento')

export class OrcamentoController {
    constructor(
        private createOrcamentoService: CreateOrcamentoService,
        private updateOrcamentoService: UpdateOrcamentoService,
        private orcamentoEraserService: OrcamentoEraserService,
        private orcamentoFinderService: OrcamentoFinderService
    ) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: HttpStatus.CREATED, type: OrcamentoEntity })
    async create(@Body() newOrcamentoRequest: NewOrcamentoRequest) {
        const orcamento = await this
            .createOrcamentoService
            .create(newOrcamentoRequest);
        return orcamento;
    }

    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async update(@Param('id') id: string, @Body() updateOrcamentoRequest: UpdateOrcamentoRequest) {
        await this.updateOrcamentoService.update(id, updateOrcamentoRequest);
    }

    @Get('all')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: [OrcamentoEntity] })
    async getAll() {
        const orcamento = await this.orcamentoFinderService.getAll();
        return orcamento;
    }

    @Get('unique/:id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: OrcamentoEntity })
    async getByOrcamentoId(@Param('id') id: string) {
        const orcamento = await this.orcamentoFinderService.getById(id);
        return orcamento;
    }

    @Get('all/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getOrcamentoByUnidadeId(@Param('unidadeid') unidadeid: string) {
        const orcamento = await this.orcamentoFinderService.getByUnidadeId(unidadeid);

        return orcamento;
    }

    @Get('sch/:search/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String  })
    async getSearch(@Param ('search') search: string, @Param('unidadeid') unidadeid: string) {
        const searchs = await this.orcamentoFinderService.searchAll(search, unidadeid);
        return searchs;
    }

    @Delete(':id/:userId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async delete(@Param('id') id: string, @Param('userId') userId: string) {
        await this.orcamentoEraserService.delete(id, userId);
    }

}