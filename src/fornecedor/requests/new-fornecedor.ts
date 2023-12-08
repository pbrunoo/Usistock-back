import { IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { Fornecedor } from "../entities/abstractions/fornecedor";

export class NewFornecedorRequest {
 
    @IsNotEmpty()
    @Type(() => String)
    cpfCnpj: Fornecedor['cpfCnpj'];

    @IsNotEmpty()
    @Type(() => String)
    razaoSocial: Fornecedor['razaoSocial'];

    @IsNotEmpty()
    @Type(() => String)
    telefone: Fornecedor['telefone'];

    @IsNotEmpty()
    @Type(() => String)
    email: Fornecedor['email'];    

    @IsNotEmpty()
    @Type(() => String)
    responsavel: Fornecedor['responsavel'];

    @IsNotEmpty()
    @Type(() => String)
    endereco: Fornecedor['endereco'];

    @IsNotEmpty()
    @Type(() => String)
    unidadeId: Fornecedor['unidadeId'];

    @IsNotEmpty()
    @Type(() => Number)
    status: Fornecedor['status'];

}
