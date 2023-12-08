import { User } from "../entities/abstractions/user";
export declare class NewUserRequest {
    private user;
    constructor(user: User);
    login: User['login'];
    senha: User['senha'];
    email: User['email'];
    nome: User['nome'];
    sexo: User['sexo'];
    dataNascimento: User['dataNascimento'];
    telefone: User['telefone'];
    endereco: User['endereco'];
    bairro: User['bairro'];
    cidade: User['cidade'];
    cep: User['cep'];
    nivelAcesso: User['nivelAcesso'];
    unidadeId: User['unidadeId'];
    status: User['status'];
}
