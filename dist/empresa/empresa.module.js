"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const empresa_respository_1 = require("./repositories/empresa.respository");
const empresa_controller_1 = require("./controllers/empresa.controller");
const empresa_create_service_1 = require("./services/empresa-create.service");
const update_empresa_service_1 = require("./services/update-empresa.service");
const empresa_finder_service_1 = require("./services/empresa-finder.service");
const empresa_eraser_service_1 = require("./services/empresa-eraser.service");
const servicos_controllers_1 = require("./controllers/servicos.controllers");
const servicos_creator_service_1 = require("./services/servicos/servicos-creator.service");
const servicos_eraser_service_1 = require("./services/servicos/servicos-eraser.service");
const servicos_reader_service_1 = require("./services/servicos/servicos-reader.service");
let EmpresaModule = class EmpresaModule {
};
EmpresaModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                empresa_respository_1.EmpresaRepository,
            ])
        ],
        controllers: [
            empresa_controller_1.EmpresaController,
            servicos_controllers_1.ServicosController
        ],
        providers: [
            empresa_create_service_1.CreateEmpresaService,
            update_empresa_service_1.UpdateEmpresaService,
            empresa_finder_service_1.EmpresaFinderService,
            empresa_eraser_service_1.EmpresaEraserService,
            servicos_creator_service_1.ServicosCreatorService,
            servicos_eraser_service_1.ServicosEraserService,
            servicos_reader_service_1.ServicosReaderService
        ],
        exports: []
    })
], EmpresaModule);
exports.EmpresaModule = EmpresaModule;
//# sourceMappingURL=empresa.module.js.map