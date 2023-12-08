import { UnidadeRepository } from "../../respositories/unidade.repository";
import { NewValidationControllersRequest } from "../../requests/validation-controllers/validation-controllers.request";
export declare class ValidationControllerCreatorService {
    private unidadeRepository;
    constructor(unidadeRepository: UnidadeRepository);
    create(unidadeId: string, newValidationControllers: NewValidationControllersRequest): Promise<import("../../entities/unidade.entity").UnidadeEntity>;
}
