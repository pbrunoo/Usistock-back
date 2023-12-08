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
exports.RetencoesCreatorservice = void 0;
const common_1 = require("@nestjs/common");
const retencoes_1 = require("src/empresa/entities/agreggate/retencoes");
const empresa_respository_1 = require("../../repositories/empresa.respository");
let RetencoesCreatorservice = class RetencoesCreatorservice {
    constructor(empresaRepository) {
        this.empresaRepository = empresaRepository;
    }
    async create(empresaId, newRetencoesRequest) {
        const empresa = await this.empresaRepository.findOne(empresaId);
        const retencoesEmpresaIndex = empresa.retencoes.findIndex(retencoes => retencoes.pis === newRetencoesRequest.pis);
        if (retencoesEmpresaIndex !== -1) {
            const retencoes = new retencoes_1.Retencoes({
                pis: newRetencoesRequest.pis,
                cofins: newRetencoesRequest.cofins,
                iss: newRetencoesRequest.iss,
                inss: newRetencoesRequest.inss,
                irrf: newRetencoesRequest.irrf,
                csll: newRetencoesRequest.csll
            });
            empresa.addRetencoes(retencoes);
            await this.empresaRepository.save(empresa);
            return empresa;
        }
    }
};
RetencoesCreatorservice = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [empresa_respository_1.EmpresaRepository])
], RetencoesCreatorservice);
exports.RetencoesCreatorservice = RetencoesCreatorservice;
//# sourceMappingURL=retencoes-creator.service.js.map