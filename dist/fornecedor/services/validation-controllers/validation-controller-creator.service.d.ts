import { FornecedorRepository } from "src/fornecedor/repositories/fornecedor.repository";
import { NewValidationControllersRequest } from "src/fornecedor/requests/validation-cotrollers/validation-controllers.request";
export declare class ValidationControllerCreatorService {
    private fornecedorRepostoriy;
    constructor(fornecedorRepostoriy: FornecedorRepository);
    create(fornecedorId: string, newValidationControllers: NewValidationControllersRequest): Promise<import("../../entities/fornecedor.entity").FornecedorEntity>;
}
