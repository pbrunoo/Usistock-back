import { EntityRepository, Repository } from "typeorm";
import { ConsumoEntity } from "../entities/consumo.entity";


@EntityRepository(ConsumoEntity)
export class ConsumoRepository extends Repository<ConsumoEntity> {
    async getAll() {
        const consumo = await this.find({
            where: {
                status: 1
            }
        });

        return consumo;
    }

    async getConsumoByUnidadeId(unidadeId: string) {
        const consumo = await this.find({
            where: {
                unidadeId: unidadeId.toString(),
                status: 1
            }
        });
        return consumo;
    }

    async searchFind(search: string, unidadeId: string) {
        const result = await this.find({
            where: {
                $or: [
                    { id: {$regex: search, $options: 'i'} },
                    { produto: {$regex: search, $options: 'i'} },
                    { fornecedor: {$regex: search, $options: 'i'} }
                    
                ]
            }
        });
        return result;

    }
    
}