import { FuncionarioRepository } from "../repositories/funcionario.repository";
import { UpdateFuncionarioRequest } from "../requests/update-funcionario.request";
export declare class UpdateFuncionarioService {
    private funcionarioRepository;
    constructor(funcionarioRepository: FuncionarioRepository);
    update(funcionarioId: string, updateFuncionarioRequest: UpdateFuncionarioRequest): Promise<import("typeorm").UpdateResult>;
}
