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
exports.NewOrcamentoRequest = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class NewOrcamentoRequest {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => Date),
    __metadata("design:type", Object)
], NewOrcamentoRequest.prototype, "data", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], NewOrcamentoRequest.prototype, "unidadeId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], NewOrcamentoRequest.prototype, "clienteId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], NewOrcamentoRequest.prototype, "statusPedido", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], NewOrcamentoRequest.prototype, "condicaoPagamento", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Object)
], NewOrcamentoRequest.prototype, "prazoPagamento", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Object)
], NewOrcamentoRequest.prototype, "status", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => Date),
    __metadata("design:type", Object)
], NewOrcamentoRequest.prototype, "createAt", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], NewOrcamentoRequest.prototype, "userCreated", void 0);
exports.NewOrcamentoRequest = NewOrcamentoRequest;
//# sourceMappingURL=new-orcamento-request.js.map