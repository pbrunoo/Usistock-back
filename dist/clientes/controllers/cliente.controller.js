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
exports.ClienteController = void 0;
const common_1 = require("@nestjs/common");
const cliente_entity_1 = require("../entities/cliente.entity");
const new_clientes_1 = require("../requests/new-clientes");
const swagger_1 = require("@nestjs/swagger");
const update_cliente_service_1 = require("../services/update-cliente.service");
const cliente_eraser_service_1 = require("../services/cliente-eraser.service");
const cliente_finder_service_1 = require("../services/cliente-finder.service");
const update_cliente_1 = require("../requests/update-cliente");
const create_cliente_service_1 = require("../services/create-cliente.service");
let ClienteController = class ClienteController {
    constructor(createClienteService, updateClienteService, clienteEraserService, clienteFinderService) {
        this.createClienteService = createClienteService;
        this.updateClienteService = updateClienteService;
        this.clienteEraserService = clienteEraserService;
        this.clienteFinderService = clienteFinderService;
    }
    async create(NewClienteRequest) {
        const cliente = await this
            .createClienteService
            .create(NewClienteRequest);
        return cliente;
    }
    async update(id, UpdateClienteRequest) {
        await this.updateClienteService.update(id, UpdateClienteRequest);
    }
    async getAll() {
        const clientes = await this.clienteFinderService.getAll();
        return clientes;
    }
    async getByCostumerName(razaoSocial) {
        const cliente = await this.clienteFinderService.getByName(razaoSocial);
        return cliente;
    }
    async getByClienteId(id) {
        const cliente = await this.clienteFinderService.getById(id);
        return cliente;
    }
    async getUsersByUnidadeId(unidadeid) {
        const cliente = await this.clienteFinderService.getByUnidadeId(unidadeid);
        return cliente;
    }
    async getSearch(search, unidadeid) {
        const searchs = await this.clienteFinderService.searchAll(search, unidadeid);
        return searchs;
    }
    async delete(id, userId) {
        await this.clienteEraserService.delete(id, userId);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: cliente_entity_1.ClienteEntity }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_clientes_1.NewClienteRequest]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cliente_1.UpdateClienteRequest]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "update", null);
__decorate([
    common_1.Get('all'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [cliente_entity_1.ClienteEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getAll", null);
__decorate([
    common_1.Get(':razaoSocial'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: cliente_entity_1.ClienteEntity }),
    __param(0, common_1.Param('razaoSocial')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getByCostumerName", null);
__decorate([
    common_1.Get('unique/:id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: cliente_entity_1.ClienteEntity }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getByClienteId", null);
__decorate([
    common_1.Get('all/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getUsersByUnidadeId", null);
__decorate([
    common_1.Get('sch/:search/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('search')), __param(1, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getSearch", null);
__decorate([
    common_1.Delete(':id/:userId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "delete", null);
ClienteController = __decorate([
    common_1.Controller('v1/cliente'),
    swagger_1.ApiTags('Cliente'),
    __metadata("design:paramtypes", [create_cliente_service_1.CreateClienteService,
        update_cliente_service_1.UpdateClienteService,
        cliente_eraser_service_1.ClienteEraserService,
        cliente_finder_service_1.ClienteFinderService])
], ClienteController);
exports.ClienteController = ClienteController;
//# sourceMappingURL=cliente.controller.js.map