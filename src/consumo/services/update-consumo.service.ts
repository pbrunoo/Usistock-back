import { Injectable } from "@nestjs/common";
import { ConsumoRepository } from "../repositories/consumo.repository";
import { UpdateConsumoRequest } from "../requests/update-request";


@Injectable()
export class UpdateConsumoService {
    constructor(
        private consumoRepository: ConsumoRepository
    ){}

    async update(produtoId: string, updateConsumoRequest: UpdateConsumoRequest) {
        try {   
            return await this.consumoRepository.update(produtoId, updateConsumoRequest)
        }catch (e) {
            throw e;
        }
    }
}