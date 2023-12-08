import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { PedidoEntity } from "../entities/pedido.entity";
import { NewPedidoRequest } from "../requets/new-pedido.request";
import { UpdatePedidoRequest } from "../requets/update-pedido.resquest";
import { CreatePedidoService } from "../services/pedido-create.service";
import { PedidoEraserService } from "../services/pedido-eraser.service";
import { PedidoFinderService } from "../services/pedido-finder.service";
import { UpdatePedidoService } from "../services/update-pedido.service";

@Controller('v1/pedido')
@ApiTags('Pedido')

export class PedidoControllers {
    constructor(
        private createPedidoService: CreatePedidoService,
        private updatePedidoService: UpdatePedidoService,
        private pedidoEraserService: PedidoEraserService,
        private pedidoFinderService: PedidoFinderService
    ) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: HttpStatus.CREATED, type: PedidoEntity })
    async create(@Body() newPedidoRequest: NewPedidoRequest) {
        const pedido = await this
            .createPedidoService
            .create(newPedidoRequest);
        return pedido;
    }

    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async update(@Param('id') id: string, @Body() updatePedidoRequest: UpdatePedidoRequest) {
        await this.updatePedidoService.update(id, updatePedidoRequest);
    }

    @Get('all')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({status: HttpStatus.OK, type: [PedidoEntity]})
    async getAll() {
        const pedido = await this.pedidoFinderService.getAll();
        return pedido;
    }

    @Get('unique/:id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({status: HttpStatus.OK, type: PedidoEntity})
    async getByPedidoId(@Param('id') id: string) {
        const pedido = await this.pedidoFinderService.getById(id);
        return pedido;
    }

    @Get('all/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getPedidoByUnidadeId(@Param('unidadeid') unidadeid: string) {
        const pedido= await this.pedidoFinderService.getByUnidadeId(unidadeid);
        return pedido;
    }

    @Delete(':id/:userId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async delete(@Param('id') id: string, @Param('userId') userId: string) {
        await this.pedidoEraserService.delete(id, userId);
    }

    

}