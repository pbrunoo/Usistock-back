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
exports.ItensPedidoCreatorService = void 0;
const common_1 = require("@nestjs/common");
const itens_pedido_1 = require("../../entities/agreggates/itens-pedido");
const new_itens_pedidos_request_1 = require("../../requets/itens-pedido/new-itens-pedidos.request");
const pedido_repository_1 = require("../../respositories/pedido.repository");
const new_itens_pedido_object_1 = require("../../value-object/new-itens-pedido-object");
let ItensPedidoCreatorService = class ItensPedidoCreatorService {
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }
    async create(pedidoId, newItensPedido) {
        const pedido = await this.pedidoRepository.findOne(pedidoId);
        const registro = new itens_pedido_1.ItensPedido({
            produto: newItensPedido.produto,
            fornecedorId: newItensPedido.fornecedorId,
            quantidade: newItensPedido.quantidade,
            vlUnitario: newItensPedido.vlUnitario
        });
        pedido.AddItensPedido(registro);
        await this.pedidoRepository.save(pedido);
        return pedido;
    }
};
ItensPedidoCreatorService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [pedido_repository_1.PedidoRepository])
], ItensPedidoCreatorService);
exports.ItensPedidoCreatorService = ItensPedidoCreatorService;
//# sourceMappingURL=itens-pedido-creator.service.js.map