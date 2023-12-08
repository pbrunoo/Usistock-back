import { BadRequestException, Injectable } from "@nestjs/common";
import { ClienteEntity } from "../entities/cliente.entity";
import { ClienteRepository } from "../repositories/cliente.repository";
import { NewClienteRequest } from "../requests/new-clientes";

@Injectable()
export class CreateClienteService {
    constructor(
        private clienteRepository: ClienteRepository,
    ){ }
    
    async create(newClienteRequest: NewClienteRequest) {
        try {
            const cliente = await this.clienteRepository.find({
                where: {
                    razaoSocial: newClienteRequest.razaoSocial
                }
            })

            if (cliente.length > 0) {
                throw new BadRequestException('Esse Cliente já existe.')
            }

            return this.clienteRepository.save(newClienteRequest);

        } catch (e) {
            let errorMessage = e.message;
            if (e?.code === 11000) errorMessage = "Duplicated Index"

            throw new BadRequestException(errorMessage)
        }
    }
}