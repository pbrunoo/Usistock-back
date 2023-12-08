import { Trabalhista } from './../../funcionario/entities/agreggate/trabalhista';
import { ObjectId } from 'bson';
import { EntityRepository, getMongoManager, Repository } from "typeorm";
import { EmpresaEntity } from "../entities/empresa.entity";

@EntityRepository(EmpresaEntity)
export class EmpresaRepository extends Repository<EmpresaEntity> {
    async getAll() {
        const empresa = await this.find({
            where: {
                status: 1
            }
        });
        return empresa;
    }

    async getEmpresa(id: string) {
        return this.findOne({
            where: {
                id: id
            }
        })
        
    }

    async findSearch(search: string) {
        const result = await this.find({
            where: {
                $or: [
                    { id: {$regex: search, $options: 'i'} },
                    { cnpj: {$regex: search, $options: 'i'} },
                    { inscEstatudal: {$regex: search, $options: 'i'} },
                    { razaoSocial: {$regex: search, $options: 'i'} }, 
                    { nomeFantasia: {$regex: search, $options: 'i'} },
                    { cep: {$regex: search, $options: 'i'} },
                    { telefone: {$regex: search, $options: 'i'} },
                    { email: {$regex: search, $options: 'i'} },
                ],
                status: 1
            }
        });
        return result;
    }

    async getTrabalhistaByEmpresa(empresaIds: string[]) {
        const empresaIdsAsObjectId = empresaIds.map(id => new ObjectId(id));

        const mongoManager = getMongoManager();
        const aggregation = mongoManager.aggregate(EmpresaEntity, [
            {
                $unwind: "$promotions"
            },
            {
                $match: {
                    "promotions.id": {
                        $in: empresaIdsAsObjectId
                    }
                }
            },
            {
                $replaceRoot: {
                    newRoot: "$promotions"
                }
            }
        ]);

        const promotions: Trabalhista[] = await aggregation.toArray();

        return promotions;
    }

}