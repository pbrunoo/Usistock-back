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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueFinderService = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const unidade_repository_1 = require("../../unidade/respositories/unidade.repository");
const estoque_repository_1 = require("../repositories/estoque.repository");
let EstoqueFinderService = class EstoqueFinderService {
    constructor(estoqueRepository, unidadeRepository) {
        this.estoqueRepository = estoqueRepository;
        this.unidadeRepository = unidadeRepository;
    }
    async getAll() {
        const estoque = await this.estoqueRepository.getAll();
        return estoque;
    }
    async getByName(produto) {
        const estoque = await this.estoqueRepository.find({
            produto: produto
        });
        return estoque;
    }
    async getByUnidadeId(id) {
        const estoque = await this.estoqueRepository.getEstoqueByUnidadeId(id);
        return estoque;
    }
    async getById(id) {
        const estoque = await this.estoqueRepository.findOne(id);
        return estoque;
    }
    async getEstoqueByUnidadeId(unidadeid) {
        const estoque = await this.getByUnidadeId(unidadeid);
        return estoque;
    }
    async searchAll(result, unidadeid) {
        const search = await this.estoqueRepository.findSearch(result, unidadeid);
        return search;
    }
};
__decorate([
    common_1.Get('all/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EstoqueFinderService.prototype, "getEstoqueByUnidadeId", null);
EstoqueFinderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [estoque_repository_1.EstoqueRepository,
        unidade_repository_1.UnidadeRepository])
], EstoqueFinderService);
exports.EstoqueFinderService = EstoqueFinderService;
//# sourceMappingURL=estoque-finder.service.js.map