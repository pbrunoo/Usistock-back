import { ConsumoRepository } from "src/consumo/repositories/consumo.repository";
import { NewValidationControllersRequest } from "src/consumo/requests/validation-controllers/validation-controllers.request";
export declare class ValidationControllerCreatorService {
    private consumoRepostoriy;
    constructor(consumoRepostoriy: ConsumoRepository);
    create(produtoId: string, newValidationControllers: NewValidationControllersRequest): Promise<import("../../entities/consumo.entity").ConsumoEntity>;
}
