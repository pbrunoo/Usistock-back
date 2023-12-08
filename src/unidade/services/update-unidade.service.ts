import { Injectable } from "@nestjs/common";
import { UnidadeRepository } from "src/unidade/respositories/unidade.repository";
import { UpdateUnidadeRequest } from "src/unidade/requests/update-unidade.request";


@Injectable()
export class UpdateUnidadeService {
    constructor(
        private unidadeRepository: UnidadeRepository
    ){}

    async update(unidadeId: string, updateUnidadeRequest: UpdateUnidadeRequest) {
        try {   
            return await this.unidadeRepository.update(unidadeId, updateUnidadeRequest)
        }catch (e) {
            throw e;
        }
    }
}