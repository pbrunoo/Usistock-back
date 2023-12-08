"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const unidade_repository_1 = require("../unidade/respositories/unidade.repository");
const itens_pedido_controller_1 = require("./controllers/itens-pedido.controller");
const pedido_controller_1 = require("./controllers/pedido.controller");
const pedido_repository_1 = require("./respositories/pedido.repository");
const itens_pedido_update_service_1 = require("./services/itens-pedido-update.service");
const itens_pedido_creator_service_1 = require("./services/itens-pedido/itens-pedido-creator.service");
const itens_pedido_eraser_service_1 = require("./services/itens-pedido/itens-pedido-eraser.service");
const itens_pedido_reader_service_1 = require("./services/itens-pedido/itens-pedido-reader.service");
const pedido_create_service_1 = require("./services/pedido-create.service");
const pedido_eraser_service_1 = require("./services/pedido-eraser.service");
const pedido_finder_service_1 = require("./services/pedido-finder.service");
const update_pedido_service_1 = require("./services/update-pedido.service");
let PedidoModule = class PedidoModule {
};
PedidoModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                pedido_repository_1.PedidoRepository,
                unidade_repository_1.UnidadeRepository
            ])
        ],
        controllers: [
            pedido_controller_1.PedidoControllers,
            itens_pedido_controller_1.ItensPedidoController
        ],
        providers: [
            pedido_create_service_1.CreatePedidoService,
            update_pedido_service_1.UpdatePedidoService,
            pedido_finder_service_1.PedidoFinderService,
            pedido_eraser_service_1.PedidoEraserService,
            itens_pedido_creator_service_1.ItensPedidoCreatorService,
            itens_pedido_eraser_service_1.ItensPedidoEraserService,
            itens_pedido_reader_service_1.ItensPedidoReaderService,
            itens_pedido_update_service_1.ItensPedidoUpdateService
        ]
    })
], PedidoModule);
exports.PedidoModule = PedidoModule;
//# sourceMappingURL=pedido.module.js.map