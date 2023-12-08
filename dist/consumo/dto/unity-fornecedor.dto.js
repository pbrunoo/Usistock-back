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
exports.UnityFornecedor = void 0;
const swagger_1 = require("@nestjs/swagger");
class UnityFornecedor {
    constructor(UnityFornecedor) {
        this.id = UnityFornecedor.id;
        this.produto = UnityFornecedor.produto;
        this.fornecedor = UnityFornecedor.fornecedor;
        this.razaoSocial = UnityFornecedor.razaoSocial;
        this.telefone = UnityFornecedor.telefone;
        this.status = UnityFornecedor.status;
    }
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], UnityFornecedor.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], UnityFornecedor.prototype, "produto", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], UnityFornecedor.prototype, "fornecedor", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], UnityFornecedor.prototype, "razaoSocial", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], UnityFornecedor.prototype, "telefone", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Number)
], UnityFornecedor.prototype, "status", void 0);
exports.UnityFornecedor = UnityFornecedor;
//# sourceMappingURL=unity-fornecedor.dto.js.map