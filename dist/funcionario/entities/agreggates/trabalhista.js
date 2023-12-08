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
exports.Trabalhista = void 0;
const swagger_1 = require("@nestjs/swagger");
class Trabalhista {
    constructor(trabalhista) {
        this.matricula = trabalhista.matricula;
        this.pis = trabalhista.pis;
        this.dataAdmissao = trabalhista.dataAdmissao;
        this.empresa = trabalhista.empresa;
        this.salarioAdm = trabalhista.salarioAdm;
        this.salarioAt = trabalhista.salarioAt;
        this.funcao = trabalhista.funcao;
        this.empregoAnt = trabalhista.empregoAnt;
    }
}
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Number)
], Trabalhista.prototype, "matricula", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Number)
], Trabalhista.prototype, "pis", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Date)
], Trabalhista.prototype, "dataAdmissao", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], Trabalhista.prototype, "empresa", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], Trabalhista.prototype, "salarioAdm", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], Trabalhista.prototype, "salarioAt", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], Trabalhista.prototype, "funcao", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], Trabalhista.prototype, "empregoAnt", void 0);
exports.Trabalhista = Trabalhista;
//# sourceMappingURL=trabalhista.js.map