import { BadRequestException, Injectable } from "@nestjs/common";
import { NewOrcamentoRequest } from "../requests/new-orcamento-request";
import { OrcamentoRepository } from "../respositories/orcamento.repository";

@Injectable()
export class CreateOrcamentoService {
    constructor(private orcamentoRepository: OrcamentoRepository) { }

    async create(newOrcamentoRequest: NewOrcamentoRequest) {
        try{
            const orcamento = await this.orcamentoRepository.find({
                where: {
                    data: newOrcamentoRequest.data,
                    statusPedido: newOrcamentoRequest.statusPedido
                }
            });

            if(orcamento.length > 0) {
                throw new BadRequestException('Esse orçamento já existe.');
            }
            return this.orcamentoRepository.save(newOrcamentoRequest);
        }catch (e) {
            let errorMessage = e.message;
            if(e?.code === 11000) errorMessage = "Dupblicated Index";
            throw new BadRequestException(errorMessage);
        }
    }
}