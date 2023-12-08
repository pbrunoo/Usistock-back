"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumoModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const consumo_repository_1 = require("./repositories/consumo.repository");
const consumo_controllers_1 = require("./controllers/consumo.controllers");
const consumo_create_service_1 = require("./services/consumo-create.service");
const update_consumo_service_1 = require("./services/update-consumo.service");
const consumo_finder_service_1 = require("./services/consumo-finder.service");
const consumo_eraser_service_1 = require("./services/consumo-eraser.service");
const fornecedor_repository_1 = require("../fornecedor/repositories/fornecedor.repository");
let ConsumoModule = class ConsumoModule {
};
ConsumoModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                consumo_repository_1.ConsumoRepository,
                fornecedor_repository_1.FornecedorRepository
            ])
        ],
        controllers: [
            consumo_controllers_1.ConsumoController
        ],
        providers: [
            consumo_create_service_1.CreateConsumoService,
            update_consumo_service_1.UpdateConsumoService,
            consumo_finder_service_1.ConsumoFinderService,
            consumo_eraser_service_1.ConsumoEraserService
        ]
    })
], ConsumoModule);
exports.ConsumoModule = ConsumoModule;
//# sourceMappingURL=consumo.module.js.map