"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoRepository = void 0;
const bson_1 = require("bson");
const typeorm_1 = require("typeorm");
const pedido_entity_1 = require("../entities/pedido.entity");
let PedidoRepository = class PedidoRepository extends typeorm_1.Repository {
    async getAll() {
        const pedido = await this.find({});
        return pedido;
    }
    async getPedidoByUnidadeId(unidadeId) {
        const pedido = await this.find({
            where: {
                unidadeId: unidadeId.toString(),
                status: 1
            }
        });
        return pedido;
    }
    async getPedido(id) {
        return this.findOne({
            where: {
                id: id
            }
        });
    }
    findByItensPedidoId(pedidoId) {
        return this.findOne({
            where: {
                "itensPedido": new bson_1.ObjectId(pedidoId)
            }
        });
    }
    async updateItensPedido(ItensPedido) {
        const pedidoId = ItensPedido.id.toHexString();
        const pedido = await this.findByItensPedidoId(pedidoId);
        pedido.updateItensPedido(pedidoId, ItensPedido);
        await this.save(pedido);
    }
};
PedidoRepository = __decorate([
    typeorm_1.EntityRepository(pedido_entity_1.PedidoEntity)
], PedidoRepository);
exports.PedidoRepository = PedidoRepository;
//# sourceMappingURL=pedido.repository.js.map