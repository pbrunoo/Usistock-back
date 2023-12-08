import { ClienteRepository } from "src/clientes/repositories/cliente.repository";
export declare class ValidationParametersEraserService {
    private clienteRepository;
    constructor(clienteRepository: ClienteRepository);
    erase(clienteId: string, userCreated: string): Promise<void>;
}
