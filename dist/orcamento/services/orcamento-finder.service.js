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
exports.OrcamentoFinderService = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const orcamento_repository_1 = require("../respositories/orcamento.repository");
let OrcamentoFinderService = class OrcamentoFinderService {
    constructor(orcamentoRepository) {
        this.orcamentoRepository = orcamentoRepository;
    }
    async getAll() {
        const orcamento = await this.orcamentoRepository.getAll();
        return orcamento;
    }
    async getByName(cliente) {
        const orcamento = await this.orcamentoRepository.find({
            clienteId: cliente
        });
        return orcamento;
    }
    async getByUnidadeId(id) {
        const orcamento = await this.orcamentoRepository.getOrcamentoByUnidadeId(id);
        return orcamento;
    }
    async getById(id) {
        const orcamento = await this.orcamentoRepository.findOne(id);
        return orcamento;
    }
    async getOrcamentoByUnidadeId(unidadeid) {
        const orcamento = await this.getByUnidadeId(unidadeid);
        return orcamento;
    }
    async searchAll(result, unidadeId) {
        const search = await this.orcamentoRepository.findSearch(result, unidadeId);
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
], OrcamentoFinderService.prototype, "getOrcamentoByUnidadeId", null);
OrcamentoFinderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [orcamento_repository_1.OrcamentoRepository])
], OrcamentoFinderService);
exports.OrcamentoFinderService = OrcamentoFinderService;
//# sourceMappingURL=orcamento-finder.service.js.map