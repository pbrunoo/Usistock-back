"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnidadeModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const unidade_repository_1 = require("./respositories/unidade.repository");
const unidade_controller_1 = require("./controllers/unidade.controller");
const unidade_create_service_1 = require("./services/unidade-create.service");
const update_unidade_service_1 = require("./services/update-unidade.service");
const unidade_finder_service_1 = require("./services/unidade-finder.service");
const unidade_eraser_service_1 = require("./services/unidade-eraser.service");
const empresa_module_1 = require("../empresa/empresa.module");
const empresa_respository_1 = require("../empresa/repositories/empresa.respository");
let UnidadeModule = class UnidadeModule {
};
UnidadeModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                unidade_repository_1.UnidadeRepository,
                empresa_respository_1.EmpresaRepository
            ]),
        ],
        controllers: [
            unidade_controller_1.UnidadeController
        ],
        providers: [
            unidade_create_service_1.CreateUnidadeService,
            update_unidade_service_1.UpdateUnidadeService,
            unidade_finder_service_1.UnidadeFinderService,
            unidade_eraser_service_1.UnidadeEraserService
        ]
    })
], UnidadeModule);
exports.UnidadeModule = UnidadeModule;
//# sourceMappingURL=unidade.module.js.map