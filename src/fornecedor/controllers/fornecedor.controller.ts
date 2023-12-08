import { Controller, HttpCode, HttpStatus, Post, Body, Get, Put, Param, Delete } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { NewFornecedorRequest } from "../requests/new-fornecedor";
import { CreateFornecedorService } from "../services/fornecedor-create.service";
import { FornecedorEraserService } from "../services/fornecedor-eraser.service";
import { FornecedorFinderService } from "../services/fornecedor-finder.service";
import { UpdateFornecedorService } from "../services/update-fornecedor.service";
import { FornecedorEntity } from "../entities/fornecedor.entity";
import { UpdateFornecedorRequest } from "../requests/update-request";



@Controller('v1/fornecedor')
@ApiTags('Fornecedor')

export class FornecedorController {
    constructor(
        private createFornecedorService: CreateFornecedorService,
        private updateFornecedorService: UpdateFornecedorService,
        private fornecedorEraserService : FornecedorEraserService,
        private fornecedorFinderService: FornecedorFinderService
    ) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({status: HttpStatus.CREATED, type: FornecedorEntity})
    async create(@Body() NewFornecedorRequest: NewFornecedorRequest) {
        const fornecedor = await this
            .createFornecedorService
            .create(NewFornecedorRequest);
        return fornecedor;
    }

    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async update(@Param('id') id: string, @Body() UpdateFornecedorRequest: UpdateFornecedorRequest) {
        await this.updateFornecedorService.update(id, UpdateFornecedorRequest);
    }

    @Get('all')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: [FornecedorEntity] })
    async getAll() {
        const fornecedores = await this.fornecedorFinderService.getAll();
        return fornecedores;
    }

    @Get(':razaoSocial')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: FornecedorEntity })
    async getByCostumerName(@Param('razaoSocial') razaoSocial: string) {
        const fornecedor = await this.fornecedorFinderService.getByName(razaoSocial);
        return fornecedor;
    }

    @Get('unique/:id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: FornecedorEntity })
    async getByClienteId(@Param('id') id: string) {
        const fornecedor = await this.fornecedorFinderService.getById(id);

        return fornecedor;
    }

    @Get('all/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getFornecedorByUnidadeId(@Param('unidadeid') unidadeid: string) {
        const fornecedor = await this.fornecedorFinderService.getByUnidadeId(unidadeid);

        return fornecedor;
    }

    @Get('sch/:search/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getSearch(@Param('search') search: string, @Param('unidadeid') unidadeid: string) {
        const searchs = await this.fornecedorFinderService.searchAll(search, unidadeid);
        return searchs;
    }

    @Delete(':id/:userId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async delete(@Param('id') id: string, @Param('userId') userId: string) {
        await this.fornecedorEraserService.delete(id, userId);
    }

}