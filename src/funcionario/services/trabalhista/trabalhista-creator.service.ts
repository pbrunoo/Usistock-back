import { Injectable } from "@nestjs/common";
import { Trabalhista } from "src/funcionario/entities/agreggate/trabalhista";
import { FuncionarioRepository } from "src/funcionario/repositories/funcionario.repository";
import { TrabalhistaRequest } from "src/funcionario/requests/trabalhista/trabalhista.request";

@Injectable()
export class TrabalhistaCreatorService {
    constructor(private funcionarioRepository: FuncionarioRepository) { }

    async create(funcionarioId: string, newTrabalhista: TrabalhistaRequest ) {
        const funcionario = await this.funcionarioRepository.findOne(funcionarioId);

        const trabalhistaIndex =
            funcionario.trabalhista
            .findIndex(trabalhistas => trabalhistas.pis === newTrabalhista.pis);

        if(trabalhistaIndex !== -1) {
            const trabalhista = new Trabalhista({
                pis: newTrabalhista.pis,
                dataAdmissao: newTrabalhista.dataAdmissao,
                salarioAdmissao: newTrabalhista.salarioAdmissao,
                salarioAtual: newTrabalhista.salarioAtual,
                funcao: newTrabalhista.funcao,
                empresa: newTrabalhista.empresa,
                empresaAnterior: newTrabalhista.empresaAnterior

            });

            funcionario.addTrabalhista(trabalhista);
            await this.funcionarioRepository.save(funcionario);
            return funcionario;
        }
    }
}