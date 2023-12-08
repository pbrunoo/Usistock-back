import { Injectable } from "@nestjs/common";
import { FuncionarioRepository } from "src/funcionario/repositories/funcionario.repository";

@Injectable()
export class FuncionarioEraserService {
    constructor(private funcionarioRepository: FuncionarioRepository) { }

    async delete(id: string, userId: string) {
        const funcionario = await this.funcionarioRepository.findOne(id);
        funcionario.status = 0;
        funcionario.deletedUserId = userId;
        funcionario.deletedAt = new Date();

        await this.funcionarioRepository.save(funcionario);
    }
}