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
exports.UnityEmpresa = void 0;
const swagger_1 = require("@nestjs/swagger");
const empresa_1 = require("../../empresa/entities/abstractions/empresa");
class UnityEmpresa {
    constructor(UnityEmpresa) {
        this.id = UnityEmpresa.id;
        this.nomeUnidade = UnityEmpresa.nomeUnidade;
        this.idEmpresa = UnityEmpresa.idEmpresa;
        this.razaoSocial = UnityEmpresa.razaoSocial;
        this.status = UnityEmpresa.status;
    }
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], UnityEmpresa.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], UnityEmpresa.prototype, "nomeUnidade", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], UnityEmpresa.prototype, "idEmpresa", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], UnityEmpresa.prototype, "razaoSocial", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], UnityEmpresa.prototype, "status", void 0);
exports.UnityEmpresa = UnityEmpresa;
//# sourceMappingURL=unity-empresa.js.map