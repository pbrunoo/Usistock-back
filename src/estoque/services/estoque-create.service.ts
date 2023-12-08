import { BadRequestException, Injectable } from "@nestjs/common";
import { EstoqueRepository } from "../repositories/estoque.repository";
import { NewEstoqueRequest } from "../requests/new-estoque.request";

@Injectable()
export class CreateEstoqueService {
    constructor(private estoqueRepository: EstoqueRepository) {}

    async create(newEstoqueRequest: NewEstoqueRequest) {
        try{
            const estoque = await this.estoqueRepository.find({
                where: {
                    produto: newEstoqueRequest.produto
                }
            });

            if(estoque.length > 0) {
                throw new BadRequestException('Esse produto já existe.');
            }
            console.log(estoque);
            return this.estoqueRepository.save(newEstoqueRequest);

        }catch (e) {
            let errorMessage = e.message;
            if(e?.code === 11000) errorMessage = "Dupblicated Index";
            throw new BadRequestException(errorMessage);
        }
    }
}