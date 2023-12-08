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
exports.UnidadeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const unity_empresa_dto_1 = require("../dto/unity-empresa.dto");
const unidade_entity_1 = require("../entities/unidade.entity");
const new_unidade_request_1 = require("../requests/new-unidade.request");
const update_unidade_request_1 = require("../requests/update-unidade.request");
const unidade_create_service_1 = require("../services/unidade-create.service");
const unidade_eraser_service_1 = require("../services/unidade-eraser.service");
const unidade_finder_service_1 = require("../services/unidade-finder.service");
const update_unidade_service_1 = require("../services/update-unidade.service");
let UnidadeController = class UnidadeController {
    constructor(createUnidadeService, updateUnidadeService, UnidadeEraserService, UnidadeFinderService) {
        this.createUnidadeService = createUnidadeService;
        this.updateUnidadeService = updateUnidadeService;
        this.UnidadeEraserService = UnidadeEraserService;
        this.UnidadeFinderService = UnidadeFinderService;
    }
    async create(NewUnidadeRequest) {
        const unidade = await this
            .createUnidadeService
            .create(NewUnidadeRequest);
        return unidade;
    }
    async update(id, UpdateUnidadeRequest) {
        await this.updateUnidadeService.update(id, UpdateUnidadeRequest);
    }
    async getAll() {
        const unidade = await this.UnidadeFinderService.getAll();
        return unidade;
    }
    async getByCostumerName(nomeUnidade) {
        const unidade = await this.UnidadeFinderService.getByName(nomeUnidade);
        return unidade;
    }
    async getUnidadeEmpresa() {
        const unidadeEmpresa = await this.UnidadeFinderService.getUnidadeEmpresa();
        return unidadeEmpresa;
    }
    async getSearch(search) {
        const searchs = await this.UnidadeFinderService.searchAll(search);
        return searchs;
    }
    async delete(id, userId) {
        await this.UnidadeEraserService.delete(id, userId);
    }
    async getByUserId(id) {
        const unidade = await this.UnidadeFinderService.getById(id);
        return unidade;
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: unidade_entity_1.UnidadeEntity }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_unidade_request_1.NewUnidadeRequest]),
    __metadata("design:returntype", Promise)
], UnidadeController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_unidade_request_1.UpdateUnidadeRequest]),
    __metadata("design:returntype", Promise)
], UnidadeController.prototype, "update", null);
__decorate([
    common_1.Get('all'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [unidade_entity_1.UnidadeEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnidadeController.prototype, "getAll", null);
__decorate([
    common_1.Get(':nomeUnidade'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: unidade_entity_1.UnidadeEntity }),
    __param(0, common_1.Param('nomeUnidade')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UnidadeController.prototype, "getByCostumerName", null);
__decorate([
    common_1.Get('all/unidadeEmpresa'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: unity_empresa_dto_1.UnityEmpresa }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnidadeController.prototype, "getUnidadeEmpresa", null);
__decorate([
    common_1.Get('sch/:search'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UnidadeController.prototype, "getSearch", null);
__decorate([
    common_1.Delete(':id/:userId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UnidadeController.prototype, "delete", null);
__decorate([
    common_1.Get('unique/:id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: unidade_entity_1.UnidadeEntity }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UnidadeController.prototype, "getByUserId", null);
UnidadeController = __decorate([
    common_1.Controller('v1/unidade'),
    swagger_1.ApiTags('Unidade'),
    __metadata("design:paramtypes", [unidade_create_service_1.CreateUnidadeService,
        update_unidade_service_1.UpdateUnidadeService,
        unidade_eraser_service_1.UnidadeEraserService,
        unidade_finder_service_1.UnidadeFinderService])
], UnidadeController);
exports.UnidadeController = UnidadeController;
//# sourceMappingURL=unidade.controller.js.map