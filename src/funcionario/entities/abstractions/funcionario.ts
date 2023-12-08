export interface Funcionario {
    id?: string;
    nomeCompleto: string;
    rg: string;
    cpf: number;
    estadoCivil: string;
    sexo: string;
    dataNascimento: Date;
    filial: number;
    endereco: string;
    complemento: string;
    bairro: string;
    cidade: string;
    cep: string;
    uf: string;
    telefone: string;
    email: string;
    escolaridade: string;
    status: number;
    userCreated: string;
    createAt: Date;
    userUpdated: string;
    updatedAt: Date;
}