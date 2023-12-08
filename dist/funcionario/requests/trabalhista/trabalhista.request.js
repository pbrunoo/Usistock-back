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
exports.TrabalhistaRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class TrabalhistaRequest {
}
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], TrabalhistaRequest.prototype, "pis", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], TrabalhistaRequest.prototype, "dataAdmissao", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], TrabalhistaRequest.prototype, "salarioAdmissao", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], TrabalhistaRequest.prototype, "salarioAtual", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], TrabalhistaRequest.prototype, "funcao", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], TrabalhistaRequest.prototype, "empresa", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], TrabalhistaRequest.prototype, "empresaAnterior", void 0);
exports.TrabalhistaRequest = TrabalhistaRequest;
//# sourceMappingURL=trabalhista.request.js.map