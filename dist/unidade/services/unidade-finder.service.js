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
exports.UnidadeFinderService = void 0;
const common_1 = require("@nestjs/common");
const empresa_respository_1 = require("../../empresa/repositories/empresa.respository");
const unidade_repository_1 = require("../respositories/unidade.repository");
let UnidadeFinderService = class UnidadeFinderService {
    constructor(unidadeRepository, empresaRepository) {
        this.unidadeRepository = unidadeRepository;
        this.empresaRepository = empresaRepository;
    }
    async getAll() {
        const unidade = await this.unidadeRepository.getAll();
        return unidade;
    }
    async getByName(nomeUnidade) {
        const unidade = await this.unidadeRepository.find({
            nomeUnidade: nomeUnidade
        });
        return unidade;
    }
    async getByUnidadeId(id) {
        const unidade = await this.unidadeRepository.getUnidadeByUnidadeId(id);
        return unidade;
    }
    async getUnidadeEmpresa() {
        const unityEmpresa = [];
        const unidadesEmpresa = await this.unidadeRepository.getAll();
        for (const unidadeEmpresa of unidadesEmpresa) {
            const empresa = await this.empresaRepository.getEmpresa(unidadeEmpresa.idEmpresa);
            unityEmpresa.push({
                id: unidadeEmpresa.id,
                nomeUnidade: unidadeEmpresa.nomeUnidade,
                idEmpresa: unidadeEmpresa.idEmpresa,
                razaoSocial: empresa.razaoSocial,
                status: unidadeEmpresa.status
            });
        }
        return unityEmpresa;
    }
    async getById(id) {
        const unidade = await this.unidadeRepository.findOne(id);
        return unidade;
    }
    async searchAll(result) {
        const unityEmpresa = [];
        const search = await this.unidadeRepository.findSearch(result);
        for (const unidadeEmpresa of search) {
            const empresa = await this.empresaRepository.getEmpresa(unidadeEmpresa.idEmpresa);
            unityEmpresa.push({
                id: unidadeEmpresa.id,
                nomeUnidade: unidadeEmpresa.nomeUnidade,
                idEmpresa: unidadeEmpresa.idEmpresa,
                razaoSocial: empresa.razaoSocial,
                status: unidadeEmpresa.status
            });
        }
        return unityEmpresa;
    }
};
UnidadeFinderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [unidade_repository_1.UnidadeRepository,
        empresa_respository_1.EmpresaRepository])
], UnidadeFinderService);
exports.UnidadeFinderService = UnidadeFinderService;
//# sourceMappingURL=unidade-finder.service.js.map