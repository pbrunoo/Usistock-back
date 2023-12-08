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
exports.ItensPedidoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const itens_pedido_1 = require("../entities/agreggates/itens-pedido");
const new_itens_pedidos_request_1 = require("../requets/itens-pedido/new-itens-pedidos.request");
const update_itens_pedidos_request_1 = require("../requets/itens-pedido/update-itens-pedidos.request");
const itens_pedido_update_service_1 = require("../services/itens-pedido-update.service");
const itens_pedido_creator_service_1 = require("../services/itens-pedido/itens-pedido-creator.service");
const itens_pedido_eraser_service_1 = require("../services/itens-pedido/itens-pedido-eraser.service");
const itens_pedido_reader_service_1 = require("../services/itens-pedido/itens-pedido-reader.service");
let ItensPedidoController = class ItensPedidoController {
    constructor(itensPedidoCreatorService, itensPedidoReaderService, itensPedidoEraserService, itensPedidoUpdateService) {
        this.itensPedidoCreatorService = itensPedidoCreatorService;
        this.itensPedidoReaderService = itensPedidoReaderService;
        this.itensPedidoEraserService = itensPedidoEraserService;
        this.itensPedidoUpdateService = itensPedidoUpdateService;
    }
    async create(produtoId, newItensPedidosRequest) {
        const itensPedido = await this
            .itensPedidoCreatorService
            .create(produtoId, newItensPedidosRequest);
        return itensPedido;
    }
    async update(pedidoId, itensId, updateItensPedidosRequest) {
        await this.itensPedidoUpdateService.update(pedidoId, itensId, updateItensPedidosRequest);
        return;
    }
    async getAll(pedidoId) {
        const itensPedido = await this.itensPedidoReaderService.getAllItensPedido(pedidoId);
        return itensPedido;
    }
    async delete(pedidoId, itensId) {
        await this.itensPedidoEraserService.erase(pedidoId, itensId);
    }
};
__decorate([
    common_1.Post(':produtoId'),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: itens_pedido_1.ItensPedido }),
    __param(0, common_1.Param('produtoId')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, new_itens_pedidos_request_1.NewItensPedidosRequest]),
    __metadata("design:returntype", Promise)
], ItensPedidoController.prototype, "create", null);
__decorate([
    common_1.Put(':pedidoId/:itensId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('pedidoId')), __param(1, common_1.Param('itensId')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_itens_pedidos_request_1.UpdateItensPedidosRequest]),
    __metadata("design:returntype", Promise)
], ItensPedidoController.prototype, "update", null);
__decorate([
    common_1.Get(':pedidoId'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [itens_pedido_1.ItensPedido] }),
    __param(0, common_1.Param('pedidoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItensPedidoController.prototype, "getAll", null);
__decorate([
    common_1.Delete(':pedidoId/:itensId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('pedidoId')), __param(1, common_1.Param('itensId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ItensPedidoController.prototype, "delete", null);
ItensPedidoController = __decorate([
    common_1.Controller('v1/itens/pedido'),
    swagger_1.ApiTags('Pedido'),
    __metadata("design:paramtypes", [itens_pedido_creator_service_1.ItensPedidoCreatorService,
        itens_pedido_reader_service_1.ItensPedidoReaderService,
        itens_pedido_eraser_service_1.ItensPedidoEraserService,
        itens_pedido_update_service_1.ItensPedidoUpdateService])
], ItensPedidoController);
exports.ItensPedidoController = ItensPedidoController;
//# sourceMappingURL=itens-pedido.controller.js.map