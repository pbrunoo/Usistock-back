import { ConsumoRepository } from "../repositories/consumo.repository";
import { NewConsumoRequest } from "../requests/new-consumo";
export declare class CreateConsumoService {
    private consumoRepository;
    constructor(consumoRepository: ConsumoRepository);
    create(newConsumoRequest: NewConsumoRequest): Promise<NewConsumoRequest & import("../entities/consumo.entity").ConsumoEntity>;
}
