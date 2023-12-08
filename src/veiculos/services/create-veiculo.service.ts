import { BadRequestException, Injectable } from "@nestjs/common";
import { VeiculoRepository } from "../repositories/veiculo.repository";
import { NewVeiculoRequest } from "../requests/new-veiculo";

@Injectable()
export class CreateVeiculoService {
    constructor(
        private veiculoRepository: VeiculoRepository
    ) { }

    async create(newVeiculoRequest: NewVeiculoRequest) {
        try{
            const veiculo = await this.veiculoRepository.find({
                where: {
                    placa: newVeiculoRequest.placa
                }
            })

            if (veiculo.length > 0) {
                throw new BadRequestException('O Veículo já existe');
            }

            return this.veiculoRepository.save(newVeiculoRequest);

        } catch (e) {
            let errorMessage = e.message;
            if(e?.code === 11000) errorMessage = "Duplicated Index"

            throw new BadRequestException(errorMessage);
        }

    }
}