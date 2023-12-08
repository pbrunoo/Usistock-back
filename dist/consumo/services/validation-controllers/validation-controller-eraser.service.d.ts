import { ConsumoRepository } from "src/consumo/repositories/consumo.repository";
export declare class ValidationControllersEraserService {
    private consumoRepository;
    constructor(consumoRepository: ConsumoRepository);
    erase(produtoId: string, userCreated: number): Promise<void>;
}
