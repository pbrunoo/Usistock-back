import { Injectable } from "@nestjs/common";
import { FornecedorRepository } from "src/fornecedor/repositories/fornecedor.repository";


@Injectable()
export class ValidationControllersReaderService {
    constructor(private fornecedorRepository: FornecedorRepository) {}

    async getAllValidationControllers(fornecedorId: string) {
        const fornecedor = await this.fornecedorRepository.findOne(fornecedorId);

        return fornecedor.validationControllers;
    }
}