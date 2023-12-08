import { Cliente } from './abstractions/cliente';
import { ValidationParameters } from './agreggate/validation-parameters';
export declare class ClienteEntity implements Cliente {
    id: Cliente['id'];
    cpfCnpj: Cliente['cpfCnpj'];
    inscEstadual: Cliente['inscEstadual'];
    razaoSocial: Cliente['razaoSocial'];
    nomeFantasia: Cliente['nomeFantasia'];
    cep: Cliente['cep'];
    endereco: Cliente['endereco'];
    complemento: Cliente['complemento'];
    numero: Cliente['numero'];
    bairro: Cliente['bairro'];
    cidade: Cliente['cidade'];
    uf: Cliente['uf'];
    telefone: Cliente['telefone'];
    email: Cliente['email'];
    unidadeId: Cliente['unidadeId'];
    status: Cliente['status'];
    deletedAt: Date;
    deletedUserId: string;
    validationParameters: ValidationParameters[];
    addValidationParameters(validationParameters: ValidationParameters): void;
    deleteValidationParameters(userCreated: string): void;
}
