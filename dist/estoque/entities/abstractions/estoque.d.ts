export interface Estoque {
    id?: string;
    produto: string;
    unidadeId: string;
    status: number;
    estoqueDisponivel: number;
    vlTotal: string;
    userCreated: string;
    createAt: Date;
}
