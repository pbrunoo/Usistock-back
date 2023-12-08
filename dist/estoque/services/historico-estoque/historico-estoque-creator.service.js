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
exports.HistoricoEstoqueCreatorService = void 0;
const common_1 = require("@nestjs/common");
const historico_estoque_1 = require("../../entities/agreggate/historico-estoque");
const estoque_repository_1 = require("../../repositories/estoque.repository");
const new_historico_estoque_1 = require("../../value-object/new-historico-estoque");
let HistoricoEstoqueCreatorService = class HistoricoEstoqueCreatorService {
    constructor(estoqueRepository) {
        this.estoqueRepository = estoqueRepository;
    }
    async create(estoqueId, newHistoricoEstoque) {
        const estoque = await this.estoqueRepository.findOne(estoqueId);
        const registre = new historico_estoque_1.HistoricoEstoque({
            data: newHistoricoEstoque.data,
            quantidade: newHistoricoEstoque.quantidade,
            vlUnitario: newHistoricoEstoque.vlUnitario
        });
        estoque.addHistoricoEstoque(registre);
        await this.estoqueRepository.save(estoque);
        return estoque;
    }
};
HistoricoEstoqueCreatorService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [estoque_repository_1.EstoqueRepository])
], HistoricoEstoqueCreatorService);
exports.HistoricoEstoqueCreatorService = HistoricoEstoqueCreatorService;
//# sourceMappingURL=historico-estoque-creator.service.js.map