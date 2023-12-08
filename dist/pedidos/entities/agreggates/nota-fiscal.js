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
exports.NotaFiscal = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
class NotaFiscal {
    constructor(notaFiscal) {
        if (!notaFiscal) {
            this.idNF = new typeorm_1.ObjectID();
            return;
        }
        this.idNF = notaFiscal.idNF || new typeorm_1.ObjectID();
        this.data = notaFiscal.data;
        this.numeroNf = notaFiscal.numeroNf;
        this.valor = notaFiscal.valor;
        this.way = notaFiscal.way;
    }
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", typeorm_1.ObjectID)
], NotaFiscal.prototype, "idNF", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Date)
], NotaFiscal.prototype, "data", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Number)
], NotaFiscal.prototype, "numeroNf", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], NotaFiscal.prototype, "valor", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], NotaFiscal.prototype, "way", void 0);
exports.NotaFiscal = NotaFiscal;
//# sourceMappingURL=nota-fiscal.js.map