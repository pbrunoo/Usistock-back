import { EntityRepository, Repository } from "typeorm";
import { FornecedorEntity } from "../entities/fornecedor.entity";

@EntityRepository(FornecedorEntity)
export class FornecedorRepository extends Repository<FornecedorEntity> {
    async getAll() {
        const fornecedores = await this.find({
            where: {
                status: 1
            }
        });

        return fornecedores;
    }

    async getFornecedorByUnidadeId(unidadeId: string) {
        const fornecedor = await this.find({
            where: {
                unidadeId: unidadeId.toString(),
                status: 1
            }
        });
        
        return fornecedor;
    }

    async getFornecedor(id: string) {
        return this.findOne({
            where: {
                id: id
            }
        })
    }

    async findSearch(search: string, unidadeId: string) {
        const result = await this.find({
            where: {
                $or: [
                    { id: {$regex: search, $options: 'i'} },
                    { cpfCnpj: {$regex: search, $options: 'i'} },
                    { razaoSocial: {$regex: search, $options: 'i'} },
                    { responsavel: {$regex: search, $options: 'i'} },
                    { telefone: {$regex: search, $options: 'i'} },
                    { email: {$regex: search, $options: 'i'} }
                ],
                unidadeId: unidadeId,
                status: 1
            }
        });
        return result;
    }
}