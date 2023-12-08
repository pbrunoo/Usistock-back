"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FornecedoresModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const fornecedor_controller_1 = require("./controllers/fornecedor.controller");
const fornecedor_repository_1 = require("./repositories/fornecedor.repository");
const fornecedor_create_service_1 = require("./services/fornecedor-create.service");
const fornecedor_eraser_service_1 = require("./services/fornecedor-eraser.service");
const fornecedor_finder_service_1 = require("./services/fornecedor-finder.service");
const update_fornecedor_service_1 = require("./services/update-fornecedor.service");
let FornecedoresModule = class FornecedoresModule {
};
FornecedoresModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                fornecedor_repository_1.FornecedorRepository,
            ])
        ],
        controllers: [
            fornecedor_controller_1.FornecedorController
        ],
        providers: [
            fornecedor_create_service_1.CreateFornecedorService,
            update_fornecedor_service_1.UpdateFornecedorService,
            fornecedor_finder_service_1.FornecedorFinderService,
            fornecedor_eraser_service_1.FornecedorEraserService
        ]
    })
], FornecedoresModule);
exports.FornecedoresModule = FornecedoresModule;
//# sourceMappingURL=fornecedor.module.js.map