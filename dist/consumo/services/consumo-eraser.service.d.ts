import { ConsumoRepository } from "../repositories/consumo.repository";
export declare class ConsumoEraserService {
    private consumoRepository;
    constructor(consumoRepository: ConsumoRepository);
    delete(id: string, userId: string): Promise<void>;
}
