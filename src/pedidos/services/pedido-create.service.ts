import { BadRequestException, Injectable } from "@nestjs/common";
import { NewPedidoRequest } from "../requets/new-pedido.request";
import { PedidoRepository } from "../respositories/pedido.repository";

@Injectable()
export class CreatePedidoService {
    constructor(private pedidoRepository: PedidoRepository) { }

    async create(newPedidoRequest: NewPedidoRequest) {
        try {
            const pedido = await this.pedidoRepository.find({
                where: {
                    produto: newPedidoRequest.pedido
                }
            });

            if(pedido.length > 0) {
                throw new BadRequestException('Esse pedido já existe.');
            }
            return this.pedidoRepository.save(newPedidoRequest);

        }catch (e) {
            let errorMessage = e.message;
            if(e?.code === 11000) errorMessage = "Dupblicated Index";
            throw new BadRequestException(errorMessage);
        }
    }
}