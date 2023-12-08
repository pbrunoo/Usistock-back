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
exports.TaskQueueSearch = void 0;
const mongodb_1 = require("mongodb");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const task_queue_search_history_1 = require("./task-queue-search-history");
class TaskQueueSearch {
    constructor(taskQueueSearch) {
        this.taskQueueSearcHistorys = [];
        if (!taskQueueSearch) {
            return;
        }
        this.id = taskQueueSearch.id || new mongodb_1.ObjectID();
        this.sourceAddress = taskQueueSearch.sourceAddress;
        this.searchType = taskQueueSearch.searchType;
        this.searchName = taskQueueSearch.searchName;
        this.status = taskQueueSearch.status;
        this.message = taskQueueSearch.message;
        this.taskQueueSearcHistorys = [];
    }
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], TaskQueueSearch.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], TaskQueueSearch.prototype, "sourceAddress", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], TaskQueueSearch.prototype, "searchType", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], TaskQueueSearch.prototype, "searchName", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], TaskQueueSearch.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], TaskQueueSearch.prototype, "message", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [task_queue_search_history_1.TaskQueueSearcHistory] }),
    __metadata("design:type", Array)
], TaskQueueSearch.prototype, "taskQueueSearcHistorys", void 0);
exports.TaskQueueSearch = TaskQueueSearch;
//# sourceMappingURL=task-queue-search.js.map