import { Get, HttpCode, HttpStatus, Injectable, Param } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { ClienteRepository } from "../repositories/cliente.repository";

@Injectable()
export class ClienteFinderService {
    constructor(
        private clienteRepository: ClienteRepository,
    ) { }

    async getAll() {
        const clientes = await this.clienteRepository.getAll();
        return clientes;
    }

    async getById(id: string) {
        const clientes = await this.clienteRepository.findOne(id);
		return clientes;
	}

    async getByUnidadeId(id: string) {
        const cliente = await this.clienteRepository.getClienteByUnidadeId(id);
		return cliente;

	}

    @Get('all/:unidadeid')
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ status: HttpStatus.OK, type: String })
	async getClienteByUnidadeId(@Param('unidadeid') unidadeid: string) {
    	const cliente = await this.getByUnidadeId(unidadeid);

    	return cliente;
  	}

    async getByName(razaoSocial: string) {
        const clientes = await this.clienteRepository.find({
            razaoSocial: razaoSocial
        });
        return razaoSocial;
    }

    async searchAll(result: string, unidadeid: string) {
        const search = await this.clienteRepository.findSearch(result, unidadeid);
        return search;
    }
}