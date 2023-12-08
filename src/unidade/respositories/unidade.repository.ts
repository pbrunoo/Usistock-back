import { EntityRepository, Repository } from "typeorm";
import { UnidadeEntity } from "../entities/unidade.entity"

@EntityRepository(UnidadeEntity)
export class UnidadeRepository extends Repository<UnidadeEntity>{
    async getAll() {
        const unidades = await this.find({
            where: {
                status: 1
            }
        });

        return unidades;
    }

    async getUnidadeByUnidadeId(unidadeId: string) {
        const unidade = await this.find({
            where: {
                id: unidadeId.toString(),
                status: 1
            }

        });
        

        return unidade;
    }

    async findSearch(search: string) {
        const result = await this.find({
            where: {
                $or: [
                    { id: {$regex: search, $options: 'i'} },
                    { nomeUnidade: {$regex: search, $options: 'i'} },
                    { idEmpresa: {$regex: search, $options: 'i'} },
                ],
                status: 1
            }
        });   
        return result;
    }

    
}
