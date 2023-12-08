import { Injectable } from "@nestjs/common";
import { ConsumoRepository } from "../repositories/consumo.repository";


@Injectable()
export class ConsumoEraserService {
    constructor(
        private consumoRepository: ConsumoRepository
    ) {}

    async delete(id: string, userId: string) {
        const consumo = await this.consumoRepository.findOne(id);
        consumo.status = 0;
        consumo.deletedUserId = userId;
        consumo.deletedAt = new Date();
        await this.consumoRepository.save(consumo);
    }
}