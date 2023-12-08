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
exports.EstoqueEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const historico_estoque_1 = require("./agreggate/historico-estoque");
let EstoqueEntity = class EstoqueEntity {
    addHistoricoEstoque(historicoEstoque) {
        if (!this.historicoEstoque) {
            this.historicoEstoque = [historicoEstoque];
            return;
        }
        this.historicoEstoque.push(historicoEstoque);
    }
    findHistorico(historicoId) {
        const historicos = this.getHistorico();
        return historicos.find(historicoEstoque => historicoEstoque.id.equals(historicoId));
    }
    updateHistoricoEstoque(historicoId, historico) {
        const updateHistoricoEstoqueIndex = this
            .historicoEstoque
            .findIndex(historicoEstoques => historicoEstoques.id.equals(historicoId));
        if (updateHistoricoEstoqueIndex !== -1) {
            this.historicoEstoque[updateHistoricoEstoqueIndex] = historico;
        }
    }
    getHistorico() {
        if (!this.historicoEstoque) {
            return [];
        }
        const notDeleteHistorico = this
            .historicoEstoque
            .filter(historicos => historicos.vlUnitario);
        return notDeleteHistorico.map(historicos => new historico_estoque_1.HistoricoEstoque(historicos));
    }
    deleteHistoricoEstoque(historicoId) {
        const deleteHistoricoEstoqueIndex = this
            .historicoEstoque
            .findIndex(historicoEstoques => historicoEstoques.id.equals(historicoId));
        if (deleteHistoricoEstoqueIndex !== -1) {
            this.historicoEstoque.splice(deleteHistoricoEstoqueIndex, 1);
        }
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EstoqueEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EstoqueEntity.prototype, "produto", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EstoqueEntity.prototype, "unidadeId", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], EstoqueEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], EstoqueEntity.prototype, "estoqueDisponivel", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EstoqueEntity.prototype, "vlTotal", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Object)
], EstoqueEntity.prototype, "createAt", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EstoqueEntity.prototype, "userCreated", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Date)
], EstoqueEntity.prototype, "deletedAt", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], EstoqueEntity.prototype, "deletedUserId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [historico_estoque_1.HistoricoEstoque] }),
    typeorm_1.Column(),
    __metadata("design:type", Array)
], EstoqueEntity.prototype, "historicoEstoque", void 0);
EstoqueEntity = __decorate([
    typeorm_1.Entity()
], EstoqueEntity);
exports.EstoqueEntity = EstoqueEntity;
//# sourceMappingURL=estoque.entity.js.map