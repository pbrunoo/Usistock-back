import { Injectable } from '@nestjs/common';
import { ClienteRepository } from 'src/clientes/repositories/cliente.repository';

@Injectable()
export class ValidationParametersReaderService {
    constructor(private clienteRepository: ClienteRepository) { }

    async getAllValidationParameters(clienteId: string) {
        const cliente = await this.clienteRepository.findOne(clienteId);

        return cliente.validationParameters;
    }
}


