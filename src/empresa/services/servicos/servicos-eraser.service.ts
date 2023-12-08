import { Injectable } from "@nestjs/common";
import { EmpresaRepository } from "src/empresa/repositories/empresa.respository";


@Injectable()
export class ServicosEraserService {
    constructor(private empresaRepository: EmpresaRepository) { }
    async erase(empresaId: string, cnae: number) {
        const empresa = await this.empresaRepository.findOne(empresaId);
        empresa.deleteServicos(cnae);
        empresa.servicos = [];
        await this.empresaRepository.save(empresa);
    }
}