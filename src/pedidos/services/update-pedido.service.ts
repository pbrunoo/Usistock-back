import { Injectable } from "@nestjs/common";
import { UpdatePedidoRequest } from "../requets/update-pedido.resquest";
import { PedidoRepository } from "../respositories/pedido.repository";

@Injectable()
export class UpdatePedidoService {
    constructor(private pedidoRepository: PedidoRepository) {}

    async update(pedidoId: string, updatePedidoRequest: UpdatePedidoRequest) {
        try {
            return await this.pedidoRepository.update(pedidoId, updatePedidoRequest);
        }catch (e) {
            throw e;
        }
    }

}