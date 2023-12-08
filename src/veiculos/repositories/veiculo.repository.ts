import { EntityRepository, Repository } from "typeorm";
import { VeiculoEntity } from "../entities/veiculo.entity";

@EntityRepository(VeiculoEntity)
export class VeiculoRepository extends Repository<VeiculoEntity> {
    async getAll() {
        const veiculos = await this.find({
            where: {
                status: 1
            }
        });
        return veiculos;
    }

    async getVeiculoByUnidadeId(unidadeId: string) {
        const veiculo = await this.find({
            where: {
                unidadeId: unidadeId.toString(),
                status: 1
            }
        })

        return veiculo;
    }

    async findSearch(search: string, unidadeId: string) {
        const result = await this.find({
            where: {
                $or: [
                    { id: { $regex: search, $options: 'i' }},
                    {veiculo: { $regex: search, $options: 'i' }},
                    {responsavel: { $regex: search, $options: 'i' }},
                    {unidadeId: { $regex: search, $options: 'i' }}
                ],
                status: 1,
                unidadeId: unidadeId
            }
        });
        return result;
    }
}