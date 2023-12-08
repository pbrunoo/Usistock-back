import { BadRequestException, Injectable } from "@nestjs/common";
import { UnidadeRepository } from "../respositories/unidade.repository";
import { NewUnidadeRequest } from "../requests/new-unidade.request";

@Injectable()
export class CreateUnidadeService {
    constructor(
        private unidadeRepository: UnidadeRepository,
    ) { }

    async create(newUnidadeRequest: NewUnidadeRequest) {
        try {
            const unidade = await this.unidadeRepository.find({
                where: {
                    nomeUnidade: newUnidadeRequest.nomeUnidade
                }
            })
            if (unidade.length > 0) {
                throw new BadRequestException('Essa unidade já existe.');
            }

            return this.unidadeRepository.save(newUnidadeRequest);

        }catch (e) {
            let errorMessage = e.message;
            if(e?.code === 11000) errorMessage = "Dupblicated Index";
            throw new BadRequestException(errorMessage);
        }
    }
}
