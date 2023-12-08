import { IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { Empresa } from "../entities/abstractions/empresa";

export class UpdateEmpresaRequest {
    @IsNotEmpty()
    @Type(() => String)
    cnpj: Empresa['cnpj'];

    @IsNotEmpty()
    @Type(() => Number)
    inscrEstadual: Empresa['inscrEstadual'];

    @IsNotEmpty()
    @Type(() => String)
    razaoSocial: Empresa['razaoSocial'];

    @IsNotEmpty()
    @Type(() => String)
    nomeFantasia: Empresa['nomeFantasia'];

    @IsNotEmpty()
    @Type(() => String)
    cep: Empresa['cep'];

    @IsNotEmpty()
    @Type(() => String)
    endereco: Empresa['endereco'];

    @IsNotEmpty()
    @Type(() => String)
    complemento: Empresa['complemento'];

    @IsNotEmpty()
    @Type(() => Number)
    numero: Empresa['numero'];

    @IsNotEmpty()
    @Type(() => String)
    bairro: Empresa['bairro'];

    @IsNotEmpty()
    @Type(() => String)
    cidade: Empresa['cidade'];

    @IsNotEmpty()
    @Type(() => String)
    uf: Empresa['uf'];

    @IsNotEmpty()
    @Type(() => String)
    telefone: Empresa['telefone'];

    @IsNotEmpty()
    @Type(() => String)
    email: Empresa['email'];

    @IsNotEmpty()
    @Type(() => Number)
    status: Empresa['status'];

    @IsNotEmpty()
    @Type(() => String)
    userCreated: Empresa['userCreated'];

    @IsNotEmpty()
    @Type(() => String)
    userUpdated: Empresa['userUpdated'];

    @IsNotEmpty()
    @Type(() => Date)
    createAt: Empresa['createAt'];

    @IsNotEmpty()
    @Type(() => Date)
    updateAt: Empresa['updateAt'];

}