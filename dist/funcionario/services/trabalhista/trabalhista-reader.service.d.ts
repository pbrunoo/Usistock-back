import { FuncionarioRepository } from "src/funcionario/repositories/funcionario.repository";
export declare class TrabalhistaReaderService {
    private funcionarioRepository;
    constructor(funcionarioRepository: FuncionarioRepository);
    getAllTrabalhista(funcionarioId: string): Promise<import("../../entities/agreggate/trabalhista").Trabalhista[]>;
}
