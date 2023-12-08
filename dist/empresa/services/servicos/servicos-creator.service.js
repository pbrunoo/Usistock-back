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
exports.ServicosCreatorService = void 0;
const common_1 = require("@nestjs/common");
const servicos_1 = require("../../entities/agreggate/servicos");
const empresa_respository_1 = require("../../repositories/empresa.respository");
const servicos_request_1 = require("../../requests/servicos/servicos.request");
let ServicosCreatorService = class ServicosCreatorService {
    constructor(empresaRepository) {
        this.empresaRepository = empresaRepository;
    }
    async create(empresaId, newServicosRequest) {
        const empresa = await this.empresaRepository.findOne(empresaId);
        const servicosEmpresaIndex = empresa.servicos.findIndex(servicos => servicos.cnae === newServicosRequest.cnae);
        if (servicosEmpresaIndex === -1) {
            const servicos = new servicos_1.Servicos({
                cnae: newServicosRequest.cnae,
                itemLc: newServicosRequest.itemLc,
                ativMuni: newServicosRequest.ativMuni,
            });
            empresa.addServicos(servicos);
            await this.empresaRepository.save(empresa);
            return empresa;
        }
    }
};
ServicosCreatorService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [empresa_respository_1.EmpresaRepository])
], ServicosCreatorService);
exports.ServicosCreatorService = ServicosCreatorService;
//# sourceMappingURL=servicos-creator.service.js.map