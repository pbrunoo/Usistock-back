import { ClienteRepository } from "../repositories/cliente.repository";
export declare class ClienteFinderService {
    private clienteRepository;
    constructor(clienteRepository: ClienteRepository);
    getAll(): Promise<import("../entities/cliente.entity").ClienteEntity[]>;
    getById(id: string): Promise<import("../entities/cliente.entity").ClienteEntity>;
    getByUnidadeId(id: string): Promise<import("../entities/cliente.entity").ClienteEntity[]>;
    getClienteByUnidadeId(unidadeid: string): Promise<import("../entities/cliente.entity").ClienteEntity[]>;
    getByName(razaoSocial: string): Promise<string>;
    searchAll(result: string, unidadeid: string): Promise<import("../entities/cliente.entity").ClienteEntity[]>;
}
