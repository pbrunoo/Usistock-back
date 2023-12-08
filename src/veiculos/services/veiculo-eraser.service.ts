import { Injectable } from "@nestjs/common";
import { VeiculoRepository } from "../repositories/veiculo.repository";

@Injectable()
export class VeiculoEraserService {
    constructor(
        private veiculoRepository: VeiculoRepository
    ) { }

    async delete(id: string, userId: string) {
        const veiculo = await this.veiculoRepository.findOne(id);
        veiculo.status = 0;
        veiculo.deletedUserId = userId;
        veiculo.deletedAt = new Date();
        await this.veiculoRepository.save(veiculo);
    }
}