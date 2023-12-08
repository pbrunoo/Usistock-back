import { Injectable } from "@nestjs/common";
import { ConsumoRepository } from "src/consumo/repositories/consumo.repository";

@Injectable()
export class ValidationControllersReaderService {
    constructor(private consumoRepository: ConsumoRepository) { }

    async getAllValidationControllers(produtoId: string) {
        const consumo = await this.consumoRepository.findOne(produtoId);

        return consumo.validationControllers;
    }
}