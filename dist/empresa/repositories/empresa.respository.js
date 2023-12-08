"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaRepository = void 0;
const bson_1 = require("bson");
const typeorm_1 = require("typeorm");
const empresa_entity_1 = require("../entities/empresa.entity");
let EmpresaRepository = class EmpresaRepository extends typeorm_1.Repository {
    async getAll() {
        const empresa = await this.find({
            where: {
                status: 1
            }
        });
        return empresa;
    }
    async getEmpresa(id) {
        return this.findOne({
            where: {
                id: id
            }
        });
    }
    async findSearch(search) {
        const result = await this.find({
            where: {
                $or: [
                    { id: { $regex: search, $options: 'i' } },
                    { cnpj: { $regex: search, $options: 'i' } },
                    { inscEstatudal: { $regex: search, $options: 'i' } },
                    { razaoSocial: { $regex: search, $options: 'i' } },
                    { nomeFantasia: { $regex: search, $options: 'i' } },
                    { cep: { $regex: search, $options: 'i' } },
                    { telefone: { $regex: search, $options: 'i' } },
                    { email: { $regex: search, $options: 'i' } },
                ],
                status: 1
            }
        });
        return result;
    }
    async getTrabalhistaByEmpresa(empresaIds) {
        const empresaIdsAsObjectId = empresaIds.map(id => new bson_1.ObjectId(id));
        const mongoManager = typeorm_1.getMongoManager();
        const aggregation = mongoManager.aggregate(empresa_entity_1.EmpresaEntity, [
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
        const promotions = await aggregation.toArray();
        return promotions;
    }
};
EmpresaRepository = __decorate([
    typeorm_1.EntityRepository(empresa_entity_1.EmpresaEntity)
], EmpresaRepository);
exports.EmpresaRepository = EmpresaRepository;
//# sourceMappingURL=empresa.respository.js.map