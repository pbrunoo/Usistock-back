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
exports.Produto = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongodb_1 = require("mongodb");
class Produto {
    constructor(produtos) {
        if (!produtos) {
            this.id = new mongodb_1.ObjectID();
            return;
        }
        this.id = produtos.id || new mongodb_1.ObjectID();
        this.produto = produtos.produto;
        this.volume = produtos.volume;
        this.vlUnitario = produtos.vlUnitario;
    }
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", mongodb_1.ObjectID)
], Produto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], Produto.prototype, "produto", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Number)
], Produto.prototype, "volume", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], Produto.prototype, "vlUnitario", void 0);
exports.Produto = Produto;
//# sourceMappingURL=produto.js.map