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
exports.EmpresaEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const servicos_1 = require("./agreggate/servicos");
let EmpresaEntity = class EmpresaEntity {
    addServicos(servicos) {
        if (!this.servicos) {
            this.servicos = [servicos];
            return;
        }
        this.servicos.push(servicos);
    }
    deleteServicos(cnae) {
        if (!this.servicos) {
            return;
        }
        const deleteServicosIndex = this
            .servicos
            .findIndex(servicos => servicos.cnae === cnae);
        if (deleteServicosIndex !== -1) {
            this.servicos.splice(deleteServicosIndex, 1);
        }
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "cnpj", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "inscrEstadual", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "razaoSocial", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "nomeFantasia", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "cep", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "endereco", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "complemento", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "numero", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "bairro", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "cidade", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "uf", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "telefone", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "pis", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "cofins", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "iss", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "inss", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "irrf", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "csll", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "userCreated", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "userUpdated", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "createAt", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Object)
], EmpresaEntity.prototype, "updateAt", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Date)
], EmpresaEntity.prototype, "deletedAt", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], EmpresaEntity.prototype, "deletedUserId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [servicos_1.Servicos] }),
    typeorm_1.Column(),
    __metadata("design:type", Array)
], EmpresaEntity.prototype, "servicos", void 0);
EmpresaEntity = __decorate([
    typeorm_1.Entity()
], EmpresaEntity);
exports.EmpresaEntity = EmpresaEntity;
//# sourceMappingURL=empresa.entity.js.map