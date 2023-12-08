import { Funcionario } from './abstractions/funcionario';
import { Trabalhista } from './agreggate/trabalhista';
export declare class FuncionarioEntity implements Funcionario {
    id: Funcionario['id'];
    nomeCompleto: Funcionario['nomeCompleto'];
    rg: Funcionario['rg'];
    cpf: Funcionario['cpf'];
    estadoCivil: Funcionario['estadoCivil'];
    sexo: Funcionario['sexo'];
    dataNascimento: Funcionario['dataNascimento'];
    filial: Funcionario['filial'];
    endereco: Funcionario['endereco'];
    complemento: Funcionario['complemento'];
    bairro: Funcionario['bairro'];
    cidade: Funcionario['cidade'];
    cep: Funcionario['cep'];
    uf: Funcionario['uf'];
    telefone: Funcionario['telefone'];
    email: Funcionario['email'];
    escolaridade: Funcionario['escolaridade'];
    status: Funcionario['status'];
    userCreated: Funcionario['userCreated'];
    createAt: Funcionario['createAt'];
    userUpdated: Funcionario['userUpdated'];
    updatedAt: Funcionario['updatedAt'];
    deletedAt: Date;
    deletedUserId: string;
    trabalhista: Trabalhista[];
    addTrabalhista(trabalhista: Trabalhista): void;
    deleteTrabalhista(pis: number): void;
}
