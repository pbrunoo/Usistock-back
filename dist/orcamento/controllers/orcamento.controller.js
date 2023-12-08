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
exports.OrcamentoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const orcamento_entity_1 = require("../entities/orcamento.entity");
const new_orcamento_request_1 = require("../requests/new-orcamento-request");
const update_orcamento_request_1 = require("../requests/update-orcamento.request");
const orcamento_create_service_1 = require("../services/orcamento-create.service");
const orcamento_eraser_service_1 = require("../services/orcamento-eraser.service");
const orcamento_finder_service_1 = require("../services/orcamento-finder.service");
const update_orcamento_service_1 = require("../services/update-orcamento.service");
let OrcamentoController = class OrcamentoController {
    constructor(createOrcamentoService, updateOrcamentoService, orcamentoEraserService, orcamentoFinderService) {
        this.createOrcamentoService = createOrcamentoService;
        this.updateOrcamentoService = updateOrcamentoService;
        this.orcamentoEraserService = orcamentoEraserService;
        this.orcamentoFinderService = orcamentoFinderService;
    }
    async create(newOrcamentoRequest) {
        const orcamento = await this
            .createOrcamentoService
            .create(newOrcamentoRequest);
        return orcamento;
    }
    async update(id, updateOrcamentoRequest) {
        await this.updateOrcamentoService.update(id, updateOrcamentoRequest);
    }
    async getAll() {
        const orcamento = await this.orcamentoFinderService.getAll();
        return orcamento;
    }
    async getByOrcamentoId(id) {
        const orcamento = await this.orcamentoFinderService.getById(id);
        return orcamento;
    }
    async getOrcamentoByUnidadeId(unidadeid) {
        const orcamento = await this.orcamentoFinderService.getByUnidadeId(unidadeid);
        return orcamento;
    }
    async getSearch(search, unidadeid) {
        const searchs = await this.orcamentoFinderService.searchAll(search, unidadeid);
        return searchs;
    }
    async delete(id, userId) {
        await this.orcamentoEraserService.delete(id, userId);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: orcamento_entity_1.OrcamentoEntity }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_orcamento_request_1.NewOrcamentoRequest]),
    __metadata("design:returntype", Promise)
], OrcamentoController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_orcamento_request_1.UpdateOrcamentoRequest]),
    __metadata("design:returntype", Promise)
], OrcamentoController.prototype, "update", null);
__decorate([
    common_1.Get('all'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [orcamento_entity_1.OrcamentoEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrcamentoController.prototype, "getAll", null);
__decorate([
    common_1.Get('unique/:id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: orcamento_entity_1.OrcamentoEntity }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrcamentoController.prototype, "getByOrcamentoId", null);
__decorate([
    common_1.Get('all/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrcamentoController.prototype, "getOrcamentoByUnidadeId", null);
__decorate([
    common_1.Get('sch/:search/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('search')), __param(1, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], OrcamentoController.prototype, "getSearch", null);
__decorate([
    common_1.Delete(':id/:userId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], OrcamentoController.prototype, "delete", null);
OrcamentoController = __decorate([
    common_1.Controller('v1/orcamento'),
    swagger_1.ApiTags('Orcamento'),
    __metadata("design:paramtypes", [orcamento_create_service_1.CreateOrcamentoService,
        update_orcamento_service_1.UpdateOrcamentoService,
        orcamento_eraser_service_1.OrcamentoEraserService,
        orcamento_finder_service_1.OrcamentoFinderService])
], OrcamentoController);
exports.OrcamentoController = OrcamentoController;
//# sourceMappingURL=orcamento.controller.js.map