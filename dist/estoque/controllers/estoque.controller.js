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
exports.EstoqueController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const estoque_entity_1 = require("../entities/estoque.entity");
const new_estoque_request_1 = require("../requests/new-estoque.request");
const update_estoque_request_1 = require("../requests/update-estoque-request");
const estoque_create_service_1 = require("../services/estoque-create.service");
const estoque_finder_service_1 = require("../services/estoque-finder.service");
const estoque_eraser_service_1 = require("../services/estoque-eraser.service");
const update_estoque_service_1 = require("../services/update-estoque.service");
let EstoqueController = class EstoqueController {
    constructor(createEstoqueService, updateEstoqueService, estoqueEraserService, estoqueFinderService) {
        this.createEstoqueService = createEstoqueService;
        this.updateEstoqueService = updateEstoqueService;
        this.estoqueEraserService = estoqueEraserService;
        this.estoqueFinderService = estoqueFinderService;
    }
    async create(NewEstoqueRequest) {
        const estoque = await this
            .createEstoqueService
            .create(NewEstoqueRequest);
        return estoque;
    }
    async update(id, updateEstoqueRequest) {
        await this.updateEstoqueService.update(id, updateEstoqueRequest);
    }
    async getAll() {
        const estoque = await this.estoqueFinderService.getAll();
        return estoque;
    }
    async getByEstoqueId(id) {
        const estoque = await this.estoqueFinderService.getById(id);
        return estoque;
    }
    async getEstoqueByUnidadeId(unidadeid) {
        const estoque = await this.estoqueFinderService.getByUnidadeId(unidadeid);
        return estoque;
    }
    async getSearch(search, unidadeid) {
        const searchs = await this.estoqueFinderService.searchAll(search, unidadeid);
        return searchs;
    }
    async delete(id, userId) {
        await this.estoqueEraserService.delete(id, userId);
    }
    async updateOrcamento(produtoId, total) {
        await this.updateEstoqueService.updateOrcamento(produtoId, total);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: estoque_entity_1.EstoqueEntity }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_estoque_request_1.NewEstoqueRequest]),
    __metadata("design:returntype", Promise)
], EstoqueController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_estoque_request_1.UpdateEstoqueRequest]),
    __metadata("design:returntype", Promise)
], EstoqueController.prototype, "update", null);
__decorate([
    common_1.Get('all'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [estoque_entity_1.EstoqueEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EstoqueController.prototype, "getAll", null);
__decorate([
    common_1.Get('unique/:id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: estoque_entity_1.EstoqueEntity }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EstoqueController.prototype, "getByEstoqueId", null);
__decorate([
    common_1.Get('all/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EstoqueController.prototype, "getEstoqueByUnidadeId", null);
__decorate([
    common_1.Get('sch/:search/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('search')), __param(1, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], EstoqueController.prototype, "getSearch", null);
__decorate([
    common_1.Delete(':id/:userId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], EstoqueController.prototype, "delete", null);
__decorate([
    common_1.Put(':produtoId/:total'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('produtoId')), __param(1, common_1.Param('total')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], EstoqueController.prototype, "updateOrcamento", null);
EstoqueController = __decorate([
    common_1.Controller('v1/estoque'),
    swagger_1.ApiTags('Estoque'),
    __metadata("design:paramtypes", [estoque_create_service_1.CreateEstoqueService,
        update_estoque_service_1.UpdateEstoqueService,
        estoque_eraser_service_1.EstoqueEraserService,
        estoque_finder_service_1.EstoqueFinderService])
], EstoqueController);
exports.EstoqueController = EstoqueController;
//# sourceMappingURL=estoque.controller.js.map