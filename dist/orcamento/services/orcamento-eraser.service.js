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
exports.OrcamentoEraserService = void 0;
const common_1 = require("@nestjs/common");
const orcamento_repository_1 = require("../respositories/orcamento.repository");
let OrcamentoEraserService = class OrcamentoEraserService {
    constructor(orcamentoRepository) {
        this.orcamentoRepository = orcamentoRepository;
    }
    async delete(id, userId) {
        const orcamento = await this.orcamentoRepository.findOne(id);
        orcamento.status = 0;
        orcamento.deletedUserId = userId;
        orcamento.statusPedido = "Cancelado";
        orcamento.deletedAt = new Date();
        await this.orcamentoRepository.save(orcamento);
    }
};
OrcamentoEraserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [orcamento_repository_1.OrcamentoRepository])
], OrcamentoEraserService);
exports.OrcamentoEraserService = OrcamentoEraserService;
//# sourceMappingURL=orcamento-eraser.service.js.map