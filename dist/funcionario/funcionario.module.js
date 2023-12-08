"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionariosModule = void 0;
const empresa_respository_1 = require("../empresa/repositories/empresa.respository");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const funcionario_controller_1 = require("./controllers/funcionario.controller");
const funcionario_repository_1 = require("./repositories/funcionario.repository");
const funcionario_create_service_1 = require("./services/funcionario-create.service");
const funcionario_erase_service_1 = require("./services/funcionario-erase.service");
const funcionario_finder_service_1 = require("./services/funcionario-finder.service");
const update_funcionario_service_1 = require("./services/update-funcionario.service");
let FuncionariosModule = class FuncionariosModule {
};
FuncionariosModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                funcionario_repository_1.FuncionarioRepository,
                empresa_respository_1.EmpresaRepository
            ])
        ],
        controllers: [
            funcionario_controller_1.FuncionarioController
        ],
        providers: [
            funcionario_create_service_1.CreateFuncionarioService,
            update_funcionario_service_1.UpdateFuncionarioService,
            funcionario_finder_service_1.FuncionarioFinderService,
            funcionario_erase_service_1.FuncionarioEraserService
        ]
    })
], FuncionariosModule);
exports.FuncionariosModule = FuncionariosModule;
//# sourceMappingURL=funcionario.module.js.map