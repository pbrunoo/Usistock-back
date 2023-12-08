import { Injectable } from "@nestjs/common";
import { ValidationControllers } from "src/fornecedor/entities/agreggate/validation-controllers";
import { FornecedorRepository } from "src/fornecedor/repositories/fornecedor.repository";
import { NewValidationControllersRequest } from "src/fornecedor/requests/validation-cotrollers/validation-controllers.request";


@Injectable()
export class ValidationControllerCreatorService {
    constructor(private fornecedorRepostoriy: FornecedorRepository) {}

    async create(fornecedorId: string, newValidationControllers: NewValidationControllersRequest) {
        const fornecedor = await this.fornecedorRepostoriy.findOne(fornecedorId);

        const validationFornecedorControllerIndex =
        fornecedor.validationControllers
        .findIndex(validationControllers => validationControllers.userCreated === newValidationControllers.userCreated);

    if(validationFornecedorControllerIndex !== -1) {
        const validationControllers = new ValidationControllers({
            userCreated: newValidationControllers.userCreated,
            userUpdated: newValidationControllers.userUpdated,
            createAt: newValidationControllers.createAt,
            updateAt: newValidationControllers.updateAt
        });
        
        fornecedor.addValidationControllers(validationControllers);
        await this.fornecedorRepostoriy.save(fornecedor);
        return fornecedor;

    }
    }
}