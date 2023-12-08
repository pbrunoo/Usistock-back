"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalisysObjectModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const analysis_object_repository_1 = require("./repositories/analysis-object.repository");
const analisys_object_controller_1 = require("./controllers/analisys-object.controller");
const create_analisys_object_service_1 = require("./services/create-analisys-object.service");
const platform_express_1 = require("@nestjs/platform-express");
const analisys_object_eraser_service_1 = require("./services/analisys-object-eraser.service");
const analisys_object_finder_service_1 = require("./services/analisys-object-finder.service");
const flow_repository_1 = require("../../flow/repositories/flow.repository");
const update_analisys_object_service_1 = require("./services/update-analisys-object.service");
const analisys_object_details_controller_1 = require("./controllers/analisys-object-details.controller");
const analisys_object_details_reader_service_1 = require("./services/analisys-object-details/analisys-object-details-reader.service");
const task_queue_finder_service_1 = require("../tasks-queue/services/task-queue-finder.service");
const task_queue_repository_1 = require("../tasks-queue/repositories/task-queue.repository");
const analisys_object_dashboard_service_1 = require("./services/analisys-object-dashboard.service");
let AnalisysObjectModule = class AnalisysObjectModule {
};
AnalisysObjectModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                analysis_object_repository_1.AnalisysObjectRepository,
                flow_repository_1.FlowRepository,
                task_queue_repository_1.TaskQueueRepository
            ]),
            platform_express_1.MulterModule.registerAsync({
                useFactory: () => ({
                    dest: './../../files',
                }),
            }),
        ],
        controllers: [
            analisys_object_controller_1.AnalisysObjectController,
            analisys_object_details_controller_1.AnalisysObjectDetailsController
        ],
        providers: [
            create_analisys_object_service_1.CreateAnalisysObjectService,
            analisys_object_eraser_service_1.AnalisysObjectEraserService,
            analisys_object_finder_service_1.AnalisysObjectFinderService,
            update_analisys_object_service_1.UpdateAnalisysObjectService,
            analisys_object_details_reader_service_1.AnalisysObjectDetailsReaderService,
            task_queue_finder_service_1.TaskQueueFinderService,
            analisys_object_dashboard_service_1.AnalisysObjectDashboardService
        ]
    })
], AnalisysObjectModule);
exports.AnalisysObjectModule = AnalisysObjectModule;
//# sourceMappingURL=analysis-object.module.js.map