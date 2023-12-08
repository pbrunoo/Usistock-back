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
exports.EmpresaFinderService = void 0;
const common_1 = require("@nestjs/common");
const empresa_respository_1 = require("../repositories/empresa.respository");
let EmpresaFinderService = class EmpresaFinderService {
    constructor(empresaRepository) {
        this.empresaRepository = empresaRepository;
    }
    async getAll() {
        const empresa = await this.empresaRepository.getAll();
        console.log(empresa);
        return empresa;
    }
    async getByName(razaoSocial) {
        const empresas = await this.empresaRepository.find({
            razaoSocial: razaoSocial
        });
        return razaoSocial;
    }
    async getById(id) {
        const empresa = await this.empresaRepository.findOne(id);
        return empresa;
    }
    async searchAllEmpresa(result) {
        const search = await this.empresaRepository.findSearch(result);
        return search;
    }
};
EmpresaFinderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [empresa_respository_1.EmpresaRepository])
], EmpresaFinderService);
exports.EmpresaFinderService = EmpresaFinderService;
//# sourceMappingURL=empresa-finder.service.js.map