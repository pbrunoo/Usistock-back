import { BadRequestException, Injectable } from "@nestjs/common";
import { ValidationParameters } from "src/clientes/entities/agreggate/validation-parameters";
import { ClienteRepository } from "src/clientes/repositories/cliente.repository";
import { NewValidationParametersRequest } from "src/clientes/requests/validation-parameters/validation-parameters.request";

@Injectable()
export class ValidationParametersCreatorService {
    constructor(private clienteRepository: ClienteRepository){ }

    async create(clienteId: string, newValidationParameters: NewValidationParametersRequest) {
        const cliente = await this.clienteRepository.findOne(clienteId);

        const validationParameterIndex =
            cliente.validationParameters
                .findIndex(validationParameters => validationParameters.userCreated === newValidationParameters.userCreated);
        
        if (validationParameterIndex !== -1) {
            throw new BadRequestException(`This analysis object already exists for this profile.`)
        }

        const validationParameters = new ValidationParameters({
            userCreated: newValidationParameters.userCreated,
            userUpdated: newValidationParameters.userUpdated,
            createdAt: newValidationParameters.createdAt,
            updateAt: newValidationParameters.updateAt
        });

        cliente.addValidationParameters(validationParameters);
        await this.clienteRepository.save(cliente);
        return cliente;
    }
}