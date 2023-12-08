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
exports.FuncionarioFinderService = void 0;
const empresa_respository_1 = require("../../empresa/repositories/empresa.respository");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const funcionario_repository_1 = require("../repositories/funcionario.repository");
let FuncionarioFinderService = class FuncionarioFinderService {
    constructor(funcionarioRepository, empresaRepository) {
        this.funcionarioRepository = funcionarioRepository;
        this.empresaRepository = empresaRepository;
    }
    async getAll() {
        const funcionario = await this.funcionarioRepository.getAll();
        return funcionario;
    }
    async getByName(nomeCompleto) {
        const funcionario = await this.funcionarioRepository.find({
            nomeCompleto: nomeCompleto
        });
        return funcionario;
    }
    async getById(id) {
        const funcionario = await this.funcionarioRepository.findOne(id);
        return funcionario;
    }
    async getByUnidadeId(id) {
        const funcionario = await this.funcionarioRepository.getFuncionarioByUnidadeId(id);
        return funcionario;
    }
    async getFuncionarioByUnidadeId(unidadeid) {
        const funcionario = await this.getFuncionarioByUnidadeId(unidadeid);
        return funcionario;
    }
    async searchAll(result) {
        const search = await this.funcionarioRepository.findSearch(result);
        return search;
    }
    async getFuncionarioEmpresa(idFuncionario) {
        const funcionario = await this.funcionarioRepository.findOne(idFuncionario);
        const unityEmpresa = [];
        if (!funcionario.trabalhista) {
            return unityEmpresa;
        }
        const empresas = await this.funcionarioRepository.getTrabalhistaByEmpresa(funcionario.trabalhista.map(id => id.empresa));
        const empresaIds = empresas.reduce((empresaId, empresas) => [
            ...empresaId,
            ...empresas.empresa,
            ...empresas.funcao
        ], []);
        const uniqueEmpresasIds = [...new Set(empresaIds)];
        console.log(uniqueEmpresasIds);
        return uniqueEmpresasIds;
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
], FuncionarioFinderService.prototype, "getFuncionarioByUnidadeId", null);
FuncionarioFinderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [funcionario_repository_1.FuncionarioRepository,
        empresa_respository_1.EmpresaRepository])
], FuncionarioFinderService);
exports.FuncionarioFinderService = FuncionarioFinderService;
//# sourceMappingURL=funcionario-finder.service.js.map