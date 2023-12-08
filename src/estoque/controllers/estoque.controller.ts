import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { EstoqueEntity } from "../entities/estoque.entity";
import { NewEstoqueRequest } from "../requests/new-estoque.request";
import { UpdateEstoqueRequest } from "../requests/update-estoque-request";
import { CreateEstoqueService } from "../services/estoque-create.service";
import { EstoqueFinderService } from "../services/estoque-finder.service";
import { EstoqueEraserService } from "../services/estoque-eraser.service";
import { UpdateEstoqueService } from "../services/update-estoque.service";

@Controller('v1/estoque')
@ApiTags('Estoque')

export class EstoqueController {
    constructor(
        private createEstoqueService: CreateEstoqueService,
        private updateEstoqueService: UpdateEstoqueService,
        private estoqueEraserService: EstoqueEraserService,
        private estoqueFinderService: EstoqueFinderService
    ) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({status: HttpStatus.CREATED, type: EstoqueEntity})
    async create(@Body() NewEstoqueRequest: NewEstoqueRequest ) {
        const estoque = await this
            .createEstoqueService
            .create(NewEstoqueRequest);
        return estoque;
    }

    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({status: HttpStatus.NO_CONTENT})
    async update(@Param('id') id: string, @Body() updateEstoqueRequest: UpdateEstoqueRequest) {
        await this.updateEstoqueService.update(id, updateEstoqueRequest);
    }

    @Get('all')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({status: HttpStatus.OK, type: [EstoqueEntity]})
    async getAll() {
        const estoque = await this.estoqueFinderService.getAll();
        return estoque;
    }

    @Get('unique/:id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({status: HttpStatus.OK, type: EstoqueEntity})
    async getByEstoqueId(@Param('id') id: string) {
        const estoque = await this.estoqueFinderService.getById(id);

        return estoque;
    }

    @Get('all/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getEstoqueByUnidadeId(@Param('unidadeid') unidadeid: string) {
        const estoque = await this.estoqueFinderService.getByUnidadeId(unidadeid);

        return estoque;
    }

    @Get('sch/:search/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getSearch(@Param('search') search: string, @Param('unidadeid') unidadeid: string) {
        const searchs = await this.estoqueFinderService.searchAll(search, unidadeid);
        return searchs;
    }

    @Delete(':id/:userId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async delete(@Param('id') id: string, @Param('userId') userId: string) {
        await this.estoqueEraserService.delete(id, userId);
    }

    @Put(':produtoId/:total')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async updateOrcamento(@Param('produtoId') produtoId: string, @Param('total') total: number) {
        await this.updateEstoqueService.updateOrcamento(produtoId, total);
    }
}