import { Injectable } from "@nestjs/common";
import { FornecedorRepository } from "src/fornecedor/repositories/fornecedor.repository";
import { UpdateFornecedorRequest } from "../requests/update-request"


@Injectable()
export class UpdateFornecedorService {
    constructor(
        private fornecedorRepository: FornecedorRepository
    ){}

    async update(fornecedorId: string, updateFornecedorRequest: UpdateFornecedorRequest) {
        try {   
            return await this.fornecedorRepository.update(fornecedorId, updateFornecedorRequest)
        }catch (e) {
            throw e;
        }
    }
}