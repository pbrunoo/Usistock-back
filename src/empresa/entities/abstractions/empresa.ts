export interface Empresa {
    id?: string;
    cnpj: string;
    inscrEstadual: number;
    razaoSocial: string;
    nomeFantasia: string;
    cep: string;
    endereco: string;
    complemento: string;
    numero: number;
    bairro: string;
    cidade: string;
    uf: string;
    telefone: string;
    email: string;
    status: number;
    pis: number;
    cofins: number;
    iss: number;
    inss: number;
    irrf: number;
    csll: number;
    userCreated: string;
    userUpdated: string;
    createAt: Date;
    updateAt: Date;
}