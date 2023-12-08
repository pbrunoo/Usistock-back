import { EmpresaRepository } from "../../repositories/empresa.respository";
import { NewValidationControllersRequest } from "../../requests/validation-controllers/validation-controllers.request";
export declare class ValidationControllerCreatorService {
    private empresaRepository;
    constructor(empresaRepository: EmpresaRepository);
    create(empresaId: string, newValidationControllers: NewValidationControllersRequest): Promise<import("../../entities/empresa.entity").EmpresaEntity>;
}
