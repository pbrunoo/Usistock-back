import { Consumo } from "../entities/abstractions/consumo";
export declare class UpdateConsumoRequest {
    produto: Consumo['produto'];
    unidadeId: Consumo['unidadeId'];
    fornecedor: Consumo['fornecedor'];
    status: Consumo['status'];
}
