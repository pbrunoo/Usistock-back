"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const unidade_repository_1 = require("../unidade/respositories/unidade.repository");
const estoque_controller_1 = require("./controllers/estoque.controller");
const estoque_repository_1 = require("./repositories/estoque.repository");
const estoque_create_service_1 = require("./services/estoque-create.service");
const estoque_eraser_service_1 = require("./services/estoque-eraser.service");
const estoque_finder_service_1 = require("./services/estoque-finder.service");
const update_estoque_service_1 = require("./services/update-estoque.service");
const historico_estoque_controllers_1 = require("./controllers/historico-estoque.controllers");
const historico_estoque_creator_service_1 = require("./services/historico-estoque/historico-estoque-creator.service");
const historico_estoque_eraser_service_1 = require("./services/historico-estoque/historico-estoque-eraser.service");
const historico_estoque_reader_service_1 = require("./services/historico-estoque/historico-estoque-reader.service");
const historico_estoque_update_service_1 = require("./services/historico-estoque/historico-estoque-update.service");
let EstoqueModule = class EstoqueModule {
};
EstoqueModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                estoque_repository_1.EstoqueRepository,
                unidade_repository_1.UnidadeRepository,
            ])
        ],
        controllers: [
            estoque_controller_1.EstoqueController,
            historico_estoque_controllers_1.HistoricoEstoqueController
        ],
        providers: [
            estoque_create_service_1.CreateEstoqueService,
            update_estoque_service_1.UpdateEstoqueService,
            estoque_finder_service_1.EstoqueFinderService,
            estoque_eraser_service_1.EstoqueEraserService,
            historico_estoque_creator_service_1.HistoricoEstoqueCreatorService,
            historico_estoque_eraser_service_1.HistoricoEstoqueEraserService,
            historico_estoque_reader_service_1.HistoricoEstoqueReaderService,
            historico_estoque_update_service_1.HistoricoEstoqueUpdateService
        ]
    })
], EstoqueModule);
exports.EstoqueModule = EstoqueModule;
//# sourceMappingURL=estoque.module.js.map