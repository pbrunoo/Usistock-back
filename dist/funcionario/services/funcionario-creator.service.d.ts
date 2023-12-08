import { FuncionarioRepository } from "../repositories/funcionario.repository";
import { NewFuncionarioRequest } from "../repositories/new-funcionario.resquest";
export declare class CreateFuncionarioService {
    private funcionarioRepository;
    constructor(funcionarioRepository: FuncionarioRepository);
    create(newFuncionarioRequest: NewFuncionarioRequest): Promise<import("typeorm").DeepPartial<import("../entities/funcionario.entity").FuncionarioEntity>[]>;
}
