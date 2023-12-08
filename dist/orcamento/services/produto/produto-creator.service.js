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
exports.ProdutoCreatorService = void 0;
const common_1 = require("@nestjs/common");
const produto_1 = require("../../entities/agreggate/produto");
const orcamento_repository_1 = require("../../respositories/orcamento.repository");
const new_produto_object_1 = require("../../values-object/new-produto-object");
let ProdutoCreatorService = class ProdutoCreatorService {
    constructor(orcamentoRepostiry) {
        this.orcamentoRepostiry = orcamentoRepostiry;
    }
    async create(orcamentoId, newProdutoEstoque) {
        const orcamento = await this.orcamentoRepostiry.findOne(orcamentoId);
        const register = new produto_1.Produto({
            produto: newProdutoEstoque.produto,
            volume: newProdutoEstoque.volume,
            vlUnitario: newProdutoEstoque.vlUnitario
        });
        orcamento.addProduto(register);
        await this.orcamentoRepostiry.save(orcamento);
        return orcamento;
    }
};
ProdutoCreatorService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [orcamento_repository_1.OrcamentoRepository])
], ProdutoCreatorService);
exports.ProdutoCreatorService = ProdutoCreatorService;
//# sourceMappingURL=produto-creator.service.js.map