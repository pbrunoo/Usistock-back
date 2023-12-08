"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FornecedorRepository = void 0;
const typeorm_1 = require("typeorm");
const fornecedor_entity_1 = require("../entities/fornecedor.entity");
let FornecedorRepository = class FornecedorRepository extends typeorm_1.Repository {
    async getAll() {
        const fornecedores = await this.find({
            where: {
                status: 1
            }
        });
        return fornecedores;
    }
    async getFornecedorByUnidadeId(unidadeId) {
        const fornecedor = await this.find({
            where: {
                unidadeId: unidadeId.toString(),
                status: 1
            }
        });
        return fornecedor;
    }
    async getFornecedor(id) {
        return this.findOne({
            where: {
                id: id
            }
        });
    }
    async findSearch(search, unidadeId) {
        const result = await this.find({
            where: {
                $or: [
                    { id: { $regex: search, $options: 'i' } },
                    { cpfCnpj: { $regex: search, $options: 'i' } },
                    { razaoSocial: { $regex: search, $options: 'i' } },
                    { responsavel: { $regex: search, $options: 'i' } },
                    { telefone: { $regex: search, $options: 'i' } },
                    { email: { $regex: search, $options: 'i' } }
                ],
                unidadeId: unidadeId,
                status: 1
            }
        });
        return result;
    }
};
FornecedorRepository = __decorate([
    typeorm_1.EntityRepository(fornecedor_entity_1.FornecedorEntity)
], FornecedorRepository);
exports.FornecedorRepository = FornecedorRepository;
//# sourceMappingURL=fornecedor.repository.js.map