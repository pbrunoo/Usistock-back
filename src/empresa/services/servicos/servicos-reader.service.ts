import { Injectable } from "@nestjs/common";
import { EmpresaRepository } from "../../repositories/empresa.respository";

@Injectable()
export class ServicosReaderService {
    constructor(private empresaRepository: EmpresaRepository) {  }
    async getAllServicos(empresaId: string) {
        const empresa = await this.empresaRepository.findOne(empresaId);

        return empresa.servicos;
    }
}
