"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskQueueModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const task_queue_repository_1 = require("./repositories/task-queue.repository");
const create_task_queue_service_1 = require("./services/create-task-queue.service");
const update_task_queue_service_1 = require("./services/update-task-queue.service");
const task_queue_eraser_service_1 = require("./services/task-queue-eraser.service");
const task_queue_controller_1 = require("./controllers/task-queue.controller");
const task_queue_finder_service_1 = require("./services/task-queue-finder.service");
const create_task_queue_search_history_service_1 = require("./services/create-task-queue-search-history.service");
const task_queue_search_history_finder_service_1 = require("./services/task-queue-search-history-finder.service");
let TaskQueueModule = class TaskQueueModule {
};
TaskQueueModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                task_queue_repository_1.TaskQueueRepository,
            ])
        ],
        controllers: [
            task_queue_controller_1.TaskQueueController
        ],
        providers: [
            create_task_queue_service_1.CreateTaskQueueService,
            update_task_queue_service_1.UpdateTaskQueueService,
            task_queue_eraser_service_1.TaskQueueEraserService,
            task_queue_finder_service_1.TaskQueueFinderService,
            create_task_queue_search_history_service_1.CreateTaskQueueSearchHistoryService,
            task_queue_search_history_finder_service_1.TaskQueueSearchHistoryFinderService
        ]
    })
], TaskQueueModule);
exports.TaskQueueModule = TaskQueueModule;
//# sourceMappingURL=tasks-queue.module.js.map