import { Consumo } from "../entities/abstractions/consumo";
export declare class NewConsumoRequest {
    produto: Consumo['produto'];
    unidadeId: Consumo['unidadeId'];
    fornecedor: Consumo['fornecedor'];
    status: Consumo['status'];
}
