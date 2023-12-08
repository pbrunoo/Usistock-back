import { Injectable } from "@nestjs/common";
import { ValidationControllers } from "../../entities/agreggate/validation-controllers"
import { UnidadeRepository } from "../../respositories/unidade.repository"
import { NewValidationControllersRequest } from "../../requests/validation-controllers/validation-controllers.request"

@Injectable()
export class ValidationControllerCreatorService {
    constructor(private unidadeRepository: UnidadeRepository) { }

    async create(unidadeId: string, newValidationControllers: NewValidationControllersRequest) {
        const unidade = await this.unidadeRepository.findOne(unidadeId);

        const validationUnidadeControllerIndex = 
        unidade.validationControllers
        .findIndex(validationControllers => validationControllers.userCreated === newValidationControllers.userCreated);

    if(validationUnidadeControllerIndex !== -1) {
        const validationControllers = new ValidationControllers({
            userCreated: newValidationControllers.userCreated,
            userUpdated: newValidationControllers.userUpdated,
            createAt: newValidationControllers.createAt,
            updateAt: newValidationControllers.updateAt
        });

        unidade.addValidationControllers(validationControllers);
        await this.unidadeRepository.save(unidade);
        return unidade;
    }
    }
}