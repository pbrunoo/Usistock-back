import { Cliente } from '../entities/abstractions/cliente';
export declare class UpdateClienteRequest {
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
}
