import { IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { Cliente } from '../entities/abstractions/cliente';

export class UpdateClienteRequest {
    @IsNotEmpty()
    @Type(() => String)
    cpfCnpj: Cliente['cpfCnpj'];

    @IsNotEmpty()
    @Type(() => Number)
    inscEstadual: Cliente['inscEstadual'];

    @IsNotEmpty()
    @Type(() => String)
    razaoSocial: Cliente['razaoSocial'];

    @IsNotEmpty()
    @Type(() => String)
    nomeFantasia: Cliente['nomeFantasia'];

    @IsNotEmpty()
    @Type(() => String)
    cep: Cliente['cep'];

    @IsNotEmpty()
    @Type(() => String)
    endereco: Cliente['endereco'];

    @IsNotEmpty()
    @Type(() => String)
    complemento: Cliente['complemento'];

    @IsNotEmpty()
    @Type(() => Number)
    numero: Cliente['numero'];

    @IsNotEmpty()
    @Type(() => String)
    bairro: Cliente['bairro'];

    @IsNotEmpty()
    @Type(() => String)
    cidade: Cliente['cidade'];

    @IsNotEmpty()
    @Type(() => String)
    uf: Cliente['uf'];

    @IsNotEmpty()
    @Type(() => String)
    telefone: Cliente['telefone'];

    @IsNotEmpty()
    @Type(() => String)
    email: Cliente['email'];

    @IsNotEmpty()
    @Type(() => String)
    unidadeId: Cliente['unidadeId'];

    @IsNotEmpty()
    @Type(() => String)
    status: Cliente['status'];

    
}