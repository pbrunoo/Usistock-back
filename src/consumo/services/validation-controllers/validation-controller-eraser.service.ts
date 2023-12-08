import { Injectable } from "@nestjs/common";
import { ConsumoRepository } from "src/consumo/repositories/consumo.repository";


@Injectable()
export class ValidationControllersEraserService {
    constructor(private consumoRepository: ConsumoRepository) { }

    async erase(produtoId: string, userCreated: number) {
        const consumo = await this.consumoRepository.findOne(produtoId);
        consumo.deleteValidationControllers(userCreated);
        
        await this.consumoRepository.save(consumo);
    }
}