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
exports.TaskQueueSearcHistory = void 0;
const mongodb_1 = require("mongodb");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
class TaskQueueSearcHistory {
    constructor(taskQueueSearchHistory) {
        this.id = new mongodb_1.ObjectId();
        this.taskDate = new Date();
        this.userId = taskQueueSearchHistory.userId;
        this.status = taskQueueSearchHistory.status;
        this.description = taskQueueSearchHistory.description;
    }
}
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectId)
], TaskQueueSearcHistory.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], TaskQueueSearcHistory.prototype, "taskDate", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], TaskQueueSearcHistory.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], TaskQueueSearcHistory.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], TaskQueueSearcHistory.prototype, "description", void 0);
exports.TaskQueueSearcHistory = TaskQueueSearcHistory;
//# sourceMappingURL=task-queue-search-history.js.map