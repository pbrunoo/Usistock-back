import { Orcamento } from "../entities/abstractions/orcamento";
export declare class NewOrcamentoRequest {
    data: Orcamento['data'];
    unidadeId: Orcamento['unidadeId'];
    clienteId: Orcamento['clienteId'];
    statusPedido: Orcamento['statusPedido'];
    condicaoPagamento: Orcamento['condicaoPagamento'];
    prazoPagamento: Orcamento['prazoPagamento'];
    status: Orcamento['status'];
    createAt: Orcamento['createAt'];
    userCreated: Orcamento['userCreated'];
}
