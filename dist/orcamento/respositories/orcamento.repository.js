"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcamentoRepository = void 0;
const bson_1 = require("bson");
const typeorm_1 = require("typeorm");
const orcamento_entity_1 = require("../entities/orcamento.entity");
let OrcamentoRepository = class OrcamentoRepository extends typeorm_1.Repository {
    async getAll() {
        const orcamento = await this.find({});
        return orcamento;
    }
    async getOrcamentoByUnidadeId(unidadeId) {
        const orcamento = await this.find({
            where: {
                unidadeId: unidadeId.toString(),
                status: 1
            }
        });
        return orcamento;
    }
    async getOrcamento(id) {
        return this.findOne({
            where: {
                id: id
            }
        });
    }
    findByProdutoId(produtoId) {
        return this.findOne({
            where: {
                "ProdutoId": new bson_1.ObjectID(produtoId)
            }
        });
    }
    async updateProduto(produto) {
        const produtoID = produto.id.toHexString();
        const orcamento = await this.findByProdutoId(produtoID);
        orcamento.updateProduto(produtoID, produto);
        await this.save(orcamento);
    }
    async findSearch(search, unidadeid) {
        const result = await this.find({
            where: {
                $or: [
                    { id: { $regex: search, $options: 'i' } },
                    { data: { $regex: search, $options: 'i' } },
                    { statusPedido: { $regex: search, $options: 'i' } },
                    { clienteId: { $regex: search, $options: 'i' } },
                    { "produtos.produto": { $regex: search, $options: 'i' } },
                    { "produtos.vlUnitario": { $regex: search, $options: 'i' } },
                    { "produtos.volume": { $regex: search, $options: 'i' } }
                ],
                status: 1,
                unidadeId: unidadeid
            }
        });
        return result;
    }
};
OrcamentoRepository = __decorate([
    typeorm_1.EntityRepository(orcamento_entity_1.OrcamentoEntity)
], OrcamentoRepository);
exports.OrcamentoRepository = OrcamentoRepository;
//# sourceMappingURL=orcamento.repository.js.map