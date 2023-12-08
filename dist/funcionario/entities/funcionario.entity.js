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
exports.FuncionarioEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const trabalhista_1 = require("./agreggate/trabalhista");
let FuncionarioEntity = class FuncionarioEntity {
    addTrabalhista(trabalhista) {
        if (!this.trabalhista) {
            this.trabalhista = [trabalhista];
            return;
        }
        this.trabalhista.push(trabalhista);
    }
    deleteTrabalhista(pis) {
        if (!this.trabalhista) {
            return;
        }
        const deleteTrabalhistaIndex = this
            .trabalhista
            .findIndex(trabalhistas => trabalhistas.pis === pis);
        if (deleteTrabalhistaIndex !== -1) {
            this.trabalhista.splice(deleteTrabalhistaIndex, 1);
        }
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "nomeCompleto", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "rg", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "cpf", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "estadoCivil", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "sexo", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "dataNascimento", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "filial", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "endereco", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "complemento", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "bairro", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "cidade", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "cep", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "uf", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "telefone", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "escolaridade", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "userCreated", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "createAt", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "userUpdated", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Object)
], FuncionarioEntity.prototype, "updatedAt", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Date)
], FuncionarioEntity.prototype, "deletedAt", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], FuncionarioEntity.prototype, "deletedUserId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [trabalhista_1.Trabalhista] }),
    typeorm_1.Column(),
    __metadata("design:type", Array)
], FuncionarioEntity.prototype, "trabalhista", void 0);
FuncionarioEntity = __decorate([
    typeorm_1.Entity()
], FuncionarioEntity);
exports.FuncionarioEntity = FuncionarioEntity;
//# sourceMappingURL=funcionario.entity.js.map