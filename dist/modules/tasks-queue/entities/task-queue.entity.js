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
exports.TaskQueueEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const mongodb_1 = require("mongodb");
const task_queue_search_1 = require("./aggregates/task-queue-search");
let TaskQueueEntity = class TaskQueueEntity {
    addTaskQueueHistory(taskQueueSearchId, taskQueueHistory) {
        console.log(new mongodb_1.ObjectId(taskQueueSearchId));
        const taskQueueSearchIndex = this.taskQueueSearch.findIndex(taskQueueSearch => taskQueueSearch.id.toHexString() == taskQueueSearchId);
        console.log(taskQueueSearchIndex);
        if (taskQueueSearchIndex !== -1) {
            this.taskQueueSearch[taskQueueSearchIndex].taskQueueSearcHistorys.push(taskQueueHistory);
        }
    }
    getByTaskSearchId(taskQueueSearchId) {
        const taskSearch = this
            .taskQueueSearch
            .find(search => search.id.toHexString() === taskQueueSearchId);
        return taskSearch;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], TaskQueueEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Object)
], TaskQueueEntity.prototype, "taskDate", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], TaskQueueEntity.prototype, "analisysObjectId", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], TaskQueueEntity.prototype, "batch", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], TaskQueueEntity.prototype, "flowId", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], TaskQueueEntity.prototype, "result", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [task_queue_search_1.TaskQueueSearch] }),
    typeorm_1.Column(),
    __metadata("design:type", Array)
], TaskQueueEntity.prototype, "taskQueueSearch", void 0);
TaskQueueEntity = __decorate([
    typeorm_1.Entity()
], TaskQueueEntity);
exports.TaskQueueEntity = TaskQueueEntity;
//# sourceMappingURL=task-queue.entity.js.map