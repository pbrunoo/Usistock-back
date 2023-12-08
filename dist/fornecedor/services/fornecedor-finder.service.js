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
exports.FornecedorFinderService = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const fornecedor_repository_1 = require("../repositories/fornecedor.repository");
let FornecedorFinderService = class FornecedorFinderService {
    constructor(fornecedorRepository) {
        this.fornecedorRepository = fornecedorRepository;
    }
    async getAll() {
        const fornecedores = await this.fornecedorRepository.getAll();
        return fornecedores;
    }
    async getByName(razaoSocial) {
        const fornecedores = await this.fornecedorRepository.find({
            razaoSocial: razaoSocial
        });
        return fornecedores;
    }
    async getById(id) {
        const fornecedor = await this.fornecedorRepository.findOne(id);
        return fornecedor;
    }
    async getByUnidadeId(id) {
        const fornecedor = await this.fornecedorRepository.getFornecedorByUnidadeId(id);
        return fornecedor;
    }
    async getFornecedorByUnidadeId(unidadeid) {
        const fornecedor = await this.getByUnidadeId(unidadeid);
        return fornecedor;
    }
    async searchAll(result, unidadeid) {
        const search = await this.fornecedorRepository.findSearch(result, unidadeid);
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
], FornecedorFinderService.prototype, "getFornecedorByUnidadeId", null);
FornecedorFinderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [fornecedor_repository_1.FornecedorRepository])
], FornecedorFinderService);
exports.FornecedorFinderService = FornecedorFinderService;
//# sourceMappingURL=fornecedor-finder.service.js.map