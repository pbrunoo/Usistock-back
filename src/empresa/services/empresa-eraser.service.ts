import { Injectable } from "@nestjs/common";
import { EmpresaRepository } from "../repositories/empresa.respository";


@Injectable()
export class EmpresaEraserService {
    constructor(
        private empresaRepository: EmpresaRepository
    ) {}

    async delete(id: string, userId: string) {
        const empresa = await this.empresaRepository.findOne(id);
        empresa.status = 0;
        empresa.deletedUserId = userId;
        empresa.deletedAt = new Date();
        await this.empresaRepository.save(empresa);
    }
}