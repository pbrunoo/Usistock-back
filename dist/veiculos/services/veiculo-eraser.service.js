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
exports.VeiculoEraserService = void 0;
const common_1 = require("@nestjs/common");
const veiculo_repository_1 = require("../repositories/veiculo.repository");
let VeiculoEraserService = class VeiculoEraserService {
    constructor(veiculoRepository) {
        this.veiculoRepository = veiculoRepository;
    }
    async delete(id, userId) {
        const veiculo = await this.veiculoRepository.findOne(id);
        veiculo.status = 0;
        veiculo.deletedUserId = userId;
        veiculo.deletedAt = new Date();
        await this.veiculoRepository.save(veiculo);
    }
};
VeiculoEraserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [veiculo_repository_1.VeiculoRepository])
], VeiculoEraserService);
exports.VeiculoEraserService = VeiculoEraserService;
//# sourceMappingURL=veiculo-eraser.service.js.map