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
exports.ClienteEraserService = void 0;
const common_1 = require("@nestjs/common");
const cliente_repository_1 = require("../repositories/cliente.repository");
let ClienteEraserService = class ClienteEraserService {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async delete(id) {
        const cliente = await this.clienteRepository.findOne(id);
        await this.clienteRepository.delete(id);
    }
};
ClienteEraserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [cliente_repository_1.ClienteRepository])
], ClienteEraserService);
exports.ClienteEraserService = ClienteEraserService;
//# sourceMappingURL=cliente-eraser.cliente.js.map