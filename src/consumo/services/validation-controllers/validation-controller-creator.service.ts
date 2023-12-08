import { Injectable } from "@nestjs/common";
import { ValidationControllers } from "src/consumo/entities/agreggate/validation-controllers";
import { ConsumoRepository } from "src/consumo/repositories/consumo.repository";
import { NewValidationControllersRequest } from "src/consumo/requests/validation-controllers/validation-controllers.request";


@Injectable()
export class ValidationControllerCreatorService {
    constructor(private consumoRepostoriy: ConsumoRepository) {}

    async create(produtoId: string, newValidationControllers: NewValidationControllersRequest) {
        const consumo = await this.consumoRepostoriy.findOne(produtoId);

        const validationConsumoControllerIndex =
        consumo.validationControllers
        .findIndex(validationControllers => validationControllers.userCreated === newValidationControllers.userCreated);

    if(validationConsumoControllerIndex !== -1) {
        const validationControllers = new ValidationControllers({
            userCreated: newValidationControllers.userCreated,
            userUpdated: newValidationControllers.userUpdated,
            createAt: newValidationControllers.createAt,
            updateAt: newValidationControllers.updateAt
        });
        
        consumo.addValidationControllers(validationControllers);
        await this.consumoRepostoriy.save(consumo);
        return consumo;

    }
    }

}