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
exports.ConsumoController = void 0;
const unity_consumo_dto_1 = require("./../dto/unity-consumo.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const consumo_entity_1 = require("../entities/consumo.entity");
const new_consumo_1 = require("../requests/new-consumo");
const update_request_1 = require("../requests/update-request");
const consumo_create_service_1 = require("../services/consumo-create.service");
const consumo_eraser_service_1 = require("../services/consumo-eraser.service");
const consumo_finder_service_1 = require("../services/consumo-finder.service");
const update_consumo_service_1 = require("../services/update-consumo.service");
let ConsumoController = class ConsumoController {
    constructor(createconsumoService, updateConsumoService, consumoEraserService, consumoFinderService) {
        this.createconsumoService = createconsumoService;
        this.updateConsumoService = updateConsumoService;
        this.consumoEraserService = consumoEraserService;
        this.consumoFinderService = consumoFinderService;
    }
    async create(NewConsumoRequest) {
        const consumo = await this
            .createconsumoService
            .create(NewConsumoRequest);
        return consumo;
    }
    async update(id, UpdateConsumoRequest) {
        await this.updateConsumoService.update(id, UpdateConsumoRequest);
    }
    async getAll() {
        const consumo = await this.consumoFinderService.getAll();
        return consumo;
    }
    async getFornecedor(unidadeid) {
        const consumoFornecedor = await this.consumoFinderService.getFornecedor(unidadeid);
        return consumoFornecedor;
    }
    async getByCostumerName(produto) {
        const consumo = await this.consumoFinderService.getByName(produto);
        return consumo;
    }
    async getByConsumoId(id) {
        const consumo = await this.consumoFinderService.getById(id);
        return consumo;
    }
    async getUsersByUnidadeId(unidadeid) {
        const consumo = await this.consumoFinderService.getByUnidadeId(unidadeid);
        return consumo;
    }
    async getSearch(search, unidadeid) {
        const searchs = await this.consumoFinderService.searchAll(search, unidadeid);
        return searchs;
    }
    async delete(id, userId) {
        await this.consumoEraserService.delete(id, userId);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: consumo_entity_1.ConsumoEntity }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_consumo_1.NewConsumoRequest]),
    __metadata("design:returntype", Promise)
], ConsumoController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_request_1.UpdateConsumoRequest]),
    __metadata("design:returntype", Promise)
], ConsumoController.prototype, "update", null);
__decorate([
    common_1.Get('all'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [consumo_entity_1.ConsumoEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConsumoController.prototype, "getAll", null);
__decorate([
    common_1.Get('all/consumoFornecedor/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: unity_consumo_dto_1.UnityConsumo }),
    __param(0, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConsumoController.prototype, "getFornecedor", null);
__decorate([
    common_1.Get(':produto'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: consumo_entity_1.ConsumoEntity }),
    __param(0, common_1.Param('produto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConsumoController.prototype, "getByCostumerName", null);
__decorate([
    common_1.Get('unique/:id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: consumo_entity_1.ConsumoEntity }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConsumoController.prototype, "getByConsumoId", null);
__decorate([
    common_1.Get('all/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConsumoController.prototype, "getUsersByUnidadeId", null);
__decorate([
    common_1.Get('sch/:search/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('search')), __param(1, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ConsumoController.prototype, "getSearch", null);
__decorate([
    common_1.Delete(':id/:userId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ConsumoController.prototype, "delete", null);
ConsumoController = __decorate([
    common_1.Controller('v1/consumo'),
    swagger_1.ApiTags('Consumo'),
    __metadata("design:paramtypes", [consumo_create_service_1.CreateConsumoService,
        update_consumo_service_1.UpdateConsumoService,
        consumo_eraser_service_1.ConsumoEraserService,
        consumo_finder_service_1.ConsumoFinderService])
], ConsumoController);
exports.ConsumoController = ConsumoController;
//# sourceMappingURL=consumo.controllers.js.map