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
exports.UpdateFuncionarioRequest = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class UpdateFuncionarioRequest {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], UpdateFuncionarioRequest.prototype, "nome", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], UpdateFuncionarioRequest.prototype, "rg", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Object)
], UpdateFuncionarioRequest.prototype, "cpf", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], UpdateFuncionarioRequest.prototype, "estadoCivil", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], UpdateFuncionarioRequest.prototype, "sexo", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => Date),
    __metadata("design:type", Object)
], UpdateFuncionarioRequest.prototype, "dataNasc", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Object)
], UpdateFuncionarioRequest.prototype, "filiacao", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], UpdateFuncionarioRequest.prototype, "endereco", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], UpdateFuncionarioRequest.prototype, "complemento", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], UpdateFuncionarioRequest.prototype, "bairro", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], UpdateFuncionarioRequest.prototype, "cidade", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], UpdateFuncionarioRequest.prototype, "cep", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], UpdateFuncionarioRequest.prototype, "uf", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], UpdateFuncionarioRequest.prototype, "telefone", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], UpdateFuncionarioRequest.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", Object)
], UpdateFuncionarioRequest.prototype, "escolaridade", void 0);
exports.UpdateFuncionarioRequest = UpdateFuncionarioRequest;
//# sourceMappingURL=update-funcionario.request.js.map