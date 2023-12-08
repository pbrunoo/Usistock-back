import { ClienteEntity } from '../entities/cliente.entity';
import { NewClienteRequest } from '../requests/new-clientes';
import { UpdateClienteService } from '../services/update-cliente.service';
import { ClienteEraserService } from '../services/cliente-eraser.service';
import { ClienteFinderService } from '../services/cliente-finder.service';
import { UpdateClienteRequest } from '../requests/update-cliente';
import { CreateClienteService } from '../services/create-cliente.service';
export declare class ClienteController {
    private createClienteService;
    private updateClienteService;
    private clienteEraserService;
    private clienteFinderService;
    constructor(createClienteService: CreateClienteService, updateClienteService: UpdateClienteService, clienteEraserService: ClienteEraserService, clienteFinderService: ClienteFinderService);
    create(NewClienteRequest: NewClienteRequest): Promise<NewClienteRequest & ClienteEntity>;
    update(id: string, UpdateClienteRequest: UpdateClienteRequest): Promise<void>;
    getAll(): Promise<ClienteEntity[]>;
    getByCostumerName(razaoSocial: string): Promise<string>;
    getByClienteId(id: string): Promise<ClienteEntity>;
    getUsersByUnidadeId(unidadeid: string): Promise<ClienteEntity[]>;
    getSearch(search: string, unidadeid: string): Promise<ClienteEntity[]>;
    delete(id: string, userId: string): Promise<void>;
}
