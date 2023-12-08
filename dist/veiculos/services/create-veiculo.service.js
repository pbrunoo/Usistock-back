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
exports.CreateVeiculoService = void 0;
const common_1 = require("@nestjs/common");
const veiculo_repository_1 = require("../repositories/veiculo.repository");
let CreateVeiculoService = class CreateVeiculoService {
    constructor(veiculoRepository) {
        this.veiculoRepository = veiculoRepository;
    }
    async create(newVeiculoRequest) {
        try {
            const veiculo = await this.veiculoRepository.find({
                where: {
                    placa: newVeiculoRequest.placa
                }
            });
            if (veiculo.length > 0) {
                throw new common_1.BadRequestException('O Veículo já existe');
            }
            return this.veiculoRepository.save(newVeiculoRequest);
        }
        catch (e) {
            let errorMessage = e.message;
            if ((e === null || e === void 0 ? void 0 : e.code) === 11000)
                errorMessage = "Duplicated Index";
            throw new common_1.BadRequestException(errorMessage);
        }
    }
};
CreateVeiculoService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [veiculo_repository_1.VeiculoRepository])
], CreateVeiculoService);
exports.CreateVeiculoService = CreateVeiculoService;
//# sourceMappingURL=create-veiculo.service.js.map