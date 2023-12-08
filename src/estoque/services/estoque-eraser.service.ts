import { Injectable } from "@nestjs/common";
import { EstoqueRepository } from "../repositories/estoque.repository"


@Injectable()
export class EstoqueEraserService {
    constructor(private estoqueRepository: EstoqueRepository) {}

    async delete(id: string, userId: string) {
        const estoque = await this.estoqueRepository.findOne(id);
        estoque.status = 0;
        estoque.deletedUserId = userId;
        estoque.deletedAt = new Date();
        await this.estoqueRepository.save(estoque);
    }
}