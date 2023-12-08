import { Injectable } from "@nestjs/common";
import { FornecedorRepository } from "../repositories/fornecedor.repository";


@Injectable()
export class FornecedorEraserService {
    constructor(
        private fornecedorRepository: FornecedorRepository
    ) {}

    async delete(id: string, userId: string) {
        const fornecedor = await this.fornecedorRepository.findOne(id);
        fornecedor.status = 0;
        fornecedor.deletedUserId = userId;
        fornecedor.deletedAt = new Date();
        
        await this.fornecedorRepository.save(fornecedor);
    }
}