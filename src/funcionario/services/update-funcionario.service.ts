import { Injectable } from "@nestjs/common";
import { FuncionarioRepository } from "../repositories/funcionario.repository";
import { UpdateFuncionarioRequest } from "../requests/update-funcionario.request";

@Injectable()
export class UpdateFuncionarioService {
    constructor(private funcionarioRepository: FuncionarioRepository) { }

    async update(funcionarioId: string, updateFuncionarioRequest: UpdateFuncionarioRequest) {
        try{
            return await this.funcionarioRepository.update(funcionarioId, updateFuncionarioRequest);
        }catch (e) {
            throw e;
        }
    }
}