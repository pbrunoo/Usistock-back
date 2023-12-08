import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Funcionario } from "../entities/abstractions/funcionario";

export class NewFuncionarioRequest {
    @IsNotEmpty()
    @Type(() => String)
    nomeCompleto: Funcionario['nomeCompleto'];

    @IsNotEmpty()
    @Type(() => String)
    rg: Funcionario['rg'];

    @IsNotEmpty()
    @Type(() => Number)
    cpf: Funcionario['cpf'];

    @IsNotEmpty()
    @Type(() => String)
    estadoCivil: Funcionario['estadoCivil'];

    @IsNotEmpty()
    @Type(() => String)
    sexo: Funcionario['sexo'];

    @IsNotEmpty()
    @Type(() => Date)
    dataNascimento: Funcionario['dataNascimento'];

    @IsNotEmpty()
    @Type(() => Number)
    filial: Funcionario['filial'];

    @IsNotEmpty()
    @Type(() => String)
    endereco: Funcionario['endereco'];

    @IsNotEmpty()
    @Type(() => String)
    bairro: Funcionario['bairro'];

    @IsNotEmpty()
    @Type(() => String)
    cidade: Funcionario['cidade'];

    @IsNotEmpty()
    @Type(() => String)
    cep: Funcionario['cep'];

    @IsNotEmpty()
    @Type(() => String)
    uf: Funcionario['uf'];

    @IsNotEmpty()
    @Type(() => String)
    telefone: Funcionario['telefone'];

    @IsNotEmpty()
    @Type(() => String)
    email: Funcionario['email'];

    @IsNotEmpty()
    @Type(() => String)
    escolaridade: Funcionario['escolaridade'];

    @IsNotEmpty()
    @Type(() => Number)
    status: Funcionario['status'];

}