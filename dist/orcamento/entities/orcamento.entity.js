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
exports.OrcamentoEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const produto_1 = require("./agreggate/produto");
let OrcamentoEntity = class OrcamentoEntity {
    addProduto(produto) {
        if (!this.produtos) {
            this.produtos = [produto];
            return;
        }
        this.produtos.push(produto);
    }
    findProduto(produtoId) {
        const produtos = this.getProduto();
        return produtos.find(produto => produto.id.equals(produtoId));
    }
    updateProduto(produtoId, produto) {
        const updateProdutoIndex = this
            .produtos
            .findIndex(produtos => produtos.id.equals(produtoId));
        if (updateProdutoIndex !== 1) {
            this.produtos[updateProdutoIndex] = produto;
        }
    }
    getProduto() {
        if (!this.produtos) {
            return [];
        }
        const notDeleteProduto = this
            .produtos
            .filter(produto => produto.produto);
        return notDeleteProduto.map(produto => new produto_1.Produto(produto));
    }
    deleteProduto(produtoId) {
        const deleteProdutoIndex = this
            .produtos
            .findIndex(produto => produto.id === produtoId);
        if (deleteProdutoIndex !== -1) {
            this.produtos.splice(deleteProdutoIndex, 1);
        }
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], OrcamentoEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Object)
], OrcamentoEntity.prototype, "data", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], OrcamentoEntity.prototype, "unidadeId", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], OrcamentoEntity.prototype, "clienteId", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], OrcamentoEntity.prototype, "statusPedido", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], OrcamentoEntity.prototype, "condicaoPagamento", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], OrcamentoEntity.prototype, "prazoPagamento", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], OrcamentoEntity.prototype, "observacao", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], OrcamentoEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], OrcamentoEntity.prototype, "createAt", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], OrcamentoEntity.prototype, "userCreated", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Date)
], OrcamentoEntity.prototype, "deletedAt", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], OrcamentoEntity.prototype, "deletedUserId", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: [produto_1.Produto] }),
    __metadata("design:type", Array)
], OrcamentoEntity.prototype, "produtos", void 0);
OrcamentoEntity = __decorate([
    typeorm_1.Entity()
], OrcamentoEntity);
exports.OrcamentoEntity = OrcamentoEntity;
//# sourceMappingURL=orcamento.entity.js.map