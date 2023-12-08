"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueRepository = void 0;
const bson_1 = require("bson");
const typeorm_1 = require("typeorm");
const estoque_entity_1 = require("../entities/estoque.entity");
let EstoqueRepository = class EstoqueRepository extends typeorm_1.Repository {
    async getAll() {
        const estoque = await this.find({});
        return estoque;
    }
    async getEstoqueByUnidadeId(unidadeId) {
        const estoque = await this.find({
            where: {
                unidadeId: unidadeId.toString(),
                status: 1
            }
        });
        return estoque;
    }
    async getEstoque(id) {
        return this.findOne({
            where: {
                id: id
            }
        });
    }
    findByHistoricoId(historicoId) {
        return this.findOne({
            where: {
                "historicoEstoque": new bson_1.ObjectId(historicoId)
            }
        });
    }
    async findSearch(search, unidadeid) {
        const result = await this.find({
            where: {
                $or: [
                    { id: { $regex: search, $options: 'i' } },
                    { produto: { $regex: search, $options: 'i' } },
                    { estoqueDisponivel: { $regex: search, $options: 'i' } },
                    { vlTotal: { $regex: search, $options: 'i' } },
                ],
                status: 1
            }
        });
        return result;
    }
    async updateHistoricoEstoque(historicoEstoque) {
        const historicoID = historicoEstoque.id.toHexString();
        const estoque = await this.findByHistoricoId(historicoID);
        estoque.updateHistoricoEstoque(historicoID, historicoEstoque);
        await this.save(estoque);
    }
};
EstoqueRepository = __decorate([
    typeorm_1.EntityRepository(estoque_entity_1.EstoqueEntity)
], EstoqueRepository);
exports.EstoqueRepository = EstoqueRepository;
//# sourceMappingURL=estoque.repository.js.map