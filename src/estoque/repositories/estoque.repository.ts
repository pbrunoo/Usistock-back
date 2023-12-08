import { ObjectId } from "bson";
import { EntityRepository, Repository } from "typeorm";
import { HistoricoEstoque } from "../entities/agreggate/historico-estoque";
import { EstoqueEntity } from "../entities/estoque.entity";

@EntityRepository(EstoqueEntity)
export class EstoqueRepository extends Repository<EstoqueEntity> {
    async getAll() {
        const estoque = await this.find({});

        return estoque;
    }

    async getEstoqueByUnidadeId(unidadeId: string) {
        const estoque = await this.find({
            where: {
                unidadeId: unidadeId.toString(),
                status: 1
            }
        });

        return estoque;
    }

    async getEstoque(id: string) {
        return this.findOne({
            where: {
                id: id
            }
        })
    }

    findByHistoricoId(historicoId: string) {
        return this.findOne({
            where: {
                "historicoEstoque": new ObjectId(historicoId)
            }
        });
    }

    async findSearch(search: string, unidadeid: string) {
        const result = await this.find({
            where: {
                $or: [
                    { id: {$regex: search, $options: 'i'} },
                    { produto: {$regex: search, $options: 'i'} },
                    { estoqueDisponivel: {$regex: search, $options: 'i'} },
                    { vlTotal: {$regex: search, $options: 'i'} },
                ],
                status: 1
            }
        });
        return result;
    }

    async updateHistoricoEstoque(historicoEstoque: HistoricoEstoque) {
        const historicoID = historicoEstoque.id.toHexString();

        const estoque = await this.findByHistoricoId(historicoID);
        estoque.updateHistoricoEstoque(historicoID, historicoEstoque);
        await this.save(estoque);
    }

}