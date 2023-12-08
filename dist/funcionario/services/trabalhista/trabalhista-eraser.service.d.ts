import { FuncionarioRepository } from "src/funcionario/repositories/funcionario.repository";
export declare class TrabalhistaEraserService {
    private funcionarioRepository;
    constructor(funcionarioRepository: FuncionarioRepository);
    erase(funcionarioId: string, pis: number): Promise<void>;
}
