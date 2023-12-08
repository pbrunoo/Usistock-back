import { ClienteRepository } from "../repositories/cliente.repository";
export declare class ClienteEraserService {
    private clienteRepository;
    constructor(clienteRepository: ClienteRepository);
    delete(id: string, userId: string): Promise<void>;
}
