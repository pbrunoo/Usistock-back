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
exports.PedidoControllers = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pedido_entity_1 = require("../entities/pedido.entity");
const new_pedido_request_1 = require("../requets/new-pedido.request");
const update_pedido_resquest_1 = require("../requets/update-pedido.resquest");
const pedido_create_service_1 = require("../services/pedido-create.service");
const pedido_eraser_service_1 = require("../services/pedido-eraser.service");
const pedido_finder_service_1 = require("../services/pedido-finder.service");
const update_pedido_service_1 = require("../services/update-pedido.service");
let PedidoControllers = class PedidoControllers {
    constructor(createPedidoService, updatePedidoService, pedidoEraserService, pedidoFinderService) {
        this.createPedidoService = createPedidoService;
        this.updatePedidoService = updatePedidoService;
        this.pedidoEraserService = pedidoEraserService;
        this.pedidoFinderService = pedidoFinderService;
    }
    async create(newPedidoRequest) {
        const pedido = await this
            .createPedidoService
            .create(newPedidoRequest);
        return pedido;
    }
    async update(id, updatePedidoRequest) {
        await this.updatePedidoService.update(id, updatePedidoRequest);
    }
    async getAll() {
        const pedido = await this.pedidoFinderService.getAll();
        return pedido;
    }
    async getByPedidoId(id) {
        const pedido = await this.pedidoFinderService.getById(id);
        return pedido;
    }
    async getPedidoByUnidadeId(unidadeid) {
        const pedido = await this.pedidoFinderService.getByUnidadeId(unidadeid);
        return pedido;
    }
    async delete(id, userId) {
        await this.pedidoEraserService.delete(id, userId);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: pedido_entity_1.PedidoEntity }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_pedido_request_1.NewPedidoRequest]),
    __metadata("design:returntype", Promise)
], PedidoControllers.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pedido_resquest_1.UpdatePedidoRequest]),
    __metadata("design:returntype", Promise)
], PedidoControllers.prototype, "update", null);
__decorate([
    common_1.Get('all'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [pedido_entity_1.PedidoEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PedidoControllers.prototype, "getAll", null);
__decorate([
    common_1.Get('unique/:id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: pedido_entity_1.PedidoEntity }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PedidoControllers.prototype, "getByPedidoId", null);
__decorate([
    common_1.Get('all/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PedidoControllers.prototype, "getPedidoByUnidadeId", null);
__decorate([
    common_1.Delete(':id/:userId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PedidoControllers.prototype, "delete", null);
PedidoControllers = __decorate([
    common_1.Controller('v1/pedido'),
    swagger_1.ApiTags('Pedido'),
    __metadata("design:paramtypes", [pedido_create_service_1.CreatePedidoService,
        update_pedido_service_1.UpdatePedidoService,
        pedido_eraser_service_1.PedidoEraserService,
        pedido_finder_service_1.PedidoFinderService])
], PedidoControllers);
exports.PedidoControllers = PedidoControllers;
//# sourceMappingURL=pedido.controller.js.map