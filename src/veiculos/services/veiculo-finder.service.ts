import { Get, HttpCode, HttpStatus, Injectable, Param } from "@nestjs/common";
import { VeiculoRepository } from "../repositories/veiculo.repository";
import { ApiResponse } from "@nestjs/swagger";

@Injectable()
export class VeiculoFinderService  {
    find(arg0: { where: { status: number; }; }) {
        throw new Error("Method not implemented.");
    }
    constructor(
        private veiculoRepository: VeiculoRepository
    ) { }

    async getAll() {
        const veiculos = await this.veiculoRepository.getAll();
        return veiculos;
    }

    async getById(id: string) {
        const veiculos = await this.veiculoRepository.findOne(id);
        return veiculos;
    }

    async getByUnidadeId(id: string) {
        const veiculo = await this.veiculoRepository.getVeiculoByUnidadeId(id);
        return veiculo;
    }

    async searchAll(result: string, unidadeid: string) {
        const search = await this.veiculoRepository.findSearch(result, unidadeid);
        return search;
    }

    /*@Get('all/:unidadeid')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, type: String })
    async getVeiculoByUnidadeId(@Param('unidadeid') unidadeid: string) {
        const veiculo = await this.getByUnidadeId(unidadeid);

        return veiculo;
    }*/

    async getByName(placa: string) {
        const veiculos = await this.veiculoRepository.find({
            placa: placa
        });

        return veiculos
    }
}
