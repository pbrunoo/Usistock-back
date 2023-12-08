import { Get, HttpCode, HttpStatus, Injectable, Param } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { FornecedorRepository } from "src/fornecedor/repositories/fornecedor.repository";


@Injectable()
export class FornecedorFinderService {
    constructor(
        private fornecedorRepository: FornecedorRepository
    ) {}

    async getAll() {
        const fornecedores = await this.fornecedorRepository.getAll();
        return fornecedores;
    }

    async getByName(razaoSocial: string) {
        const fornecedores = await this.fornecedorRepository.find({
            razaoSocial: razaoSocial
        })
        return fornecedores;
    }

    async getById(id: string) {
        const fornecedor = await this.fornecedorRepository.findOne(id);
        return fornecedor;
    }

    async getByUnidadeId(id: string) {
        const fornecedor = await this.fornecedorRepository.getFornecedorByUnidadeId(id);
		return fornecedor;

	}

    @Get('all/:unidadeid')
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ status: HttpStatus.OK, type: String })
	async getFornecedorByUnidadeId(@Param('unidadeid') unidadeid: string) {
    	const fornecedor = await this.getByUnidadeId(unidadeid);

    	return fornecedor;
  	}
    
    async searchAll(result: string, unidadeid: string) {
        const search = await this.fornecedorRepository.findSearch(result, unidadeid);
        return search;
    }
}