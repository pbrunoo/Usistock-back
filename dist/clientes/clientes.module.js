"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cliente_controller_1 = require("./controllers/cliente.controller");
const cliente_repository_1 = require("./repositories/cliente.repository");
const cliente_eraser_service_1 = require("./services/cliente-eraser.service");
const cliente_finder_service_1 = require("./services/cliente-finder.service");
const create_cliente_service_1 = require("./services/create-cliente.service");
const update_cliente_service_1 = require("./services/update-cliente.service");
let ClientesModule = class ClientesModule {
};
ClientesModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                cliente_repository_1.ClienteRepository,
            ])
        ],
        controllers: [
            cliente_controller_1.ClienteController
        ],
        providers: [
            create_cliente_service_1.CreateClienteService,
            update_cliente_service_1.UpdateClienteService,
            cliente_eraser_service_1.ClienteEraserService,
            cliente_finder_service_1.ClienteFinderService
        ]
    })
], ClientesModule);
exports.ClientesModule = ClientesModule;
//# sourceMappingURL=clientes.module.js.map