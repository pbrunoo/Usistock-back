import { Controller, Post, HttpStatus, Body, HttpCode, Get, Put, Param, Delete } from '@nestjs/common';
import { ClienteEntity } from '../entities/cliente.entity';
import { ClienteRepository } from '../repositories/cliente.repository';
import { NewClienteRequest } from '../requests/new-clientes';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateClienteService } from '../services/update-cliente.service';
import { ClienteEraserService } from '../services/cliente-eraser.service';
import { ClienteFinderService } from '../services/cliente-finder.service';
import { UpdateClienteRequest } from '../requests/update-cliente';
import { CreateClienteService } from '../services/create-cliente.service';

@Controller('v1/cliente')
@ApiTags('Cliente')
export class ClienteController {
    constructor(
        private createClienteService: CreateClienteService,
        private updateClienteService: UpdateClienteService,
        private clienteEraserService: ClienteEraserService,
        private clienteFinderService: ClienteFinderService
    ) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: HttpStatus.CREATED, type: ClienteEntity})
    async create(@Body() NewClienteRequest: NewClienteRequest) {
        const cliente = await this
            .createClienteService
            .create(NewClienteRequest);
        return cliente;
    }

    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async update(@Param('id') id: string, @Body() UpdateClienteRequest: UpdateClienteRequest){
        await this.updateClienteService.update(id, UpdateClienteRequest);
    }

    @Get('all')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: [ClienteEntity] })
    async getAll() {
        const clientes = await this.clienteFinderService.getAll();

        return clientes;
    }

    @Get(':razaoSocial')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: ClienteEntity })
    async getByCostumerName(@Param('razaoSocial') razaoSocial: string) {
        const cliente = await this.clienteFinderService.getByName(razaoSocial);

        return cliente;
    }

    @Get('unique/:id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: ClienteEntity })
    async getByClienteId(@Param('id') id: string) {
        const cliente = await this.clienteFinderService.getById(id);

        return cliente;
    }

    @Get('all/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getUsersByUnidadeId(@Param('unidadeid') unidadeid: string) {
        const cliente = await this.clienteFinderService.getByUnidadeId(unidadeid);

        return cliente;
    }

    @Get('sch/:search/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getSearch(@Param('search') search: string, @Param('unidadeid') unidadeid: string) {
        const searchs = await this.clienteFinderService.searchAll(search, unidadeid);
        return searchs;
    }

    @Delete(':id/:userId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ status: HttpStatus.NO_CONTENT })
    async delete(@Param('id') id: string, @Param('userId') userId: string) {
        await this.clienteEraserService.delete(id, userId);
    }
}