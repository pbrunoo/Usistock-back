export interface Orcamento {
    id?: string;
    data: Date;
    unidadeId: string;
    clienteId: string;
    statusPedido: string;
    condicaoPagamento: string;
    prazoPagamento: number;
    observacao?: string;
    status: number;
    createAt: Date;
    userCreated: string;
    
}