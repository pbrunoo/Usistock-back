import { BadRequestException, Injectable } from "@nestjs/common";
import { FuncionarioRepository } from "../repositories/funcionario.repository";
import { NewFuncionarioRequest } from "../requests/new-funcionario.request";

@Injectable()
export class CreateFuncionarioService {
    constructor( private funcionarioRepository: FuncionarioRepository) { }

    async create(newFuncionarioRequest: NewFuncionarioRequest) {
        try {
            const funcionario = await this.funcionarioRepository.find({
                nomeCompleto: newFuncionarioRequest.nomeCompleto
            });

            if (funcionario.length > 0) {
                throw new BadRequestException('Esse Funcionário já existe.');
            }

            return this.funcionarioRepository.save(newFuncionarioRequest);

        }catch (e) {
            let errorMessage = e.message;
            if(e?.code === 11000) errorMessage = "Dupblicated Index";
            throw new BadRequestException(errorMessage);
            
        }
    }
}