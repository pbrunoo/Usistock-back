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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskQueueSearchHistoryService = void 0;
const common_1 = require("@nestjs/common");
const task_queue_search_history_1 = require("../entities/aggregates/task-queue-search-history");
const task_queue_repository_1 = require("../repositories/task-queue.repository");
let CreateTaskQueueSearchHistoryService = class CreateTaskQueueSearchHistoryService {
    constructor(taskQueueRepository) {
        this.taskQueueRepository = taskQueueRepository;
    }
    async create(taskQueueId, taskQueueSearchId, newTaskQueueSearchHistoryRequest) {
        try {
            const newTaskQueueSearchHistory = new task_queue_search_history_1.TaskQueueSearcHistory(newTaskQueueSearchHistoryRequest);
            const taskQueue = await this.taskQueueRepository.findOne(taskQueueId);
            console.log(taskQueue);
            taskQueue.addTaskQueueHistory(taskQueueSearchId, newTaskQueueSearchHistory);
            return this.taskQueueRepository.save(taskQueue);
        }
        catch (e) {
            let errorMessage = e.message;
            if ((e === null || e === void 0 ? void 0 : e.code) === 11000)
                errorMessage = "Duplicated Index";
            throw new common_1.BadRequestException(errorMessage);
        }
    }
};
CreateTaskQueueSearchHistoryService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [task_queue_repository_1.TaskQueueRepository])
], CreateTaskQueueSearchHistoryService);
exports.CreateTaskQueueSearchHistoryService = CreateTaskQueueSearchHistoryService;
//# sourceMappingURL=create-task-queue-search-history.service.js.map