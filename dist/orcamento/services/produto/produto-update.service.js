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
exports.ProdutoUpdateService = void 0;
const common_1 = require("@nestjs/common");
const orcamento_repository_1 = require("../../respositories/orcamento.repository");
const update_produto_object_1 = require("../../values-object/update-produto-object");
let ProdutoUpdateService = class ProdutoUpdateService {
    constructor(orcamentoRepository) {
        this.orcamentoRepository = orcamentoRepository;
    }
    async update(orcamentoId, produtoId, updateProdutoObject) {
        const orcamento = await this.orcamentoRepository.findOne(orcamentoId);
        const produto = orcamento.findProduto(produtoId);
        produto.produto = updateProdutoObject.produto;
        produto.vlUnitario = updateProdutoObject.vlUnitario;
        produto.volume = updateProdutoObject.volume;
        orcamento.updateProduto(produtoId, produto);
        await this.orcamentoRepository.save(orcamento);
    }
};
ProdutoUpdateService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [orcamento_repository_1.OrcamentoRepository])
], ProdutoUpdateService);
exports.ProdutoUpdateService = ProdutoUpdateService;
//# sourceMappingURL=produto-update.service.js.map