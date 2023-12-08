import { ConsumoRepository } from "src/consumo/repositories/consumo.repository";
export declare class ValidationControllersReaderService {
    private consumoRepository;
    constructor(consumoRepository: ConsumoRepository);
    getAllValidationControllers(produtoId: string): Promise<import("../../entities/agreggate/validation-controllers").ValidationControllers[]>;
}
