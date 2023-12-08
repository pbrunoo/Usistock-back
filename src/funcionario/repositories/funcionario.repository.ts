import { Trabalhista } from './../entities/agreggate/trabalhista';
import { ObjectId } from 'mongodb';
import { EntityRepository, getMongoManager, Repository } from "typeorm";
import { FuncionarioEntity } from "../entities/funcionario.entity";

@EntityRepository(FuncionarioEntity)
export class FuncionarioRepository extends Repository<FuncionarioEntity> {
    async getAll() {
        const funcionario = await this.find({
            where: {
                status: 1
            }
        });

        return funcionario;
    }

    async getFuncionarioByUnidadeId(unidadeId: string) {
        const funcionario = await this.find({
            where: {
                unidadeId: unidadeId.toString(),
                status: 1
            }
        })
    }

    async findSearch(search: string) {
        const result = await this.find({
            where: {
                $or: [
                    { id: {$regex: search, $options: 'i'} },
                    { nomeCompleto: {$regex: search, $options: 'i'} },
                    { cpf: {$regex: search, $options: 'i'}},
                    { rg: {$regex: search, $options: 'i'} },
                    { dataNascimento: {$regex: search, $options: 'i'} },
                    { rg: {$regex: search, $options: 'i'} },
                    { empresa: {$regex: search, $options: 'i'} },
                    { "trabalhista.empresa": {$regex: search, $options: 'i'} },
                    { "trabalhista.funcao": {$regex: search, $options: 'i'} },
                    { "trabalhista.pis": {$regex: search, $options: 'i'} },
                    { "trabalhista.dataAdmissao": {$regex: search, $options: 'i'} }
                ],
                status: 1
            }
        });
        return result;
    }

    async getTrabalhistaByEmpresa(empresaIds: string[]) {
        const empresaIdsAsObjectId = empresaIds.map(id => new ObjectId(id));

        const mongoManager = getMongoManager();
        const aggregation = mongoManager.aggregate(FuncionarioEntity, [
            {
                $unwind: "$empresa"
            },
            {
                $match: {
                    "empresa.id": {
                        $in: empresaIdsAsObjectId
                    }
                }
            },
            {
                $replaceRoot: {
                    newRoot: "$empresa"
                }
            }
        ]);

        const trabalhista: Trabalhista[] = await aggregation.toArray();
        console.log(trabalhista);
        return trabalhista;
    }

}