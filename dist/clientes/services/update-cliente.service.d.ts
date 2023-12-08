import { ClienteRepository } from "../repositories/cliente.repository";
import { UpdateClienteRequest } from "../requests/update-cliente";
export declare class UpdateClienteService {
    private clienteRepository;
    constructor(clienteRepository: ClienteRepository);
    update(clienteId: string, updateClienteRequest: UpdateClienteRequest): Promise<import("typeorm").UpdateResult>;
}
