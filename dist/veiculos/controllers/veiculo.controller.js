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
exports.VeiculoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const veiculo_entity_1 = require("../entities/veiculo.entity");
const new_veiculo_1 = require("../requests/new-veiculo");
const update_veiculo_1 = require("../requests/update-veiculo");
const create_veiculo_service_1 = require("../services/create-veiculo.service");
const update_veiculo_service_1 = require("../services/update-veiculo.service");
const veiculo_eraser_service_1 = require("../services/veiculo-eraser.service");
const veiculo_finder_service_1 = require("../services/veiculo-finder.service");
let VeiculoController = class VeiculoController {
    constructor(createVeiculoService, updateVeiculoService, veiculoEraserService, veiculoFinderService) {
        this.createVeiculoService = createVeiculoService;
        this.updateVeiculoService = updateVeiculoService;
        this.veiculoEraserService = veiculoEraserService;
        this.veiculoFinderService = veiculoFinderService;
    }
    async create(NewVeiculoRequest) {
        const veiculo = await this
            .createVeiculoService
            .create(NewVeiculoRequest);
        return veiculo;
    }
    async update(id, updateVeiculoRequest) {
        await this.updateVeiculoService.update(id, updateVeiculoRequest);
    }
    async getAll() {
        const veiculos = await this.veiculoFinderService.getAll();
        return veiculos;
    }
    async getByVeiculoId(id) {
        const veiculo = await this.veiculoFinderService.getById(id);
        return veiculo;
    }
    async getVeiculoByUnidadeId(unidadeid) {
        const veiculo = await this.veiculoFinderService.getByUnidadeId(unidadeid);
        return veiculo;
    }
    async getSearch(search, unidadeid) {
        const searchs = await this.veiculoFinderService.searchAll(search, unidadeid);
        return searchs;
    }
    async delete(id, userId) {
        await this.veiculoEraserService.delete(id, userId);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: veiculo_entity_1.VeiculoEntity }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_veiculo_1.NewVeiculoRequest]),
    __metadata("design:returntype", Promise)
], VeiculoController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_veiculo_1.UpdateVeiculoRequest]),
    __metadata("design:returntype", Promise)
], VeiculoController.prototype, "update", null);
__decorate([
    common_1.Get('all'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [veiculo_entity_1.VeiculoEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VeiculoController.prototype, "getAll", null);
__decorate([
    common_1.Get('unique/:id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: veiculo_entity_1.VeiculoEntity }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VeiculoController.prototype, "getByVeiculoId", null);
__decorate([
    common_1.Get('all/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VeiculoController.prototype, "getVeiculoByUnidadeId", null);
__decorate([
    common_1.Get('sch/:search/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('search')), __param(1, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VeiculoController.prototype, "getSearch", null);
__decorate([
    common_1.Delete(':id/:userId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VeiculoController.prototype, "delete", null);
VeiculoController = __decorate([
    common_1.Controller('v1/veiculo'),
    swagger_1.ApiTags('Veiculo'),
    __metadata("design:paramtypes", [create_veiculo_service_1.CreateVeiculoService,
        update_veiculo_service_1.UpdateVeiculoService,
        veiculo_eraser_service_1.VeiculoEraserService,
        veiculo_finder_service_1.VeiculoFinderService])
], VeiculoController);
exports.VeiculoController = VeiculoController;
//# sourceMappingURL=veiculo.controller.js.map