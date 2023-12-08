import { FuncionarioRepository } from "src/funcionario/repositories/funcionario.repository";
export declare class FuncionarioEraserService {
    private funcionarioRepository;
    constructor(funcionarioRepository: FuncionarioRepository);
    delete(id: string, userId: string): Promise<void>;
}
