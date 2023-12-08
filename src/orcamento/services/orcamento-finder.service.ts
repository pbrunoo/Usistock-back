import { Get, HttpCode, HttpStatus, Injectable, Param } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { OrcamentoRepository } from "../respositories/orcamento.repository";

@Injectable()
export class OrcamentoFinderService {
    constructor(private orcamentoRepository: OrcamentoRepository) { }

    async getAll() {
        const orcamento = await this.orcamentoRepository.getAll();
        return orcamento;
    }

    async getByName(cliente: string) {
        const orcamento = await this.orcamentoRepository.find({
            clienteId: cliente
        });

        return orcamento;
    }

    async getByUnidadeId(id: string) {
        const orcamento = await this.orcamentoRepository.getOrcamentoByUnidadeId(id);
        return orcamento;
    }

    async getById(id: string) {
        const orcamento = await this.orcamentoRepository.findOne(id);
        return orcamento;
    }

    @Get('all/:unidadeid')
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ status: HttpStatus.OK, type: String })
	async getOrcamentoByUnidadeId(@Param('unidadeid') unidadeid: string) {
    	const orcamento = await this.getByUnidadeId(unidadeid);

    	return orcamento;
  	}

    async searchAll(result: string, unidadeId: string) {
        const search = await this.orcamentoRepository.findSearch(result, unidadeId);
        return search;
    }
}