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
exports.HistoricoEstoqueUpdateService = void 0;
const common_1 = require("@nestjs/common");
const estoque_repository_1 = require("../../repositories/estoque.repository");
const update_historico_estoque_1 = require("../../value-object/update-historico-estoque");
let HistoricoEstoqueUpdateService = class HistoricoEstoqueUpdateService {
    constructor(estoqueRespository) {
        this.estoqueRespository = estoqueRespository;
    }
    async update(estoqueId, historicoId, updateHitoricoObject) {
        const estoque = await this.estoqueRespository.findOne(estoqueId);
        const historicoEstoque = estoque.findHistorico(historicoId);
        historicoEstoque.data = updateHitoricoObject.data;
        historicoEstoque.quantidade = updateHitoricoObject.quantidade;
        historicoEstoque.vlUnitario = updateHitoricoObject.vlUnitario;
        estoque.updateHistoricoEstoque(historicoId, historicoEstoque);
        await this.estoqueRespository.save(estoque);
    }
};
HistoricoEstoqueUpdateService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [estoque_repository_1.EstoqueRepository])
], HistoricoEstoqueUpdateService);
exports.HistoricoEstoqueUpdateService = HistoricoEstoqueUpdateService;
//# sourceMappingURL=historico-estoque-update.service.js.map