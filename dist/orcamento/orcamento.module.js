"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcamentoModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const unidade_repository_1 = require("../unidade/respositories/unidade.repository");
const orcamento_controller_1 = require("./controllers/orcamento.controller");
const produto_controllers_1 = require("./controllers/produto.controllers");
const orcamento_repository_1 = require("./respositories/orcamento.repository");
const orcamento_create_service_1 = require("./services/orcamento-create.service");
const orcamento_eraser_service_1 = require("./services/orcamento-eraser.service");
const orcamento_finder_service_1 = require("./services/orcamento-finder.service");
const produto_creator_service_1 = require("./services/produto/produto-creator.service");
const produto_eraser_service_1 = require("./services/produto/produto-eraser.service");
const produto_reader_service_1 = require("./services/produto/produto-reader.service");
const produto_update_service_1 = require("./services/produto/produto-update.service");
const update_orcamento_service_1 = require("./services/update-orcamento.service");
let OrcamentoModule = class OrcamentoModule {
};
OrcamentoModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                orcamento_repository_1.OrcamentoRepository,
                unidade_repository_1.UnidadeRepository
            ])
        ],
        controllers: [
            orcamento_controller_1.OrcamentoController,
            produto_controllers_1.ProdutoController
        ],
        providers: [
            orcamento_create_service_1.CreateOrcamentoService,
            update_orcamento_service_1.UpdateOrcamentoService,
            orcamento_finder_service_1.OrcamentoFinderService,
            orcamento_eraser_service_1.OrcamentoEraserService,
            produto_creator_service_1.ProdutoCreatorService,
            produto_eraser_service_1.ProdutoEraserService,
            produto_update_service_1.ProdutoUpdateService,
            produto_reader_service_1.ProdutoReaderService
        ]
    })
], OrcamentoModule);
exports.OrcamentoModule = OrcamentoModule;
//# sourceMappingURL=orcamento.module.js.map