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
exports.EmpresaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const empresa_entity_1 = require("../entities/empresa.entity");
const new_empresa_request_1 = require("../requests/new-empresa.request");
const update_empresa_request_1 = require("../requests/update-empresa.request");
const empresa_create_service_1 = require("../services/empresa-create.service");
const empresa_eraser_service_1 = require("../services/empresa-eraser.service");
const empresa_finder_service_1 = require("../services/empresa-finder.service");
const update_empresa_service_1 = require("../services/update-empresa.service");
let EmpresaController = class EmpresaController {
    constructor(createEmpresaService, updateEmpesaService, EmpresaEraserService, EmpresaFinderService) {
        this.createEmpresaService = createEmpresaService;
        this.updateEmpesaService = updateEmpesaService;
        this.EmpresaEraserService = EmpresaEraserService;
        this.EmpresaFinderService = EmpresaFinderService;
    }
    async create(NewEmpresaRequest) {
        const empresa = await this
            .createEmpresaService
            .create(NewEmpresaRequest);
        return empresa;
    }
    async update(id, UpdateEmpresaRequest) {
        const empresa = await this.updateEmpesaService.update(id, UpdateEmpresaRequest);
        return empresa;
    }
    async getAll() {
        const empresa = await this.EmpresaFinderService.getAll();
        return empresa;
    }
    async getByCostumerName(razaoSocial) {
        const empresa = await this.EmpresaFinderService.getByName(razaoSocial);
        return empresa;
    }
    async getByEmpresaId(id) {
        const empresa = await this.EmpresaFinderService.getById(id);
        return empresa;
    }
    async getSearch(search) {
        const searchs = await this.EmpresaFinderService.searchAllEmpresa(search);
        return searchs;
    }
    async delete(id, userId) {
        await this.EmpresaEraserService.delete(id, userId);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: empresa_entity_1.EmpresaEntity }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_empresa_request_1.NewEmpresaRequest]),
    __metadata("design:returntype", Promise)
], EmpresaController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_empresa_request_1.UpdateEmpresaRequest]),
    __metadata("design:returntype", Promise)
], EmpresaController.prototype, "update", null);
__decorate([
    common_1.Get('all'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [empresa_entity_1.EmpresaEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmpresaController.prototype, "getAll", null);
__decorate([
    common_1.Get(':razaoSocial'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: empresa_entity_1.EmpresaEntity }),
    __param(0, common_1.Param('razaoSocial')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmpresaController.prototype, "getByCostumerName", null);
__decorate([
    common_1.Get('unique/:id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: empresa_entity_1.EmpresaEntity }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmpresaController.prototype, "getByEmpresaId", null);
__decorate([
    common_1.Get('sch/:search'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmpresaController.prototype, "getSearch", null);
__decorate([
    common_1.Delete(':id/:userId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], EmpresaController.prototype, "delete", null);
EmpresaController = __decorate([
    common_1.Controller('v1/empresa'),
    swagger_1.ApiTags('Empresa'),
    __metadata("design:paramtypes", [empresa_create_service_1.CreateEmpresaService,
        update_empresa_service_1.UpdateEmpresaService,
        empresa_eraser_service_1.EmpresaEraserService,
        empresa_finder_service_1.EmpresaFinderService])
], EmpresaController);
exports.EmpresaController = EmpresaController;
//# sourceMappingURL=empresa.controller.js.map