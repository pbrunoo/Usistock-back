import { Injectable } from "@nestjs/common";
import { UnidadeRepository } from "src/unidade/respositories/unidade.repository";


@Injectable()
export class ValidationControllersEraserService {
    constructor(private unidadeRepository: UnidadeRepository) { }

    async erase(unidadeId: string, userCreated: string) {
        const unidade = await this.unidadeRepository.findOne(unidadeId);
        unidade.deleteValidationControllers(userCreated);

        await this.unidadeRepository.save(unidade);
    }
}