import { ConsumoRepository } from "../repositories/consumo.repository";
import { UpdateConsumoRequest } from "../requests/update-request";
export declare class UpdateConsumoService {
    private consumoRepository;
    constructor(consumoRepository: ConsumoRepository);
    update(produtoId: string, updateConsumoRequest: UpdateConsumoRequest): Promise<import("typeorm").UpdateResult>;
}
