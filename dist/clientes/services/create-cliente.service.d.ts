import { ClienteEntity } from "../entities/cliente.entity";
import { ClienteRepository } from "../repositories/cliente.repository";
import { NewClienteRequest } from "../requests/new-clientes";
export declare class CreateClienteService {
    private clienteRepository;
    constructor(clienteRepository: ClienteRepository);
    create(newClienteRequest: NewClienteRequest): Promise<NewClienteRequest & ClienteEntity>;
}
