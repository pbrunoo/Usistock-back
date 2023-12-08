import { Injectable } from "@nestjs/common";
import { FuncionarioRepository } from "src/funcionario/repositories/funcionario.repository";

@Injectable()
export class TrabalhistaEraserService {
    constructor(private funcionarioRepository: FuncionarioRepository) {     }

        async erase(funcionarioId: string, pis: number) {
            const funcionario = await this.funcionarioRepository.findOne(funcionarioId);

            funcionario.deleteTrabalhista(pis);

            await this.funcionarioRepository.save(funcionario);
        }
}