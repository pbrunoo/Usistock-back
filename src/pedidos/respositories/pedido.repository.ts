import { ObjectId } from "bson";
import { EntityRepository, Repository } from "typeorm";
import { ItensPedido } from "../entities/agreggates/itens-pedido";
import { PedidoEntity } from "../entities/pedido.entity";

@EntityRepository(PedidoEntity)
export class PedidoRepository extends Repository<PedidoEntity> {
    async getAll() {
        const pedido = await this.find({});

        return pedido;
    }

    async getPedidoByUnidadeId(unidadeId: string) {
        const pedido = await this.find({
            where: {
                unidadeId: unidadeId.toString(),
                status: 1
            }
        });

        return pedido;
    }

    async getPedido(id: string) {
        return this.findOne({
            where: {
                id: id
            }
        });
    }

    findByItensPedidoId(pedidoId: string) {
        return this.findOne({
            where: {
                "itensPedido": new ObjectId(pedidoId)
            }
        });
    }

    async updateItensPedido(ItensPedido: ItensPedido) {
        const pedidoId = ItensPedido.id.toHexString();

        const pedido = await this.findByItensPedidoId(pedidoId);
        pedido.updateItensPedido(pedidoId, ItensPedido);
        await this.save(pedido);
    }
}