import { ClienteRepository } from 'src/clientes/repositories/cliente.repository';
export declare class ValidationParametersReaderService {
    private clienteRepository;
    constructor(clienteRepository: ClienteRepository);
    getAllValidationParameters(clienteId: string): Promise<import("../../entities/agreggate/validation-parameters").ValidationParameters[]>;
}
