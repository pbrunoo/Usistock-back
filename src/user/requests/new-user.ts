import { IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { User } from "../entities/abstractions/user";


export class NewUserRequest {

   constructor(private user: User) { }
   
    @IsNotEmpty()
    @Type(() => String)
    login: User['login'];

    @IsNotEmpty()
    @Type(() => String)
    senha: User['senha'];

    @IsNotEmpty()
    @Type(() => String)
    email: User['email'];

    @IsNotEmpty()
    @Type(() => String)
    nome: User['nome'];

    @IsNotEmpty()
    @Type(() => String)
    sexo: User['sexo'];

    @IsNotEmpty()
    @Type(() => Date)
    dataNascimento: User['dataNascimento'];

    @IsNotEmpty()
    @Type(() => String)
    telefone: User['telefone'];

    @IsNotEmpty()
    @Type(() => String)
    endereco: User['endereco'];

    @IsNotEmpty()
    @Type(() => String)
    bairro: User['bairro'];

    @IsNotEmpty()
    @Type(() => String)
    cidade: User['cidade'];

    @IsNotEmpty()
    @Type(() => String)
    cep: User['cep'];

    @IsNotEmpty()
    nivelAcesso: User['nivelAcesso'];

    @IsNotEmpty()
    @Type(() => String)
    unidadeId: User['unidadeId'];

    @IsNotEmpty()
    @Type(() => Number)
    status: User['status'];
}