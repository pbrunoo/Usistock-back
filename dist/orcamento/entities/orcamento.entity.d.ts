import { ObjectID } from "bson";
import { Orcamento } from "./abstractions/orcamento";
import { Produto } from "./agreggate/produto";
export declare class OrcamentoEntity implements Orcamento {
    id: Orcamento['id'];
    data: Orcamento['data'];
    unidadeId: Orcamento['unidadeId'];
    clienteId: Orcamento['clienteId'];
    statusPedido: Orcamento['statusPedido'];
    condicaoPagamento: Orcamento['condicaoPagamento'];
    prazoPagamento: Orcamento['prazoPagamento'];
    observacao: Orcamento['observacao'];
    status: Orcamento['status'];
    createAt: Orcamento['createAt'];
    userCreated: Orcamento['userCreated'];
    deletedAt: Date;
    deletedUserId: string;
    produtos: Produto[];
    addProduto(produto: Produto): void;
    findProduto(produtoId: string): Produto;
    updateProduto(produtoId: string, produto: Produto): void;
    getProduto(): Produto[];
    deleteProduto(produtoId: string | ObjectID): void;
}
