import { Injectable } from "@nestjs/common";
import { FornecedorRepository } from "src/fornecedor/repositories/fornecedor.repository";


@Injectable()
export class ValidationControllersEraserService {
    constructor(private fornecedorRepository: FornecedorRepository){ }

    async erase(fornecedorId: string, userCreated: number) {
        const fornecedor = await this.fornecedorRepository.findOne(fornecedorId);
        fornecedor.deleteValidationControllers(userCreated);
        
        await this.fornecedorRepository.save(fornecedor);
    }
}