import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { HistoricoEstoque } from "../entities/agreggate/historico-estoque";
import { NewHistoricoEstoqueRequest } from "../requests/historico-estoque/new-historico-estoque.request";
import { UpdateHistoricoEstoqueRequest } from "../requests/historico-estoque/update-historico-estoque.resquest";
import { HistoricoEstoqueCreatorService } from "../services/historico-estoque/historico-estoque-creator.service";
import { HistoricoEstoqueEraserService } from "../services/historico-estoque/historico-estoque-eraser.service";
import { HistoricoEstoqueReaderService } from "../services/historico-estoque/historico-estoque-reader.service";
import { HistoricoEstoqueUpdateService } from "../services/historico-estoque/historico-estoque-update.service";

@Controller('v1/historico/estoque')
@ApiTags('Estoque')

export class HistoricoEstoqueController {
    constructor(
        private historicoEstoqueCreatorService: HistoricoEstoqueCreatorService,
        private historicoEstoqueReaderService: HistoricoEstoqueReaderService,
        private historicoEstoqueEraserService: HistoricoEstoqueEraserService,
        private historicoEstoqueUpdateService: HistoricoEstoqueUpdateService
    ) {}

    @Post(':estoqueId')
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: HttpStatus.CREATED, type: HistoricoEstoque })
    async create(@Param('estoqueId') estoqueId: string, @Body() newHistoricoEstoqueRequest: NewHistoricoEstoqueRequest) {
        const historicoEstoque = await this
            .historicoEstoqueCreatorService
            .create(estoqueId, newHistoricoEstoqueRequest);
           // console.log(historicoEstoque);
        return historicoEstoque;
    }

    @Put(':estoqueId/:historicoId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async update(@Param('estoqueId') estoqueId: string, @Param('historicoId') historicoId: string, @Body() updateHistoricoEstoqueRequest: UpdateHistoricoEstoqueRequest) {
        await this.historicoEstoqueUpdateService.update(estoqueId, historicoId, updateHistoricoEstoqueRequest);
        return; 
    }

    @Get(':estoqueId')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: [HistoricoEstoque] })
    async getAll(@Param('estoqueId') estoqueId: string) {
        const historicoEstoque = await this.historicoEstoqueReaderService.getAllHistoricoEstoque(estoqueId);
        return historicoEstoque;
    }

    @Delete(':estoqueId/:historicoId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async delete(@Param('estoqueId') estoqueId: string, @Param('historicoId') historicoId: string) {
        await this.historicoEstoqueEraserService.erase(estoqueId, historicoId);
    }    
}