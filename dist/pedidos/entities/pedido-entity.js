"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const itens_pedido_1 = require("./agreggates/itens-pedido");
let PedidoEntity = class PedidoEntity {
    AddItensPedido(itensPedido) {
        if (!this.itensPedido) {
            this.itensPedido = [itensPedido];
            return;
        }
        this.itensPedido.push(itensPedido);
    }
    findItensPedido(pedidoId) {
        const itensPedidos = this.getItensPedido();
        return itensPedidos.find(itensPedido => itensPedido.id.equals(pedidoId));
    }
    updateItensPedido(pedidoId, itensPedidos) {
        const updateItensPedidoIndex = this
            .itensPedido
            .findIndex(itensPedidos => itensPedidos.id.equals(pedidoId));
        if (updateItensPedidoIndex !== -1) {
            this.itensPedido[updateItensPedidoIndex] = itensPedidos;
        }
    }
    getItensPedido() {
        if (!this.itensPedido) {
            return [];
        }
        const notDeleteItensPedido = this
            .itensPedido
            .filter(itensPedidos => itensPedidos.quantidade);
        return notDeleteItensPedido.map(itensPedidos => new itens_pedido_1.ItensPedido(itensPedidos));
    }
    deleteItensPedido(pedidoId) {
        const deleteItensPedidoIndex = this
            .itensPedido
            .findIndex(itensPedidos => itensPedidos.id.equals(pedidoId));
        if (deleteItensPedidoIndex !== -1) {
            this.itensPedido.splice(deleteItensPedidoIndex, 1);
        }
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], PedidoEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Object)
], PedidoEntity.prototype, "data", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], PedidoEntity.prototype, "unidadeId", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], PedidoEntity.prototype, "pedido", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], PedidoEntity.prototype, "descricao", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], PedidoEntity.prototype, "statusPedido", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], PedidoEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], PedidoEntity.prototype, "userCreated", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Object)
], PedidoEntity.prototype, "createAt", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Date)
], PedidoEntity.prototype, "deletedAt", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], PedidoEntity.prototype, "deletedUserId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [itens_pedido_1.ItensPedido] }),
    typeorm_1.Column(),
    __metadata("design:type", Array)
], PedidoEntity.prototype, "itensPedido", void 0);
PedidoEntity = __decorate([
    typeorm_1.Entity()
], PedidoEntity);
exports.PedidoEntity = PedidoEntity;
//# sourceMappingURL=pedido-entity.js.map