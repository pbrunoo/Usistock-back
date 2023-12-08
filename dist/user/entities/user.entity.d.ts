import { User } from './abstractions/user';
export declare class UserEntity implements User {
    id: User['id'];
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
    foto: User['foto'];
    status: User['status'];
    hashPassword(): Promise<void>;
    validatePassword(senha: string): Promise<boolean>;
}
