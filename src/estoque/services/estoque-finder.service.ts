import { Get, HttpCode, HttpStatus, Injectable, Param } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { UnidadeRepository } from "src/unidade/respositories/unidade.repository";
import { EstoqueRepository } from "../repositories/estoque.repository";

@Injectable()
export class EstoqueFinderService {
    constructor(
        private estoqueRepository: EstoqueRepository,
        private unidadeRepository: UnidadeRepository
    ){}

    async getAll() {
        const estoque = await this.estoqueRepository.getAll();
        return estoque;
    }

    async getByName(produto: string) {
        const estoque = await this.estoqueRepository.find({
            produto: produto
        })
        return estoque;
    }

    async getByUnidadeId(id: string) {
        const estoque = await this.estoqueRepository.getEstoqueByUnidadeId(id);
        return estoque;
    }

    async getById(id: string) {
        const estoque = await this.estoqueRepository.findOne(id);
        return estoque;
    }

    @Get('all/:unidadeid')
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ status: HttpStatus.OK, type: String })
	async getEstoqueByUnidadeId(@Param('unidadeid') unidadeid: string) {
    	const estoque = await this.getByUnidadeId(unidadeid);

    	return estoque;
  	}

    async searchAll(result: string, unidadeid: string) {
        const search = await this.estoqueRepository.findSearch(result, unidadeid);
        return search;
    }

}