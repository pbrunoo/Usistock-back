import { FuncionarioRepository } from "src/funcionario/repositories/funcionario.repository";
import { TrabalhistaRequest } from "src/funcionario/requests/trabalhista/trabalhista.request";
export declare class TrabalhistaCreatorService {
    private funcionarioRepository;
    constructor(funcionarioRepository: FuncionarioRepository);
    create(funcionarioId: string, newTrabalhista: TrabalhistaRequest): Promise<import("../../entities/funcionario.entity").FuncionarioEntity>;
}
