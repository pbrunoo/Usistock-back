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
exports.FornecedorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const new_fornecedor_1 = require("../requests/new-fornecedor");
const fornecedor_create_service_1 = require("../services/fornecedor-create.service");
const fornecedor_eraser_service_1 = require("../services/fornecedor-eraser.service");
const fornecedor_finder_service_1 = require("../services/fornecedor-finder.service");
const update_fornecedor_service_1 = require("../services/update-fornecedor.service");
const fornecedor_entity_1 = require("../entities/fornecedor.entity");
const update_request_1 = require("../requests/update-request");
let FornecedorController = class FornecedorController {
    constructor(createFornecedorService, updateFornecedorService, fornecedorEraserService, fornecedorFinderService) {
        this.createFornecedorService = createFornecedorService;
        this.updateFornecedorService = updateFornecedorService;
        this.fornecedorEraserService = fornecedorEraserService;
        this.fornecedorFinderService = fornecedorFinderService;
    }
    async create(NewFornecedorRequest) {
        const fornecedor = await this
            .createFornecedorService
            .create(NewFornecedorRequest);
        return fornecedor;
    }
    async update(id, UpdateFornecedorRequest) {
        await this.updateFornecedorService.update(id, UpdateFornecedorRequest);
    }
    async getAll() {
        const fornecedores = await this.fornecedorFinderService.getAll();
        return fornecedores;
    }
    async getByCostumerName(razaoSocial) {
        const fornecedor = await this.fornecedorFinderService.getByName(razaoSocial);
        return fornecedor;
    }
    async getByClienteId(id) {
        const fornecedor = await this.fornecedorFinderService.getById(id);
        return fornecedor;
    }
    async getFornecedorByUnidadeId(unidadeid) {
        const fornecedor = await this.fornecedorFinderService.getByUnidadeId(unidadeid);
        return fornecedor;
    }
    async getSearch(search, unidadeid) {
        const searchs = await this.fornecedorFinderService.searchAll(search, unidadeid);
        return searchs;
    }
    async delete(id, userId) {
        await this.fornecedorEraserService.delete(id, userId);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: fornecedor_entity_1.FornecedorEntity }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_fornecedor_1.NewFornecedorRequest]),
    __metadata("design:returntype", Promise)
], FornecedorController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_request_1.UpdateFornecedorRequest]),
    __metadata("design:returntype", Promise)
], FornecedorController.prototype, "update", null);
__decorate([
    common_1.Get('all'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [fornecedor_entity_1.FornecedorEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FornecedorController.prototype, "getAll", null);
__decorate([
    common_1.Get(':razaoSocial'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: fornecedor_entity_1.FornecedorEntity }),
    __param(0, common_1.Param('razaoSocial')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FornecedorController.prototype, "getByCostumerName", null);
__decorate([
    common_1.Get('unique/:id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: fornecedor_entity_1.FornecedorEntity }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FornecedorController.prototype, "getByClienteId", null);
__decorate([
    common_1.Get('all/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FornecedorController.prototype, "getFornecedorByUnidadeId", null);
__decorate([
    common_1.Get('sch/:search/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('search')), __param(1, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FornecedorController.prototype, "getSearch", null);
__decorate([
    common_1.Delete(':id/:userId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FornecedorController.prototype, "delete", null);
FornecedorController = __decorate([
    common_1.Controller('v1/fornecedor'),
    swagger_1.ApiTags('Fornecedor'),
    __metadata("design:paramtypes", [fornecedor_create_service_1.CreateFornecedorService,
        update_fornecedor_service_1.UpdateFornecedorService,
        fornecedor_eraser_service_1.FornecedorEraserService,
        fornecedor_finder_service_1.FornecedorFinderService])
], FornecedorController);
exports.FornecedorController = FornecedorController;
//# sourceMappingURL=fornecedor.controller.js.map