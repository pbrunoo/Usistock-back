import { Injectable } from "@nestjs/common";
import { ClienteRepository } from "src/clientes/repositories/cliente.repository";

@Injectable()
export class ValidationParametersEraserService {
    constructor(private clienteRepository: ClienteRepository) { }

    async erase(clienteId: string, userCreated: string) {
        const cliente = await this.clienteRepository.findOne(clienteId);
        cliente.deleteValidationParameters(userCreated);

        await this.clienteRepository.save(cliente);
    }
}