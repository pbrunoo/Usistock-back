import { Estoque } from "../entities/abstractions/estoque";
export declare class UpdateEstoqueRequest {
    produto: Estoque['produto'];
    unidadeId: Estoque['unidadeId'];
    status: Estoque['status'];
    userUpdated: string;
    updateAt: Date;
}
