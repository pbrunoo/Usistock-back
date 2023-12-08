import { BadRequestException, Injectable } from "@nestjs/common";
import { ConsumoRepository } from "../repositories/consumo.repository";
import { NewConsumoRequest } from "../requests/new-consumo";

@Injectable()
export class CreateConsumoService {
    constructor(
        private consumoRepository: ConsumoRepository
    ) { }

    async create(newConsumoRequest: NewConsumoRequest) {
        try{
            const consumo = await this.consumoRepository.find({
                where: {
                    produto: newConsumoRequest.produto
                }
            })

            if(consumo.length > 0) {
                throw new BadRequestException('Esse Produto já existe.');
            }

            return this.consumoRepository.save(newConsumoRequest);

        }catch (e) {
            let errorMessage = e.message;
            if(e?.code === 11000) errorMessage = "Dupblicated Index";
            throw new BadRequestException(errorMessage);
        }
    }
}