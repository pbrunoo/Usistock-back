import { Fornecedor } from "../entities/abstractions/fornecedor";
export declare class NewFornecedorRequest {
    cpfCnpj: Fornecedor['cpfCnpj'];
    razaoSocial: Fornecedor['razaoSocial'];
    telefone: Fornecedor['telefone'];
    email: Fornecedor['email'];
    responsavel: Fornecedor['responsavel'];
    endereco: Fornecedor['endereco'];
    unidadeId: Fornecedor['unidadeId'];
    status: Fornecedor['status'];
}
