import { Injectable } from "@nestjs/common";
import { UnidadeRepository } from "src/unidade/respositories/unidade.repository"


@Injectable()
export class ValidationControllersReaderService {
    constructor(private unidadeRepository: UnidadeRepository){ }
    async getAllValidationControllers(unidadeId: string) {
        const unidade = await this.unidadeRepository.findOne(unidadeId);

        return unidade.validationControllers;
    }
}