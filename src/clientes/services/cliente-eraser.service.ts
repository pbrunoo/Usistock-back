import { Injectable } from "@nestjs/common";
import { ClienteRepository } from "../repositories/cliente.repository";

@Injectable()
export class ClienteEraserService {
    constructor(
        private clienteRepository: ClienteRepository
    ) { }

    async delete(id: string, userId: string) {
        const cliente = await this.clienteRepository.findOne(id);
        cliente.status = 0;
        cliente.deletedUserId = userId;
        cliente.deletedAt = new Date();
        await this.clienteRepository.save(cliente);
    }
}