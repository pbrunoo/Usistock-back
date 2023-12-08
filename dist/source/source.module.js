"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const source_repository_1 = require("./repositories/source.repository");
const source_controller_1 = require("./controllers/source.controller");
const create_source_service_1 = require("./services/create-source.service");
const update_source_service_1 = require("./services/update-source.service");
const source_eraser_service_1 = require("./services/source-eraser.service");
const source_finder_service_1 = require("./services/source-finder.service");
let SourceModule = class SourceModule {
};
SourceModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                source_repository_1.SourceRepository,
            ])
        ],
        controllers: [
            source_controller_1.SourceController
        ],
        providers: [
            create_source_service_1.CreateSourceService,
            update_source_service_1.UpdateSourceService,
            source_eraser_service_1.SourceEraserService,
            source_finder_service_1.SourceFinderService
        ]
    })
], SourceModule);
exports.SourceModule = SourceModule;
//# sourceMappingURL=source.module.js.map