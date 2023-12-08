import { ClienteRepository } from "src/clientes/repositories/cliente.repository";
import { NewValidationParametersRequest } from "src/clientes/requests/validation-parameters/validation-parameters.request";
export declare class ValidationParametersCreatorService {
    private clienteRepository;
    constructor(clienteRepository: ClienteRepository);
    create(clienteId: string, newValidationParameters: NewValidationParametersRequest): Promise<import("../../entities/cliente.entity").ClienteEntity>;
}
