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
exports.PedidoFinderService = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pedido_repository_1 = require("../respositories/pedido.repository");
let PedidoFinderService = class PedidoFinderService {
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }
    async getAll() {
        const pedido = await this.pedidoRepository.getAll();
        return pedido;
    }
    async getByName(pedidoo) {
        const pedido = await this.pedidoRepository.find({
            pedido: pedidoo
        });
        return pedido;
    }
    async getByUnidadeId(id) {
        const pedido = await this.pedidoRepository.getPedidoByUnidadeId(id);
        return pedido;
    }
    async getById(id) {
        const pedido = await this.pedidoRepository.findOne(id);
        return pedido;
    }
    async getPedidoByUnidadeId(unidadeid) {
        const pedido = await this.getByUnidadeId(unidadeid);
        return pedido;
    }
};
__decorate([
    common_1.Get('all/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PedidoFinderService.prototype, "getPedidoByUnidadeId", null);
PedidoFinderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [pedido_repository_1.PedidoRepository])
], PedidoFinderService);
exports.PedidoFinderService = PedidoFinderService;
//# sourceMappingURL=pedido-finder.service.js.map