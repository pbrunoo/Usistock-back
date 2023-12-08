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
exports.HistoricoEstoqueController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const historico_estoque_1 = require("../entities/agreggate/historico-estoque");
const new_historico_estoque_request_1 = require("../requests/historico-estoque/new-historico-estoque.request");
const update_historico_estoque_resquest_1 = require("../requests/historico-estoque/update-historico-estoque.resquest");
const historico_estoque_creator_service_1 = require("../services/historico-estoque/historico-estoque-creator.service");
const historico_estoque_eraser_service_1 = require("../services/historico-estoque/historico-estoque-eraser.service");
const historico_estoque_reader_service_1 = require("../services/historico-estoque/historico-estoque-reader.service");
const historico_estoque_update_service_1 = require("../services/historico-estoque/historico-estoque-update.service");
let HistoricoEstoqueController = class HistoricoEstoqueController {
    constructor(historicoEstoqueCreatorService, historicoEstoqueReaderService, historicoEstoqueEraserService, historicoEstoqueUpdateService) {
        this.historicoEstoqueCreatorService = historicoEstoqueCreatorService;
        this.historicoEstoqueReaderService = historicoEstoqueReaderService;
        this.historicoEstoqueEraserService = historicoEstoqueEraserService;
        this.historicoEstoqueUpdateService = historicoEstoqueUpdateService;
    }
    async create(estoqueId, newHistoricoEstoqueRequest) {
        const historicoEstoque = await this
            .historicoEstoqueCreatorService
            .create(estoqueId, newHistoricoEstoqueRequest);
        return historicoEstoque;
    }
    async update(estoqueId, historicoId, updateHistoricoEstoqueRequest) {
        await this.historicoEstoqueUpdateService.update(estoqueId, historicoId, updateHistoricoEstoqueRequest);
        return;
    }
    async getAll(estoqueId) {
        const historicoEstoque = await this.historicoEstoqueReaderService.getAllHistoricoEstoque(estoqueId);
        return historicoEstoque;
    }
    async delete(estoqueId, historicoId) {
        await this.historicoEstoqueEraserService.erase(estoqueId, historicoId);
    }
};
__decorate([
    common_1.Post(':estoqueId'),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: historico_estoque_1.HistoricoEstoque }),
    __param(0, common_1.Param('estoqueId')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, new_historico_estoque_request_1.NewHistoricoEstoqueRequest]),
    __metadata("design:returntype", Promise)
], HistoricoEstoqueController.prototype, "create", null);
__decorate([
    common_1.Put(':estoqueId/:historicoId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('estoqueId')), __param(1, common_1.Param('historicoId')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_historico_estoque_resquest_1.UpdateHistoricoEstoqueRequest]),
    __metadata("design:returntype", Promise)
], HistoricoEstoqueController.prototype, "update", null);
__decorate([
    common_1.Get(':estoqueId'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [historico_estoque_1.HistoricoEstoque] }),
    __param(0, common_1.Param('estoqueId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HistoricoEstoqueController.prototype, "getAll", null);
__decorate([
    common_1.Delete(':estoqueId/:historicoId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('estoqueId')), __param(1, common_1.Param('historicoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], HistoricoEstoqueController.prototype, "delete", null);
HistoricoEstoqueController = __decorate([
    common_1.Controller('v1/historico/estoque'),
    swagger_1.ApiTags('Estoque'),
    __metadata("design:paramtypes", [historico_estoque_creator_service_1.HistoricoEstoqueCreatorService,
        historico_estoque_reader_service_1.HistoricoEstoqueReaderService,
        historico_estoque_eraser_service_1.HistoricoEstoqueEraserService,
        historico_estoque_update_service_1.HistoricoEstoqueUpdateService])
], HistoricoEstoqueController);
exports.HistoricoEstoqueController = HistoricoEstoqueController;
//# sourceMappingURL=historico-estoque.controllers.js.map