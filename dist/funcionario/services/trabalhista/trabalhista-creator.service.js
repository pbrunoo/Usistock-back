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
exports.TrabalhistaCreatorService = void 0;
const common_1 = require("@nestjs/common");
const trabalhista_1 = require("../../entities/agreggate/trabalhista");
const funcionario_repository_1 = require("../../repositories/funcionario.repository");
const trabalhista_request_1 = require("../../requests/trabalhista/trabalhista.request");
let TrabalhistaCreatorService = class TrabalhistaCreatorService {
    constructor(funcionarioRepository) {
        this.funcionarioRepository = funcionarioRepository;
    }
    async create(funcionarioId, newTrabalhista) {
        const funcionario = await this.funcionarioRepository.findOne(funcionarioId);
        const trabalhistaIndex = funcionario.trabalhista
            .findIndex(trabalhistas => trabalhistas.pis === newTrabalhista.pis);
        if (trabalhistaIndex !== -1) {
            const trabalhista = new trabalhista_1.Trabalhista({
                pis: newTrabalhista.pis,
                dataAdmissao: newTrabalhista.dataAdmissao,
                salarioAdmissao: newTrabalhista.salarioAdmissao,
                salarioAtual: newTrabalhista.salarioAtual,
                funcao: newTrabalhista.funcao,
                empresa: newTrabalhista.empresa,
                empresaAnterior: newTrabalhista.empresaAnterior
            });
            funcionario.addTrabalhista(trabalhista);
            await this.funcionarioRepository.save(funcionario);
            return funcionario;
        }
    }
};
TrabalhistaCreatorService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [funcionario_repository_1.FuncionarioRepository])
], TrabalhistaCreatorService);
exports.TrabalhistaCreatorService = TrabalhistaCreatorService;
//# sourceMappingURL=trabalhista-creator.service.js.map