import { Injectable } from "@nestjs/common";
import { VeiculoRepository } from "../repositories/veiculo.repository";
import { UpdateVeiculoRequest } from "../requests/update-veiculo";

@Injectable()

export class UpdateVeiculoService {
    constructor(
        private veiculoRepository: VeiculoRepository
    ){ }

    async update(clienteId: string, updateVeiculoRequest: UpdateVeiculoRequest) {
        try{
            return await this.veiculoRepository.update(clienteId, updateVeiculoRequest)
        }catch (e) {
            throw e;
        }
    }
}