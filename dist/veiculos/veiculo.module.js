"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculoModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const veiculo_repository_1 = require("./repositories/veiculo.repository");
const veiculo_controller_1 = require("./controllers/veiculo.controller");
const create_veiculo_service_1 = require("./services/create-veiculo.service");
const update_veiculo_service_1 = require("./services/update-veiculo.service");
const veiculo_eraser_service_1 = require("./services/veiculo-eraser.service");
const veiculo_finder_service_1 = require("./services/veiculo-finder.service");
let VeiculoModule = class VeiculoModule {
};
VeiculoModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                veiculo_repository_1.VeiculoRepository
            ]),
        ],
        controllers: [
            veiculo_controller_1.VeiculoController
        ],
        providers: [
            create_veiculo_service_1.CreateVeiculoService,
            update_veiculo_service_1.UpdateVeiculoService,
            veiculo_eraser_service_1.VeiculoEraserService,
            veiculo_finder_service_1.VeiculoFinderService
        ]
    })
], VeiculoModule);
exports.VeiculoModule = VeiculoModule;
//# sourceMappingURL=veiculo.module.js.map