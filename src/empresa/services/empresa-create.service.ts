import { BadRequestException, Injectable } from "@nestjs/common";
import { EmpresaRepository } from "../repositories/empresa.respository";
import { NewEmpresaRequest } from "../requests/new-empresa.request";

@Injectable()
export class CreateEmpresaService {
    constructor(
        private empresaRepository: EmpresaRepository,
    ) { }

    async create(newEmpresaRequest: NewEmpresaRequest) {
        try {
            const empresa = await this.empresaRepository.find({
                where: {
                    cnpj: newEmpresaRequest.cnpj
                }
            })
            if (empresa.length > 0) {
                throw new BadRequestException('Essa empresa já existe.');
            }

            return this.empresaRepository.save(newEmpresaRequest);

        }catch (e) {
            let errorMessage = e.message;
            if(e?.code === 11000) errorMessage = "Dupblicated Index";
            throw new BadRequestException(errorMessage);
        }
    }
}
