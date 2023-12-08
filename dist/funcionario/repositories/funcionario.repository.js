"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioRepository = void 0;
const mongodb_1 = require("mongodb");
const typeorm_1 = require("typeorm");
const funcionario_entity_1 = require("../entities/funcionario.entity");
let FuncionarioRepository = class FuncionarioRepository extends typeorm_1.Repository {
    async getAll() {
        const funcionario = await this.find({
            where: {
                status: 1
            }
        });
        return funcionario;
    }
    async getFuncionarioByUnidadeId(unidadeId) {
        const funcionario = await this.find({
            where: {
                unidadeId: unidadeId.toString(),
                status: 1
            }
        });
    }
    async findSearch(search) {
        const result = await this.find({
            where: {
                $or: [
                    { id: { $regex: search, $options: 'i' } },
                    { nomeCompleto: { $regex: search, $options: 'i' } },
                    { cpf: { $regex: search, $options: 'i' } },
                    { rg: { $regex: search, $options: 'i' } },
                    { dataNascimento: { $regex: search, $options: 'i' } },
                    { rg: { $regex: search, $options: 'i' } },
                    { empresa: { $regex: search, $options: 'i' } },
                    { "trabalhista.empresa": { $regex: search, $options: 'i' } },
                    { "trabalhista.funcao": { $regex: search, $options: 'i' } },
                    { "trabalhista.pis": { $regex: search, $options: 'i' } },
                    { "trabalhista.dataAdmissao": { $regex: search, $options: 'i' } }
                ],
                status: 1
            }
        });
        return result;
    }
    async getTrabalhistaByEmpresa(empresaIds) {
        const empresaIdsAsObjectId = empresaIds.map(id => new mongodb_1.ObjectId(id));
        const mongoManager = typeorm_1.getMongoManager();
        const aggregation = mongoManager.aggregate(funcionario_entity_1.FuncionarioEntity, [
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
        const trabalhista = await aggregation.toArray();
        console.log(trabalhista);
        return trabalhista;
    }
};
FuncionarioRepository = __decorate([
    typeorm_1.EntityRepository(funcionario_entity_1.FuncionarioEntity)
], FuncionarioRepository);
exports.FuncionarioRepository = FuncionarioRepository;
//# sourceMappingURL=funcionario.repository.js.map