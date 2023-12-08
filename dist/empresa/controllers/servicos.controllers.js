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
exports.ServicosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const servicos_1 = require("../entities/agreggate/servicos");
const servicos_request_1 = require("../requests/servicos/servicos.request");
const servicos_creator_service_1 = require("../services/servicos/servicos-creator.service");
const servicos_eraser_service_1 = require("../services/servicos/servicos-eraser.service");
const servicos_reader_service_1 = require("../services/servicos/servicos-reader.service");
let ServicosController = class ServicosController {
    constructor(servicosCreateServices, servicosReaderService, servicosEraserService) {
        this.servicosCreateServices = servicosCreateServices;
        this.servicosReaderService = servicosReaderService;
        this.servicosEraserService = servicosEraserService;
    }
    async create(empresaId, newServicosRequest) {
        const servicos = await this
            .servicosCreateServices
            .create(empresaId, newServicosRequest);
        console.log(servicos);
        return servicos;
    }
    async getAll(empresaId) {
        const servicos = await this.servicosReaderService.getAllServicos(empresaId);
        return servicos;
    }
    async delete(empresaId, cnae) {
        await this.servicosEraserService.erase(empresaId, cnae);
    }
};
__decorate([
    common_1.Post(':empresaId'),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: servicos_1.Servicos }),
    __param(0, common_1.Param('empresaId')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, servicos_request_1.NewServicosRequest]),
    __metadata("design:returntype", Promise)
], ServicosController.prototype, "create", null);
__decorate([
    common_1.Get(':empresaId'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [servicos_1.Servicos] }),
    __param(0, common_1.Param('empresaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServicosController.prototype, "getAll", null);
__decorate([
    common_1.Delete(':empresaId/:cnae'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('empresaId')), __param(1, common_1.Param('cnae')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], ServicosController.prototype, "delete", null);
ServicosController = __decorate([
    common_1.Controller('v1/empresa/servicos'),
    swagger_1.ApiTags('Empresa'),
    __metadata("design:paramtypes", [servicos_creator_service_1.ServicosCreatorService,
        servicos_reader_service_1.ServicosReaderService,
        servicos_eraser_service_1.ServicosEraserService])
], ServicosController);
exports.ServicosController = ServicosController;
//# sourceMappingURL=servicos.controllers.js.map