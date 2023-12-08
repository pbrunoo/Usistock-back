import { Injectable } from "@nestjs/common";
import { FuncionarioRepository } from "src/funcionario/repositories/funcionario.repository";

@Injectable()
export class TrabalhistaReaderService {
    constructor(private funcionarioRepository: FuncionarioRepository) { }

    async getAllTrabalhista(funcionarioId: string) {
        const funcionario = await this.funcionarioRepository.findOne(funcionarioId);

        return funcionario.trabalhista;
    }
}