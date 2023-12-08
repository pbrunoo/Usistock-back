import { Injectable } from "@nestjs/common";
import { EmpresaRepository } from "../repositories/empresa.respository";
import { UpdateEmpresaRequest } from "../requests/update-empresa.request";


@Injectable()
export class UpdateEmpresaService {
    constructor(
        private empresaRepository: EmpresaRepository
    ){}

    async update(empresaId: string, updateEmpresaRequest: UpdateEmpresaRequest) {
        try {   
            return await this.empresaRepository.update(empresaId, updateEmpresaRequest);
        }catch (e) {
            throw e;
        }
    }
}