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
exports.HistoricoEstoque = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongodb_1 = require("mongodb");
class HistoricoEstoque {
    constructor(historicoEstoque) {
        if (!historicoEstoque) {
            this.id = new mongodb_1.ObjectID();
            return;
        }
        this.id = historicoEstoque.id || new mongodb_1.ObjectID();
        this.data = historicoEstoque.data;
        this.quantidade = historicoEstoque.quantidade;
        this.vlUnitario = historicoEstoque.vlUnitario;
    }
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", mongodb_1.ObjectID)
], HistoricoEstoque.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Date)
], HistoricoEstoque.prototype, "data", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Number)
], HistoricoEstoque.prototype, "quantidade", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], HistoricoEstoque.prototype, "vlUnitario", void 0);
exports.HistoricoEstoque = HistoricoEstoque;
//# sourceMappingURL=historico-estoque.js.map