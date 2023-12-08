import { Injectable } from "@nestjs/common";
import { UnidadeRepository } from "../respositories/unidade.repository";


@Injectable()
export class UnidadeEraserService {
    constructor(
        private unidadeRepository: UnidadeRepository
    ) {}

    async delete(id: string, userId: string) {
        const unidade = await this.unidadeRepository.findOne(id);
        unidade.status = 0;
        unidade.deletedUserId = userId;
        unidade.deletedAt = new Date();
        await this.unidadeRepository.save(unidade);
    }
}