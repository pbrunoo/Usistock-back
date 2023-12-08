import { Injectable } from "@nestjs/common";
import { Servicos } from "src/empresa/entities/agreggate/servicos";
import { EmpresaRepository } from "src/empresa/repositories/empresa.respository";
import { NewServicosRequest } from "src/empresa/requests/servicos/servicos.request";

@Injectable()
export class ServicosCreatorService {
    constructor(private empresaRepository: EmpresaRepository) {}

    async create(empresaId: string, newServicosRequest: NewServicosRequest) {
        const empresa = await this.empresaRepository.findOne(empresaId);

        const servicosEmpresaIndex =
        empresa.servicos.findIndex(servicos => servicos.cnae === newServicosRequest.cnae);

        if(servicosEmpresaIndex === -1) {
            const servicos = new Servicos({
                cnae: newServicosRequest.cnae,
                itemLc: newServicosRequest.itemLc,
                ativMuni: newServicosRequest.ativMuni,
            });

            empresa.addServicos(servicos);
            await this.empresaRepository.save(empresa);
            return empresa;
        }
    }
}