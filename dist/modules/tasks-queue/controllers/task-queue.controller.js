"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskQueueController = void 0;
const common_1 = require("@nestjs/common");
const task_queue_entity_1 = require("../entities/task-queue.entity");
const new_task_queue_1 = require("../requests/new-task-queue");
const create_task_queue_service_1 = require("../services/create-task-queue.service");
const swagger_1 = require("@nestjs/swagger");
const update_task_queue_service_1 = require("../services/update-task-queue.service");
const task_queue_eraser_service_1 = require("../services/task-queue-eraser.service");
const task_queue_finder_service_1 = require("../services/task-queue-finder.service");
const create_task_queue_search_history_service_1 = require("../services/create-task-queue-search-history.service");
const new_task_queue_search_history_1 = require("../requests/new-task-queue-search-history");
const task_queue_search_history_finder_service_1 = require("../services/task-queue-search-history-finder.service");
let TaskQueueController = class TaskQueueController {
    constructor(createTaskQueueService, updateTaskQueueService, taskQueueFinderService, taskQueueEraserService, createTaskQueueSearchHistoryService, taskQueueSearchHistoryFinderService) {
        this.createTaskQueueService = createTaskQueueService;
        this.updateTaskQueueService = updateTaskQueueService;
        this.taskQueueFinderService = taskQueueFinderService;
        this.taskQueueEraserService = taskQueueEraserService;
        this.createTaskQueueSearchHistoryService = createTaskQueueSearchHistoryService;
        this.taskQueueSearchHistoryFinderService = taskQueueSearchHistoryFinderService;
    }
    async create(createTaskQueueRequest) {
        const taskqueues = await this
            .createTaskQueueService
            .create(createTaskQueueRequest);
        return taskqueues;
    }
    async createTaskQUeueSearchHistory(taskQueueId, taskQueueSearchId, createTaskQueueSearchHistoryRequest) {
        const taskQueuesSearchHistorys = await this
            .createTaskQueueSearchHistoryService
            .create(taskQueueId, taskQueueSearchId, createTaskQueueSearchHistoryRequest);
        return taskQueuesSearchHistorys;
    }
    async getAllTaskQueueSearchHistorys(taskQueueId, taskQueueSearchId) {
        const taskQueuesSearchHistorys = await this.taskQueueSearchHistoryFinderService.getAll(taskQueueId, taskQueueSearchId);
        return taskQueuesSearchHistorys;
    }
    async update(id, upodateBlacklistRequest) {
        await this.updateTaskQueueService.update(id, status);
    }
    async getAll() {
        const taskqueues = await this.taskQueueFinderService.getAll();
        return taskqueues;
    }
    async getByAnalisysObject(analisysobjectid) {
        const taskqueue = await this.taskQueueFinderService.getByAnalisysObjectManual(analisysobjectid);
        return taskqueue;
    }
    async delete(id) {
        await this.taskQueueEraserService.delete(id);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: task_queue_entity_1.TaskQueueEntity }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_task_queue_1.NewTaskQueueRequest]),
    __metadata("design:returntype", Promise)
], TaskQueueController.prototype, "create", null);
__decorate([
    common_1.Post('task-queue-history/:taskQueueId/:taskQueueSearchId'),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: task_queue_entity_1.TaskQueueEntity }),
    __param(0, common_1.Param('taskQueueId')), __param(1, common_1.Param('taskQueueSearchId')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, new_task_queue_search_history_1.NewTaskQueueSearchHistoryRequest]),
    __metadata("design:returntype", Promise)
], TaskQueueController.prototype, "createTaskQUeueSearchHistory", null);
__decorate([
    common_1.Get('task-queue-history-finder/:taskQueueId/:taskQueueSearchId'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [task_queue_entity_1.TaskQueueEntity] }),
    __param(0, common_1.Param('taskQueueId')), __param(1, common_1.Param('taskQueueSearchId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TaskQueueController.prototype, "getAllTaskQueueSearchHistorys", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_task_queue_service_1.UpdateTaskQueueService]),
    __metadata("design:returntype", Promise)
], TaskQueueController.prototype, "update", null);
__decorate([
    common_1.Get('all'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [task_queue_entity_1.TaskQueueEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskQueueController.prototype, "getAll", null);
__decorate([
    common_1.Get(':analisysobjectid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: task_queue_entity_1.TaskQueueEntity }),
    __param(0, common_1.Param('analisysobjectid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskQueueController.prototype, "getByAnalisysObject", null);
__decorate([
    common_1.Delete(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskQueueController.prototype, "delete", null);
TaskQueueController = __decorate([
    common_1.Controller('v1/task-queue'),
    swagger_1.ApiTags('TaskQueue'),
    __metadata("design:paramtypes", [create_task_queue_service_1.CreateTaskQueueService,
        update_task_queue_service_1.UpdateTaskQueueService,
        task_queue_finder_service_1.TaskQueueFinderService,
        task_queue_eraser_service_1.TaskQueueEraserService,
        create_task_queue_search_history_service_1.CreateTaskQueueSearchHistoryService,
        task_queue_search_history_finder_service_1.TaskQueueSearchHistoryFinderService])
], TaskQueueController);
exports.TaskQueueController = TaskQueueController;
//# sourceMappingURL=task-queue.controller.js.map