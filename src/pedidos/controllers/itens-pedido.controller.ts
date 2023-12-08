import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ItensPedido } from "../entities/agreggates/itens-pedido";
import { NewItensPedidosRequest } from "../requets/itens-pedido/new-itens-pedidos.request";
import { UpdateItensPedidosRequest } from "../requets/itens-pedido/update-itens-pedidos.request";
import { ItensPedidoUpdateService } from "../services/itens-pedido-update.service";
import { ItensPedidoCreatorService } from "../services/itens-pedido/itens-pedido-creator.service";
import { ItensPedidoEraserService } from "../services/itens-pedido/itens-pedido-eraser.service";
import { ItensPedidoReaderService } from "../services/itens-pedido/itens-pedido-reader.service";

@Controller('v1/itens/pedido')
@ApiTags('Pedido')

export class ItensPedidoController {
    constructor(
        private itensPedidoCreatorService: ItensPedidoCreatorService,
        private itensPedidoReaderService: ItensPedidoReaderService,
        private itensPedidoEraserService: ItensPedidoEraserService,
        private itensPedidoUpdateService: ItensPedidoUpdateService
    ) { }

    @Post(':produtoId')
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: HttpStatus.CREATED, type: ItensPedido })
    async create(@Param('produtoId') produtoId: string, @Body() newItensPedidosRequest: NewItensPedidosRequest) {
        const itensPedido = await this
            .itensPedidoCreatorService
            .create(produtoId, newItensPedidosRequest);
        return itensPedido;
    }

    @Put(':pedidoId/:itensId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async update(@Param('pedidoId') pedidoId: string, @Param('itensId') itensId: string, @Body() updateItensPedidosRequest: UpdateItensPedidosRequest) {
        await this.itensPedidoUpdateService.update(pedidoId, itensId, updateItensPedidosRequest);
        return;
    }   

    @Get(':pedidoId')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: [ItensPedido] })
    async getAll(@Param('pedidoId') pedidoId: string) {
        const itensPedido = await this.itensPedidoReaderService.getAllItensPedido(pedidoId);
        return itensPedido;
    }

    @Delete(':pedidoId/:itensId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async delete(@Param('pedidoId') pedidoId: string, @Param('itensId') itensId: string) {
        await this.itensPedidoEraserService.erase(pedidoId, itensId);
    }   

}