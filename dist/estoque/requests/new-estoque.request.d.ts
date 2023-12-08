import { Estoque } from "../entities/abstractions/estoque";
export declare class NewEstoqueRequest {
    produto: Estoque['produto'];
    unidadeId: Estoque['unidadeId'];
    status: Estoque['status'];
    createAt: Estoque['createAt'];
    userCreated: Estoque['userCreated'];
}
