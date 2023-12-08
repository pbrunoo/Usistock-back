import { Empresa } from "../entities/abstractions/empresa";
export declare class NewEmpresaRequest {
    cnpj: Empresa['cnpj'];
    inscrEstadual: Empresa['inscrEstadual'];
    razaoSocial: Empresa['razaoSocial'];
    nomeFantasia: Empresa['nomeFantasia'];
    cep: Empresa['cep'];
    endereco: Empresa['endereco'];
    complemento: Empresa['complemento'];
    numero: Empresa['numero'];
    bairro: Empresa['bairro'];
    cidade: Empresa['cidade'];
    uf: Empresa['uf'];
    telefone: Empresa['telefone'];
    email: Empresa['email'];
    status: Empresa['status'];
    userCreated: Empresa['userCreated'];
    createAt: Empresa['createAt'];
}
