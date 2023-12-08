import { Get, HttpCode, HttpStatus, Injectable, Param } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { PedidoRepository } from "../respositories/pedido.repository";

@Injectable()
export class PedidoFinderService {
    constructor (private pedidoRepository: PedidoRepository){ }

    async getAll() {
        const pedido = await this.pedidoRepository.getAll();
        return pedido;
    }

    async getByName(pedidoo: string) {
        const pedido = await this.pedidoRepository.find({
            pedido: pedidoo
        })
        return pedido;
    }

    async getByUnidadeId(id: string) {
        const pedido = await this.pedidoRepository.getPedidoByUnidadeId(id);
        return pedido;
    }

    async getById(id: string) {
        const pedido = await this.pedidoRepository.findOne(id);
        return pedido;
    }

    @Get('all/:unidadeid')
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ status: HttpStatus.OK, type: String })
	async getPedidoByUnidadeId(@Param('unidadeid') unidadeid: string) {
    	const pedido = await this.getByUnidadeId(unidadeid);

    	return pedido;
  	}

}