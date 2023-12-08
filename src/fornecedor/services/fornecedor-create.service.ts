import { BadRequestException, Injectable } from "@nestjs/common";
import { FornecedorRepository } from "../repositories/fornecedor.repository";
import { NewFornecedorRequest } from "../requests/new-fornecedor";

@Injectable()
export class CreateFornecedorService {
    constructor(
        private fornecedorRepository: FornecedorRepository,
    ) { }

    async create(newFornecedorRequest: NewFornecedorRequest) {
        try {
            const fornecedor = await this.fornecedorRepository.find({
                where: {
                    razaoSocial: newFornecedorRequest.razaoSocial
                }
            })
            if (fornecedor.length > 0) {
                throw new BadRequestException('Esse Fornecedor já existe.');
            }

            return this.fornecedorRepository.save(newFornecedorRequest);

        }catch (e) {
            let errorMessage = e.message;
            if(e?.code === 11000) errorMessage = "Dupblicated Index";
            throw new BadRequestException(errorMessage);
        }
    }
}
