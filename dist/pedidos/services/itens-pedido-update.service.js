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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItensPedidoUpdateService = void 0;
const common_1 = require("@nestjs/common");
const pedido_repository_1 = require("../respositories/pedido.repository");
const update_itens_pedido_object_1 = require("../value-object/update-itens-pedido-object");
let ItensPedidoUpdateService = class ItensPedidoUpdateService {
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }
    async update(pedidoId, itensId, updateItensPedidosObject) {
        const pedido = await this.pedidoRepository.findOne(pedidoId);
        const itensPedido = pedido.findItensPedido(itensId);
        itensPedido.produto = updateItensPedidosObject.produto;
        itensPedido.fornecedorId = updateItensPedidosObject.fornecedorId;
        itensPedido.quantidade = updateItensPedidosObject.quantidade;
        itensPedido.vlUnitario = updateItensPedidosObject.vlUnitario;
        pedido.updateItensPedido(itensId, itensPedido);
        await this.pedidoRepository.save(pedido);
    }
};
ItensPedidoUpdateService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [pedido_repository_1.PedidoRepository])
], ItensPedidoUpdateService);
exports.ItensPedidoUpdateService = ItensPedidoUpdateService;
//# sourceMappingURL=itens-pedido-update.service.js.map