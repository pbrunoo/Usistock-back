export interface Pedido {
    id?: string;
    data: Date;
    unidadeId: string;
    pedido: string;
    descricao: string;
    statusPedido: string;
    status: number;
    userCreated: string;
    createAt: Date;
}