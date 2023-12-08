import { ObjectID } from "bson";
import { EntityRepository, Repository } from "typeorm";
import { Produto } from "../entities/agreggate/produto";
import { OrcamentoEntity } from "../entities/orcamento.entity";

@EntityRepository(OrcamentoEntity)
export class OrcamentoRepository extends Repository<OrcamentoEntity> {
    async getAll() {
        const orcamento = await this.find({});

        return orcamento;
    }

    async getOrcamentoByUnidadeId(unidadeId: string) {
        const orcamento = await this.find({
            where: {
                unidadeId: unidadeId.toString(),
                status: 1
            }
        });

        return orcamento;
    }

    async getOrcamento(id: string) {
        return this.findOne({
            where: {
                id: id
            }
        });
    }

    findByProdutoId(produtoId: string) {
        return this.findOne({
            where: {
                "ProdutoId": new ObjectID(produtoId)
            }
        });
    }

    async updateProduto(produto: Produto) {
        const produtoID = produto.id.toHexString();

        const orcamento = await this.findByProdutoId(produtoID);
        orcamento.updateProduto(produtoID, produto);
        await this.save(orcamento);
    }

    async findSearch(search: string, unidadeid: string) {
        const result = await this.find({
            where: {
                $or: [
                    { id: {$regex: search, $options: 'i'}},
                    {data: {$regex: search, $options: 'i'}},
                    {statusPedido: {$regex: search, $options: 'i'}},
                    {clienteId: {$regex: search, $options: 'i'}},
                    {"produtos.produto": {$regex: search, $options: 'i'}},
                    {"produtos.vlUnitario": {$regex: search, $options: 'i'}},
                    {"produtos.volume": {$regex: search, $options: 'i'}}
                ],
                status: 1,
                unidadeId: unidadeid
            }
        });
        return result;
    }


}