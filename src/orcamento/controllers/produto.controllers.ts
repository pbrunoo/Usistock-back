import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Produto } from "../entities/agreggate/produto";
import { NewProdutoRequest } from "../requests/produto/new-produto-request";
import { UpdateProdutoRequest } from "../requests/produto/update-produto-request";
import { ProdutoCreatorService } from "../services/produto/produto-creator.service";
import { ProdutoEraserService } from "../services/produto/produto-eraser.service";
import { ProdutoReaderService } from "../services/produto/produto-reader.service";
import { ProdutoUpdateService } from "../services/produto/produto-update.service";

@Controller('v1/produto/orcamento')
@ApiTags('Orcamento')

export class ProdutoController {
    constructor(
        private produtoCreatorService: ProdutoCreatorService,
        private produtoReaderService: ProdutoReaderService,
        private produtoEraserService: ProdutoEraserService,
        private produtoUpdateService: ProdutoUpdateService,
    ) { }

    @Post(':orcamentoId')
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: HttpStatus.CREATED, type: Produto })
    async create(@Param('orcamentoId') orcamentoId: string, @Body() newProdutoRequest: NewProdutoRequest) {
        const produto = await this
            .produtoCreatorService
            .create(orcamentoId, newProdutoRequest);
        return produto;
    }

    @Put(':orcamentoId/:produtoId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async update(@Param('orcamentoId') orcamentoId: string, @Param('produtoId') produtoId: string, @Body() updateProdutoRequest: UpdateProdutoRequest) {
        await this.produtoUpdateService.update(orcamentoId, produtoId, updateProdutoRequest);
        return;
    }

    @Get(':orcamentoId')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: [Produto] })
    async getAll(@Param('orcamentoId') orcamentoId: string) {
        const produto = await this.produtoReaderService.getAllProduto(orcamentoId);
        return produto;
    }

    @Delete(':orcamentoId/:produtoId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async delete(@Param('orcamentoId') orcamentoId: string, @Param('produtoId') produtoId: string) {
        await this.produtoEraserService.eraser(orcamentoId, produtoId);
    }
}