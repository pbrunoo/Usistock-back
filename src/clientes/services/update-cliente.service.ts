import { Injectable } from "@nestjs/common";
import { ClienteRepository } from "../repositories/cliente.repository";
import { UpdateClienteRequest } from "../requests/update-cliente";

@Injectable()

export class UpdateClienteService {
    constructor(
        private clienteRepository: ClienteRepository,
    ) { }

    async update(clienteId: string, updateClienteRequest: UpdateClienteRequest) {
        try{
            return await this.clienteRepository.update(clienteId, updateClienteRequest)
        }catch (e) {
            throw e;
        }
    }
} 