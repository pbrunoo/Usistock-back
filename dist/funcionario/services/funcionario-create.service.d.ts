import { FuncionarioRepository } from "../repositories/funcionario.repository";
import { NewFuncionarioRequest } from "../requests/new-funcionario.request";
export declare class CreateFuncionarioService {
    private funcionarioRepository;
    constructor(funcionarioRepository: FuncionarioRepository);
    create(newFuncionarioRequest: NewFuncionarioRequest): Promise<NewFuncionarioRequest & import("../entities/funcionario.entity").FuncionarioEntity>;
}
