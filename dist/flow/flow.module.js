"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const flow_repository_1 = require("./repositories/flow.repository");
const flow_contoller_1 = require("./controllers/flow.contoller");
const create_flow_service_1 = require("./services/create-flow.service");
const update_flow_service_1 = require("./services/update-flow.service");
const flow_eraser_service_1 = require("./services/flow-eraser.service");
const flow_finder_service_1 = require("./services/flow-finder.service");
let FlowModule = class FlowModule {
};
FlowModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                flow_repository_1.FlowRepository,
            ])
        ],
        controllers: [
            flow_contoller_1.FlowController
        ],
        providers: [
            create_flow_service_1.CreateFlowService,
            update_flow_service_1.UpdateFlowService,
            flow_eraser_service_1.FlowEraserService,
            flow_finder_service_1.FLowFinderService
        ]
    })
], FlowModule);
exports.FlowModule = FlowModule;
//# sourceMappingURL=flow.module.js.map