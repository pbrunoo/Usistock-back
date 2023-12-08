import { ObjectID } from "bson";
import { Estoque } from "./abstractions/estoque";
import { HistoricoEstoque } from "./agreggate/historico-estoque";
export declare class EstoqueEntity implements Estoque {
    id: Estoque['id'];
    produto: Estoque['produto'];
    unidadeId: Estoque['unidadeId'];
    status: Estoque['status'];
    estoqueDisponivel: Estoque['estoqueDisponivel'];
    vlTotal: Estoque['vlTotal'];
    createAt: Estoque['createAt'];
    userCreated: Estoque['userCreated'];
    deletedAt: Date;
    deletedUserId: string;
    historicoEstoque: HistoricoEstoque[];
    addHistoricoEstoque(historicoEstoque: HistoricoEstoque): void;
    findHistorico(historicoId: string): HistoricoEstoque;
    updateHistoricoEstoque(historicoId: string, historico: HistoricoEstoque): void;
    getHistorico(): HistoricoEstoque[];
    deleteHistoricoEstoque(historicoId: string | ObjectID): void;
}
